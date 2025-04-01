"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, UserPlus } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "@/lib/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { signUp } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Validation
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas")
      return
    }

    if (!acceptTerms) {
      setError("Vous devez accepter les conditions d'utilisation")
      return
    }

    setIsLoading(true)

    try {
      const { error } = await signUp(email, password, firstName, lastName)
      if (error) {
        setError(error.message || "Erreur lors de l'inscription")
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
          <CardTitle className="text-2xl text-center text-blue-900">Créer un compte</CardTitle>
          <CardDescription className="text-center text-blue-700">
            Inscrivez-vous avec votre email étudiant ESI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert className="bg-red-50 border-red-200 text-red-800 mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-blue-800">
                  Prénom
                </Label>
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Prénom"
                  className="border-blue-200"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-blue-800">
                  Nom
                </Label>
                <Input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Nom"
                  className="border-blue-200"
                  required
                />
              </div>
            </div>
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
              <Label htmlFor="password" className="text-blue-800">
                Mot de passe
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-blue-200"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-blue-800">
                Confirmer le mot de passe
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-blue-200"
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked === true)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-700"
              >
                J'accepte les{" "}
                <Link href="/terms" className="text-blue-800 hover:text-blue-900 underline">
                  conditions d'utilisation
                </Link>
              </label>
            </div>
            <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white" disabled={isLoading}>
              <UserPlus className="mr-2 h-4 w-4" />
              {isLoading ? "Inscription en cours..." : "S'inscrire"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-blue-700 text-sm">
            Vous avez déjà un compte?{" "}
            <Link href="/login" className="text-blue-800 hover:text-blue-900 font-medium">
              Se connecter
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}

