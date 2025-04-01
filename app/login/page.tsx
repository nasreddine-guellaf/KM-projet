"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, LogIn } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { useSearchParams } from "next/navigation"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { signIn } = useAuth()
  const searchParams = useSearchParams()
  const isRegistered = searchParams.get("registered") === "true"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const { error } = await signIn(email, password)
      if (error) {
        setError(error.message || "Erreur lors de la connexion")
      }
    } catch (err) {
      setError("Une erreur s'est produite. Veuillez réessayer.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-blue-100">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-2">
            <BookOpen className="w-8 h-8 text-blue-700" />
            <span className="text-blue-800 font-medium text-xl">Wiki27</span>
          </div>
          <CardTitle className="text-2xl text-center text-blue-900">Connexion</CardTitle>
          <CardDescription className="text-center text-blue-700">
            Connectez-vous avec votre compte étudiant ESI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isRegistered && (
            <Alert className="bg-green-50 border-green-200 text-green-800 mb-4">
              <AlertDescription>Votre compte a été créé avec succès. Veuillez vous connecter.</AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert className="bg-red-50 border-red-200 text-red-800 mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-blue-800">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="prenom.nom@esi.ac.ma"
                className="border-blue-200"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-blue-800">
                  Mot de passe
                </Label>
                <Link href="/reset-password" className="text-sm text-blue-700 hover:text-blue-900">
                  Mot de passe oublié?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-blue-200"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white" disabled={isLoading}>
              <LogIn className="mr-2 h-4 w-4" />
              {isLoading ? "Connexion en cours..." : "Se connecter"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-blue-700 text-sm">
            Vous n'avez pas de compte?{" "}
            <Link href="/register" className="text-blue-800 hover:text-blue-900 font-medium">
              S'inscrire
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}

