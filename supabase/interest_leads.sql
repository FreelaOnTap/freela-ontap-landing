-- Interest list captured by the landing page form (freelancers waiting for the app or for
-- Android, and businesses that want to be contacted). Run once in the Supabase SQL editor of
-- the same project the apps use.
--
-- anon can only INSERT, and only the columns below — no SELECT, so a visitor can never read
-- anyone else's lead. The form sends `Prefer: return=minimal` for exactly that reason.
-- The team reads the table from the dashboard (service role).

create table public.interest_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  audience text not null check (audience in ('freelancer', 'business')),
  name text not null check (char_length(name) between 2 and 120),
  whatsapp text not null check (whatsapp ~ '^[0-9]{10,13}$'),
  email text check (email is null or (char_length(email) <= 254 and email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$')),
  city text not null check (char_length(city) <= 60),
  phone_os text check (phone_os in ('ios', 'android')),
  role text check (char_length(role) <= 60),
  business_name text check (char_length(business_name) <= 120),
  business_type text check (char_length(business_type) <= 60),
  neighborhood text check (char_length(neighborhood) <= 80),
  contact_role text check (char_length(contact_role) <= 80),
  hiring_frequency text check (char_length(hiring_frequency) <= 60),
  source text check (char_length(source) <= 120),
  consented boolean not null check (consented),
  constraint interest_leads_freelancer_fields
    check (audience <> 'freelancer' or (role is not null and phone_os is not null)),
  constraint interest_leads_business_fields
    check (audience <> 'business' or (business_name is not null and business_type is not null and hiring_frequency is not null))
);

alter table public.interest_leads enable row level security;

revoke all on public.interest_leads from anon, authenticated;

grant insert (
  audience, name, whatsapp, email, city, phone_os, role, business_name, business_type,
  neighborhood, contact_role, hiring_frequency, source, consented
) on public.interest_leads to anon;

create policy "Visitors can join the interest list"
  on public.interest_leads
  for insert
  to anon
  with check (true);

-- Abuse guard. The anon key is public, so the browser-side honeypot alone stops nothing a script
-- can't skip. A repeat of the same number is dropped silently (RETURN NULL — the caller still gets
-- 201, so the endpoint can't be used to check whether a number is on the list), and the whole table
-- accepts at most 30 new leads per minute. SECURITY DEFINER because anon has no SELECT to count with.

create index interest_leads_audience_whatsapp_idx on public.interest_leads (audience, whatsapp);
create index interest_leads_created_at_idx on public.interest_leads (created_at);

create function public.interest_leads_guard()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if exists (
    select 1 from public.interest_leads
    where audience = new.audience and whatsapp = new.whatsapp
  ) then
    return null;
  end if;

  if (
    select count(*) from public.interest_leads
    where created_at > now() - interval '1 minute'
  ) >= 30 then
    raise exception 'interest list rate limit reached';
  end if;

  return new;
end;
$$;

revoke all on function public.interest_leads_guard() from public, anon, authenticated;

create trigger interest_leads_guard
  before insert on public.interest_leads
  for each row execute function public.interest_leads_guard();
