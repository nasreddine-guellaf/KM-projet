import Navbar from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Brain, Database, Shield, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FilieresRessourcesPage() {
  const filieres = [
    {
      title: "ICSD",
      description: "Ingénierie des Connaissances et Science des Données",
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      details: "Accédez aux cours, TD et TP spécifiques à la filière ICSD.",
      link: "/filieres/icsd",
      color: "bg-blue-50",
    },
    {
      title: "IIN",
      description: "Ingénierie de l'Information Numérique",
      icon: <Database className="h-12 w-12 text-blue-600" />,
      details: "Accédez aux cours, TD et TP spécifiques à la filière IIN.",
      link: "/filieres/iin",
      color: "bg-green-50",
    },
    {
      title: "ISSIC",
      description: "Ingénierie de la Sécurité des Systèmes d'Information et Cyberdéfense",
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      details: "Accédez aux cours, TD et TP spécifiques à la filière ISSIC.",
      link: "/filieres/issic",
      color: "bg-red-50",
    },
    {
      title: "ISITD",
      description: "Ingénierie des Systèmes d'Information et de la Transformation Digitale",
      icon: <BarChart className="h-12 w-12 text-blue-600" />,
      details: "Accédez aux cours, TD et TP spécifiques à la filière ISITD.",
      link: "/filieres/isitd",
      color: "bg-purple-50",
    },
  ]

  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-700 hover:text-blue-900 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Ressources par Filière</h1>
          <p className="text-blue-700 max-w-3xl">
            Sélectionnez une filière pour accéder aux cours, TD et TP spécifiques à cette spécialisation. Chaque filière
            propose des ressources adaptées à son programme d&apos;études.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filieres.map((filiere, index) => (
            <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className={`flex flex-row items-center gap-4 ${filiere.color} rounded-t-lg`}>
                <div className="p-3 rounded-full bg-white">{filiere.icon}</div>
                <div>
                  <CardTitle className="text-2xl text-blue-800">{filiere.title}</CardTitle>
                  <CardDescription className="text-blue-600">{filiere.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-blue-700 mb-6">{filiere.details}</p>
                <Link href={filiere.link}>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                    Accéder aux ressources {filiere.title}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

