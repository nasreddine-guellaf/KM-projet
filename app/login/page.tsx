import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LogIn } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-blue-100">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-2">
            <Image src="/images/w27-logo.svg" alt="W27 Logo" width={80} height={32} className="h-8 w-auto" />
          </div>
          <CardTitle className="text-2xl text-center text-blue-900">Connexion</CardTitle>
          <CardDescription className="text-center text-blue-700">
            Connectez-vous avec votre compte étudiant ESI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-blue-800">
              Email
            </Label>
            <Input id="email" placeholder="prenom.nom@esi.ac.ma" className="border-blue-200" />
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
            <Input id="password" type="password" className="border-blue-200" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
            <LogIn className="mr-2 h-4 w-4" />
            Se connecter
          </Button>
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

