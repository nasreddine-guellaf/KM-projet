"use client"

import { Button } from "@/components/ui/button"
import { LogIn, LogOut, UserPlus } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

export function AuthButton() {
  const { user, signOut, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-blue-700 hover:text-blue-900" disabled>
          Chargement...
        </Button>
      </div>
    )
  }

  if (user) {
    return (
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-blue-700 hover:text-blue-900" onClick={() => signOut()}>
          <LogOut className="w-4 h-4 mr-2" />
          Déconnexion
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-4">
      <Link href="/register">
        <Button variant="ghost" className="text-blue-700 hover:text-blue-900">
          <UserPlus className="w-4 h-4 mr-2" />
          S'inscrire
        </Button>
      </Link>
      <Link href="/login">
        <Button className="bg-blue-700 hover:bg-blue-800 text-white">
          <LogIn className="w-4 h-4 mr-2" />
          Connexion
        </Button>
      </Link>
    </div>
  )
}

