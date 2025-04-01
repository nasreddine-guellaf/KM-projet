import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Liste des chemins publics (accessibles sans authentification)
const publicPaths = ["/login", "/register"]

export function middleware(request: NextRequest) {
  // Vérifier si l'utilisateur est connecté
  const isAuthenticated = request.cookies.has("auth")
  const path = request.nextUrl.pathname

  // Si l'utilisateur n'est pas connecté et essaie d'accéder à une page protégée
  if (!isAuthenticated && !publicPaths.some((publicPath) => path.startsWith(publicPath))) {
    // Rediriger vers la page de connexion
    const loginUrl = new URL("/login", request.url)
    return NextResponse.redirect(loginUrl)
  }

  // Si l'utilisateur est connecté et essaie d'accéder à la page de connexion ou d'inscription
  if (isAuthenticated && publicPaths.some((publicPath) => path.startsWith(publicPath))) {
    // Rediriger vers la page d'accueil
    const homeUrl = new URL("/", request.url)
    return NextResponse.redirect(homeUrl)
  }

  return NextResponse.next()
}

// Configurer le middleware pour s'exécuter sur toutes les routes sauf les ressources statiques
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}

