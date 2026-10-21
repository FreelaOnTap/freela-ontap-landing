import { next } from '@vercel/functions'
import { routeAgentRequest } from './src/lib/agentRouting.ts'

export const config = { matcher: '/((?!.*\\..*).*)' }

export default async function middleware(request: Request) {
  const response = await routeAgentRequest(request, (path) => fetch(new URL(path, request.url)))
  return response ?? next()
}
