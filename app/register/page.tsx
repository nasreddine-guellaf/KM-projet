import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserPlus } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-blue-100">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-2">
            <Image src="/images/w27-logo.png" alt="W27 Logo" width={80} height={32} className="h-8 w-auto" />
          </div>
          <CardTitle className="text-2xl text-center text-blue-900">Créer un compte</CardTitle>
          <CardDescription className="text-center text-blue-700">
            Inscrivez-vous avec votre email étudiant ESI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-blue-800">
                Prénom
              </Label>
              <Input id="firstName" placeholder="Prénom" className="border-blue-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-blue-800">
                Nom
              </Label>
              <Input id="lastName" placeholder="Nom" className="border-blue-200" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-blue-800">
              Email
            </Label>
            <Input id="email" type="email" placeholder="prenom.nom@esi.dz" className="border-blue-200" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-blue-800">
              Mot de passe
            </Label>
            <Input id="password" type="password" className="border-blue-200" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-blue-800">
              Confirmer le mot de passe
            </Label>
            <Input id="confirmPassword" type="password" className="border-blue-200" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
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
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
            <UserPlus className="mr-2 h-4 w-4" />
            S'inscrire
          </Button>
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

