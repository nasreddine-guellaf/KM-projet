import Navbar from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, Briefcase, Video, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RessourcesPage() {
  const resources = [
    {
      title: "Cours",
      description: "Accédez aux supports de cours pour toutes les matières",
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      link: "/ressources/cours",
      items: [
        "Mathématiques",
        "Algorithmique",
        "Programmation",
        "Bases de données",
        "Réseaux",
        "Systèmes d'exploitation",
      ],
    },
    {
      title: "TD & TP",
      description: "Téléchargez les travaux dirigés et pratiques",
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      link: "/ressources/td-tp",
      items: [
        "Exercices corrigés",
        "Travaux pratiques",
        "Projets académiques",
        "Fiches de révision",
        "QCM d'entraînement",
      ],
    },
    {
      title: "Stages",
      description: "Trouvez des offres de stages adaptées à votre filière",
      icon: <Briefcase className="h-12 w-12 text-blue-600" />,
      link: "/ressources/stages",
      items: [
        "Offres de stages",
        "Conseils CV et lettre de motivation",
        "Retours d'expérience",
        "Entreprises partenaires",
        "Préparation aux entretiens",
      ],
    },
    {
      title: "Tutoriels",
      description: "Vidéos et guides créés par les étudiants",
      icon: <Video className="h-12 w-12 text-blue-600" />,
      link: "/ressources/tutoriels",
      items: [
        "Tutoriels vidéo",
        "Guides pratiques",
        "Astuces et conseils",
        "Outils recommandés",
        "Ressources externes",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-700 hover:text-blue-900 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Ressources Pédagogiques</h1>
          <p className="text-blue-700 max-w-3xl">
            Découvrez toutes les ressources partagées par la communauté des étudiants de l'ESI. Ces documents sont
            organisés par catégorie pour faciliter vos recherches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {resources.map((resource, index) => (
            <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-full bg-blue-100">{resource.icon}</div>
                <div>
                  <CardTitle className="text-2xl text-blue-800">{resource.title}</CardTitle>
                  <CardDescription className="text-blue-600">{resource.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 mb-6 text-blue-700">
                  {resource.items.map((item, i) => (
                    <li key={i} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={resource.link}>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                    Accéder aux {resource.title}
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

