import Navbar from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Users, Lightbulb, HelpCircle, ArrowLeft, Clock, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function ForumsPage() {
  const forumCategories = [
    {
      title: "Discussions Générales",
      description: "Échangez sur tous les sujets liés à la vie étudiante",
      icon: <MessageSquare className="h-12 w-12 text-blue-600" />,
      link: "/forums/general",
      topics: 124,
      messages: 1872,
    },
    {
      title: "Entraide",
      description: "Posez vos questions et aidez vos camarades",
      icon: <Users className="h-12 w-12 text-blue-600" />,
      link: "/forums/entraide",
      topics: 256,
      messages: 3541,
    },
    {
      title: "Projets Collaboratifs",
      description: "Trouvez des partenaires pour vos projets",
      icon: <Lightbulb className="h-12 w-12 text-blue-600" />,
      link: "/forums/projets",
      topics: 87,
      messages: 943,
    },
    {
      title: "Questions aux Anciens",
      description: "Bénéficiez de l'expérience des promotions précédentes",
      icon: <HelpCircle className="h-12 w-12 text-blue-600" />,
      link: "/forums/anciens",
      topics: 156,
      messages: 2104,
    },
  ]

  const recentTopics = [
    {
      title: "Comment préparer l'examen d'algorithmique ?",
      author: "Ahmed M.",
      category: "Entraide",
      date: "Aujourd'hui, 10:45",
      replies: 12,
      views: 156,
    },
    {
      title: "Recherche partenaires pour projet de base de données",
      author: "Lina K.",
      category: "Projets Collaboratifs",
      date: "Hier, 18:23",
      replies: 8,
      views: 94,
    },
    {
      title: "Conseils pour choisir entre ICSD et IIN",
      author: "Karim B.",
      category: "Questions aux Anciens",
      date: "Il y a 2 jours",
      replies: 15,
      views: 203,
    },
    {
      title: "Organisation d'une sortie étudiante",
      author: "Yasmine A.",
      category: "Discussions Générales",
      date: "Il y a 3 jours",
      replies: 24,
      views: 312,
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
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Forums de Discussion</h1>
          <p className="text-blue-700 max-w-3xl">
            Bienvenue dans l'espace collaboratif de Wiki27. Participez aux discussions, posez vos questions et partagez
            vos connaissances avec les autres étudiants de l'ESI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {forumCategories.map((category, index) => (
            <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-full bg-blue-100">{category.icon}</div>
                <div>
                  <CardTitle className="text-2xl text-blue-800">{category.title}</CardTitle>
                  <CardDescription className="text-blue-600">{category.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-blue-700 mb-6">
                  <span>{category.topics} sujets</span>
                  <span>{category.messages} messages</span>
                </div>
                <Link href={category.link}>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">Accéder au forum</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-900">Discussions récentes</h2>
            <Button variant="outline" className="text-blue-700 border-blue-500 hover:bg-blue-100">
              Nouveau sujet
            </Button>
          </div>

          <div className="space-y-4">
            {recentTopics.map((topic, index) => (
              <Card key={index} className="border-blue-100">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <Link href="#" className="text-lg font-medium text-blue-800 hover:text-blue-600">
                        {topic.title}
                      </Link>
                      <div className="flex items-center mt-2 text-sm text-blue-600">
                        <span>Par {topic.author}</span>
                        <span className="mx-2">•</span>
                        <Badge variant="outline" className="mr-2">
                          {topic.category}
                        </Badge>
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{topic.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-3 md:mt-0 text-sm text-blue-600">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      <span className="mr-4">{topic.replies} réponses</span>
                      <Eye className="w-3 h-3 mr-1" />
                      <span>{topic.views} vues</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button variant="outline" className="text-blue-700 border-blue-500 hover:bg-blue-100">
              Voir plus de discussions
            </Button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Règles des forums</h2>
          <ul className="list-disc pl-6 mb-6 text-blue-700">
            <li className="mb-2">Restez respectueux envers tous les membres de la communauté</li>
            <li className="mb-2">Évitez le hors-sujet et postez dans la catégorie appropriée</li>
            <li className="mb-2">N'utilisez pas les forums pour partager du contenu protégé par des droits d'auteur</li>
            <li className="mb-2">Utilisez la fonction de recherche avant de poser une question déjà traitée</li>
            <li className="mb-2">Les modérateurs se réservent le droit de supprimer tout contenu inapproprié</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

