import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Video, FileText, ExternalLink, Clock, Eye, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TutorielsPage() {
  const tutoriels = {
    videos: [
      {
        title: "Introduction à la programmation en C",
        author: "Ahmed M.",
        date: "15/09/2023",
        duree: "32 min",
        vues: 456,
        likes: 87,
        thumbnail: "/placeholder.svg?height=180&width=320",
      },
      {
        title: "Comprendre les algorithmes de tri",
        author: "Lina K.",
        date: "28/09/2023",
        duree: "45 min",
        vues: 389,
        likes: 72,
        thumbnail: "/placeholder.svg?height=180&width=320",
      },
      {
        title: "Bases de données relationnelles expliquées",
        author: "Karim B.",
        date: "10/10/2023",
        duree: "38 min",
        vues: 412,
        likes: 94,
        thumbnail: "/placeholder.svg?height=180&width=320",
      },
    ],
    guides: [
      {
        title: "Guide complet de Git pour débutants",
        author: "Yasmine A.",
        date: "20/09/2023",
        format: "PDF",
        pages: 24,
        vues: 523,
        likes: 112,
      },
      {
        title: "Configurer son environnement de développement",
        author: "Mohamed L.",
        date: "05/10/2023",
        format: "PDF",
        pages: 18,
        vues: 478,
        likes: 95,
      },
      {
        title: "Méthodes efficaces de révision pour les examens",
        author: "Amina B.",
        date: "15/10/2023",
        format: "PDF",
        pages: 15,
        vues: 612,
        likes: 143,
      },
    ],
  }

  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/ressources" className="inline-flex items-center text-blue-700 hover:text-blue-900 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux ressources
          </Link>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Tutoriels</h1>
          <p className="text-blue-700 max-w-3xl">
            Découvrez des tutoriels vidéo et des guides pratiques créés par les étudiants pour vous aider dans votre
            apprentissage. Ces ressources complémentaires facilitent la compréhension des concepts complexes.
          </p>
        </div>

        <Tabs defaultValue="videos" className="mb-12">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="videos">Tutoriels Vidéo</TabsTrigger>
            <TabsTrigger value="guides">Guides Pratiques</TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="space-y-6">
            {tutoriels.videos.map((tutoriel, index) => (
              <Card key={index} className="border-blue-100 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative rounded-lg overflow-hidden bg-gray-200">
                        <img
                          src={tutoriel.thumbnail || "/placeholder.svg"}
                          alt={tutoriel.title}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-blue-700/80 rounded-full p-3">
                            <Video className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-blue-800 mb-2">{tutoriel.title}</h3>
                      <div className="flex flex-wrap items-center text-sm text-blue-600 mb-4 gap-x-4 gap-y-2">
                        <span>Par {tutoriel.author}</span>
                        <span>•</span>
                        <span>Ajouté le {tutoriel.date}</span>
                      </div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center text-blue-700">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{tutoriel.duree}</span>
                        </div>
                        <div className="flex items-center text-blue-700">
                          <Eye className="h-4 w-4 mr-1" />
                          <span>{tutoriel.vues} vues</span>
                        </div>
                        <div className="flex items-center text-blue-700">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          <span>{tutoriel.likes} likes</span>
                        </div>
                      </div>
                      <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                        <Video className="mr-2 h-4 w-4" />
                        Regarder le tutoriel
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="guides" className="space-y-4">
            {tutoriels.guides.map((guide, index) => (
              <Card key={index} className="border-blue-100 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-4 mb-4 md:mb-0">
                      <div className="p-3 rounded-lg bg-blue-100 text-blue-700">
                        <FileText className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-800">{guide.title}</h3>
                        <div className="flex flex-wrap items-center text-sm text-blue-600 mt-2 gap-x-4 gap-y-2">
                          <span>Par {guide.author}</span>
                          <span>•</span>
                          <span>Ajouté le {guide.date}</span>
                          <span>•</span>
                          <Badge variant="outline">{guide.format}</Badge>
                          <span>{guide.pages} pages</span>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center text-blue-700">
                            <Eye className="h-4 w-4 mr-1" />
                            <span>{guide.vues} vues</span>
                          </div>
                          <div className="flex items-center text-blue-700">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            <span>{guide.likes} likes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Consulter le guide
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

