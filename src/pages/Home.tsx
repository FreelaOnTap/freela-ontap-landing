import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AudienceCTA } from '../components/AudienceCTA.tsx'
import { MascotPlaceholder } from '../components/MascotPlaceholder.tsx'

function useScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])
}

export function Home() {
  useScrollToHash()

  return (
    <>
      <section className="section-shell text-center">
        <p className="eyebrow" style={{ color: 'var(--color-link)' }}>
          FreelaOnTap
        </p>
        <h1
          className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Transformando instabilidade em oportunidade.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg" style={{ color: 'var(--color-text-secondary)' }}>
          Conectamos freelancers a bares, restaurantes, hotéis e eventos de Porto Alegre para turnos de última
          hora — sem intermediário complicado, dos dois lados do balcão.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#freelancer"
            className="rounded-[var(--radius-lg)] px-6 py-3 font-semibold min-h-11 flex items-center"
            style={{ background: '#A44700', color: '#FFFFFF' }}
          >
            Sou freelancer
          </a>
          <a
            href="#empresa"
            className="rounded-[var(--radius-lg)] px-6 py-3 font-semibold min-h-11 flex items-center"
            style={{ background: '#00549A', color: '#FFFFFF' }}
          >
            Sou empresa
          </a>
        </div>
      </section>

      <section id="freelancer" className="scope-freelancer scroll-mt-20">
        <div className="section-shell grid gap-10 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="eyebrow">Pra quem quer trabalhar</p>
            <h2 className="mt-3 text-3xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
              Bico decente, sem enrolação.
            </h2>
            <p className="mt-4" style={{ color: 'var(--color-text-secondary)' }}>
              Escolhe o turno, no teu bairro, no dia que der. Sem currículo, sem processo seletivo de três
              fases — só o teu perfil e a vaga certa.
            </p>
            <ol className="mt-6 flex flex-col gap-3">
              {[
                'Cadastra teu perfil em minutos.',
                'Vê as vagas de bar, evento, hotel e restaurante perto de você.',
                'Aceita o turno e trabalha — o pagamento é combinado na vaga.',
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                    style={{ background: 'var(--accent)', color: 'var(--on-accent)' }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ color: 'var(--color-text-primary)' }}>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <AudienceCTA label="Quero ser avisado do lançamento" subject="Quero ser freelancer no FreelaOnTap" />
            </div>
          </div>
          <div className="card">
            <p className="text-sm font-semibold" style={{ color: 'var(--color-text-tertiary)' }}>
              Sem pegadinha
            </p>
            <p className="mt-2" style={{ color: 'var(--color-text-primary)' }}>
              Trabalha na tua cidade, no teu ritmo. Não precisa de carro, moto ou equipamento — só disposição
              pro turno.
            </p>
          </div>
        </div>
      </section>

      <section id="empresa" className="scope-business scroll-mt-20">
        <div className="section-shell grid gap-10 sm:grid-cols-2 sm:items-center">
          <div className="card order-2 sm:order-1">
            <p className="text-sm font-semibold" style={{ color: 'var(--color-text-tertiary)' }}>
              Reforço sob demanda
            </p>
            <p className="mt-2" style={{ color: 'var(--color-text-primary)' }}>
              Faltou gente de última hora? Publique a vaga e encontre freelancers disponíveis na sua região
              antes do turno começar.
            </p>
          </div>
          <div className="order-1 sm:order-2">
            <p className="eyebrow">Pra quem precisa de reforço</p>
            <h2 className="mt-3 text-3xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
              Preencha turnos de última hora sem drama.
            </h2>
            <p className="mt-4" style={{ color: 'var(--color-text-secondary)' }}>
              Bares, restaurantes, hotéis e eventos de Porto Alegre usam o FreelaOnTap pra cobrir ausências e
              picos de demanda sem depender de agência.
            </p>
            <ol className="mt-6 flex flex-col gap-3">
              {[
                'Publique a vaga com data, função e valor do turno.',
                'Veja freelancers disponíveis na sua região.',
                'Confirme quem vai trabalhar — turno coberto.',
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                    style={{ background: 'var(--accent)', color: 'var(--on-accent)' }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ color: 'var(--color-text-primary)' }}>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <AudienceCTA label="Quero ser avisado do lançamento" subject="Quero cadastrar minha empresa no FreelaOnTap" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell text-center">
        <p className="eyebrow" style={{ color: 'var(--color-link)' }}>
          O produto
        </p>
        <h2 className="mt-3 text-3xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
          Dois apps, um só objetivo.
        </h2>
        <MascotPlaceholder />
        <p className="mx-auto mt-4 max-w-xl text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
          Ilustração provisória — o mascote oficial do squad ainda está em produção.
        </p>
      </section>

      <section className="section-shell">
        <p className="eyebrow text-center" style={{ color: 'var(--color-link)' }}>
          Quem já usou
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
          Em breve, histórias daqui de Porto Alegre.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {['Freelancer', 'Bar ou restaurante', 'Evento ou hotel'].map((label) => (
            <div key={label} className="card text-left">
              <p className="text-sm font-semibold" style={{ color: 'var(--color-text-tertiary)' }}>
                {label}
              </p>
              <p className="mt-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                O depoimento de quem usou o FreelaOnTap no teu bairro entra aqui assim que lançarmos.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell text-center">
        <h2 className="text-3xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
          Quer ser um dos primeiros a usar?
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#freelancer"
            className="rounded-[var(--radius-lg)] px-6 py-3 font-semibold min-h-11 flex items-center"
            style={{ background: '#A44700', color: '#FFFFFF' }}
          >
            Sou freelancer
          </a>
          <a
            href="#empresa"
            className="rounded-[var(--radius-lg)] px-6 py-3 font-semibold min-h-11 flex items-center"
            style={{ background: '#00549A', color: '#FFFFFF' }}
          >
            Sou empresa
          </a>
        </div>
      </section>
    </>
  )
}
