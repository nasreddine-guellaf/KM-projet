"use client"

import { Button } from "@/components/ui/button"
import { LogIn, LogOut, User } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AuthButton() {
  const { user, signOut } = useAuth()

  if (!user) {
    return (
      <>
        <Link href="/register">
          <Button variant="ghost" className="text-blue-700 hover:text-blue-900">
            S'inscrire
          </Button>
        </Link>
        <Link href="/login">
          <Button className="bg-blue-700 hover:bg-blue-800 text-white">
            <LogIn className="w-4 h-4 mr-2" />
            Connexion
          </Button>
        </Link>
      </>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative rounded-full h-8 w-8 flex items-center justify-center bg-blue-100 text-blue-800"
        >
          {user.firstName.charAt(0)}
          {user.lastName.charAt(0)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
        <DropdownMenuItem className="flex items-center">
          <User className="mr-2 h-4 w-4" />
          <span>
            {user.firstName} {user.lastName}
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut} className="text-red-600 cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Déconnexion</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

