import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, ArrowLeft, Clock, Eye, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

export default function GeneralForumPage() {
  const topics = [
    {
      id: 1,
      title: "Organisation d'une sortie étudiante",
      author: "Yasmine A.",
      avatar: "YA",
      date: "Il y a 3 jours",
      replies: 24,
      views: 312,
      excerpt:
        "Bonjour à tous ! Je propose d'organiser une sortie étudiante le weekend prochain pour mieux nous connaître. Qui serait intéressé ?",
    },
    {
      id: 2,
      title: "Problème d'accès à la bibliothèque",
      author: "Mohamed L.",
      avatar: "ML",
      date: "Il y a 5 jours",
      replies: 8,
      views: 143,
      excerpt:
        "J'ai rencontré des difficultés pour accéder à la bibliothèque avec ma carte étudiante. Est-ce que quelqu'un d'autre a eu ce problème ?",
    },
    {
      id: 3,
      title: "Partage de notes de cours",
      author: "Amina B.",
      avatar: "AB",
      date: "Il y a 1 semaine",
      replies: 15,
      views: 276,
      excerpt:
        "J'ai créé un dossier partagé pour que nous puissions tous mettre nos notes de cours en commun. Voici le lien pour y accéder.",
    },
    {
      id: 4,
      title: "Conseils pour s'adapter à la vie universitaire",
      author: "Karim H.",
      avatar: "KH",
      date: "Il y a 2 semaines",
      replies: 32,
      views: 405,
      excerpt:
        "C'est ma première année à l'université et j'ai du mal à m'adapter. Avez-vous des conseils pour mieux gérer mon temps et mon stress ?",
    },
    {
      id: 5,
      title: "Groupe d'étude pour les mathématiques",
      author: "Leila M.",
      avatar: "LM",
      date: "Il y a 2 semaines",
      replies: 19,
      views: 231,
      excerpt:
        "Je cherche à former un groupe d'étude pour les mathématiques. Nous pourrions nous retrouver à la bibliothèque deux fois par semaine.",
    },
  ]

  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/forums" className="inline-flex items-center text-blue-700 hover:text-blue-900 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux forums
          </Link>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Discussions Générales</h1>
          <p className="text-blue-700 max-w-3xl">
            Échangez sur tous les sujets liés à la vie étudiante à l'ESI. Ce forum est l'endroit idéal pour discuter de
            sujets qui ne sont pas directement liés aux cours.
          </p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder="Rechercher dans les discussions..."
              className="pl-10 border-blue-200 focus:border-blue-500"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
          <Button className="bg-blue-700 hover:bg-blue-800 text-white">Nouveau sujet</Button>
        </div>

        <div className="space-y-4 mb-8">
          {topics.map((topic) => (
            <Card key={topic.id} className="border-blue-100 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="hidden sm:flex h-12 w-12 border border-blue-200">
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={topic.author} />
                    <AvatarFallback className="bg-blue-100 text-blue-700">{topic.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Link href={`/forums/general/${topic.id}`}>
                      <h3 className="text-xl font-semibold text-blue-800 hover:text-blue-600 mb-2">{topic.title}</h3>
                    </Link>
                    <p className="text-blue-700 mb-3">{topic.excerpt}</p>
                    <div className="flex flex-wrap items-center text-sm text-blue-600 gap-x-4 gap-y-2">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        <span>{topic.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{topic.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="w-3 h-3 mr-1" />
                        <span>{topic.replies} réponses</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        <span>{topic.views} vues</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="w-10 h-10 p-0 text-blue-700 border-blue-200" disabled>
              &lt;
            </Button>
            <Button variant="outline" className="w-10 h-10 p-0 bg-blue-100 text-blue-700 border-blue-200">
              1
            </Button>
            <Button variant="outline" className="w-10 h-10 p-0 text-blue-700 border-blue-200">
              2
            </Button>
            <Button variant="outline" className="w-10 h-10 p-0 text-blue-700 border-blue-200">
              3
            </Button>
            <Button variant="outline" className="w-10 h-10 p-0 text-blue-700 border-blue-200">
              &gt;
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

