import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Liste des routes qui nécessitent une authentification
const protectedRoutes = [
  "/forums/[category]/nouveau",
  "/poser-question",
  // Ajoutez d'autres routes protégées ici
]

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Vérifier si l'utilisateur est connecté
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Vérifier si la route actuelle est protégée
  const isProtectedRoute = protectedRoutes.some((route) => {
    // Convertir le modèle de route en regex pour la correspondance
    const pattern = new RegExp("^" + route.replace(/\[.*?\]/g, "[^/]+") + "/?$")
    return pattern.test(req.nextUrl.pathname)
  })

  // Rediriger vers la page de connexion si la route est protégée et l'utilisateur n'est pas connecté
  if (isProtectedRoute && !session) {
    const redirectUrl = new URL("/login", req.url)
    redirectUrl.searchParams.set("redirectTo", req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

export const config = {
  matcher: [
    // Appliquer le middleware à toutes les routes sauf les ressources statiques
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}

