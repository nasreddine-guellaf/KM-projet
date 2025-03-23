import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, BookOpen, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoursPage() {
  const courses = {
    math: [
      {
        title: "Analyse mathématique - Chapitre 1",
        author: "Prof. Benali",
        date: "15/09/2023",
        format: "PDF",
        size: "2.4 MB",
        downloads: 342,
        rating: 4.8,
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
      {
        title: "Algèbre linéaire - Matrices et déterminants",
        author: "Prof. Hamdi",
        date: "22/09/2023",
        format: "PDF",
        size: "3.1 MB",
        downloads: 289,
        rating: 4.5,
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
      {
        title: "Probabilités et statistiques",
        author: "Prof. Kaddour",
        date: "05/10/2023",
        format: "PDF",
        size: "4.2 MB",
        downloads: 256,
        rating: 4.7,
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
    ],
    algo: [
      {
        title: "Introduction aux algorithmes",
        author: "Prof. Mansouri",
        date: "10/09/2023",
        format: "PDF",
        size: "1.8 MB",
        downloads: 412,
        rating: 4.9,
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
      {
        title: "Structures de données fondamentales",
        author: "Prof. Mansouri",
        date: "25/09/2023",
        format: "PDF",
        size: "2.7 MB",
        downloads: 378,
        rating: 4.6,
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
      {
        title: "Algorithmes de tri et de recherche",
        author: "Prof. Ziani",
        date: "08/10/2023",
        format: "PDF",
        size: "3.5 MB",
        downloads: 301,
        rating: 4.4,
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
    ],
    prog: [
      {
        title: "Introduction à la programmation en C",
        author: "Prof. Belkacem",
        date: "12/09/2023",
        format: "PDF",
        size: "2.2 MB",
        downloads: 398,
        rating: 4.7,
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
      {
        title: "Programmation orientée objet en Java",
        author: "Prof. Belkacem",
        date: "28/09/2023",
        format: "PDF",
        size: "3.8 MB",
        downloads: 356,
        rating: 4.8,
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
      {
        title: "Structures de contrôle et fonctions",
        author: "Prof. Rahmani",
        date: "15/10/2023",
        format: "PDF",
        size: "2.9 MB",
        downloads: 287,
        rating: 4.5,
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
    ],
    db: [
      {
        title: "Introduction aux bases de données",
        author: "Prof. Hadj",
        date: "18/09/2023",
        format: "PDF",
        size: "2.6 MB",
        downloads: 325,
        rating: 4.6,
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
      {
        title: "Modèle relationnel et SQL",
        author: "Prof. Hadj",
        date: "02/10/2023",
        format: "PDF",
        size: "3.4 MB",
        downloads: 298,
        rating: 4.7,
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
      {
        title: "Normalisation et conception de BDD",
        author: "Prof. Mesbah",
        date: "20/10/2023",
        format: "PDF",
        size: "2.8 MB",
        downloads: 245,
        rating: 4.4,
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
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
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Cours</h1>
          <p className="text-blue-700 max-w-3xl">
            Accédez aux supports de cours pour toutes les matières de première année. Ces documents sont partagés par
            les professeurs et les étudiants pour faciliter votre apprentissage.
          </p>
        </div>

        <Tabs defaultValue="math" className="mb-12">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="math">Mathématiques</TabsTrigger>
            <TabsTrigger value="algo">Algorithmique</TabsTrigger>
            <TabsTrigger value="prog">Programmation</TabsTrigger>
            <TabsTrigger value="db">Bases de données</TabsTrigger>
          </TabsList>

          {Object.entries(courses).map(([category, courseList]) => (
            <TabsContent key={category} value={category} className="space-y-4">
              {courseList.map((course, index) => (
                <Card key={index} className="border-blue-100 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-start gap-4 mb-4 md:mb-0">
                        <div className="p-3 rounded-lg bg-blue-100 text-blue-700">
                          <BookOpen className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-blue-800">{course.title}</h3>
                          <div className="flex flex-wrap items-center text-sm text-blue-600 mt-2 gap-x-4 gap-y-2">
                            <span>Par {course.author}</span>
                            <span>•</span>
                            <span>Ajouté le {course.date}</span>
                            <span>•</span>
                            <Badge variant="outline">{course.format}</Badge>
                            <span>{course.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="ml-1 text-blue-700">{course.rating}/5</span>
                          <span className="ml-2 text-blue-600">({course.downloads} téléchargements)</span>
                        </div>
                        <Link href={course.driveLink} target="_blank" rel="noopener noreferrer">
                          <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                            <Download className="mr-2 h-4 w-4" />
                            Accéder au Drive
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  )
}

