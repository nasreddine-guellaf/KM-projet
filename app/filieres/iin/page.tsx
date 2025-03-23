import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, BookOpen, FileText, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IinPage() {
  const resources = {
    semestre1: {
      cours: [
        {
          title: "test",
          author: "Prof. Mesbah",
          date: "12/09/2023",
          format: "PDF",
          size: "2.8 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
        {
          title: "Bases de données avancées",
          author: "Prof. Hadj",
          date: "25/09/2023",
          format: "PDF",
          size: "3.6 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
      ],
      td: [
        {
          title: "TD1 - Modélisation des systèmes d'information",
          author: "Prof. Mesbah",
          date: "18/09/2023",
          format: "PDF",
          size: "1.5 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
        {
          title: "TD2 - Requêtes SQL avancées",
          author: "Prof. Hadj",
          date: "02/10/2023",
          format: "PDF",
          size: "2.1 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
      ],
    },
    semestre2: {
      cours: [
        {
          title: "Gestion de l'information numérique",
          author: "Prof. Mesbah",
          date: "08/02/2024",
          format: "PDF",
          size: "4.2 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
        {
          title: "Intégration de données hétérogènes",
          author: "Prof. Hadj",
          date: "22/02/2024",
          format: "PDF",
          size: "3.1 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
      ],
      td: [
        {
          title: "TD3 - Conception de bases de données NoSQL",
          author: "Prof. Hadj",
          date: "16/02/2024",
          format: "PDF",
          size: "2.4 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
        {
          title: "TP1 - Projet de système d'information",
          author: "Prof. Mesbah",
          date: "05/03/2024",
          format: "ZIP",
          size: "7.2 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
      ],
    },
  }

  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-700 hover:text-blue-900 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-full bg-blue-100">
              <Database className="h-12 w-12 text-blue-700" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-blue-900">IIN</h1>
              <p className="text-xl text-blue-700">Ingénierie de l'Information Numérique</p>
            </div>
          </div>
          <p className="text-blue-700 max-w-3xl mb-6">
            La filière IIN forme des ingénieurs spécialisés dans la gestion et l'exploitation de l'information
            numérique. Elle couvre les domaines des bases de données, des systèmes d'information et de l'intégration de
            données.
          </p>
          <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Débouchés professionnels</h2>
            <ul className="list-disc pl-6 text-blue-700 space-y-2">
              <li>Architecte de systèmes d'information</li>
              <li>Ingénieur en bases de données</li>
              <li>Chef de projet SI</li>
              <li>Consultant en intégration de données</li>
              <li>Administrateur de bases de données</li>
            </ul>
          </div>
        </div>

        <Tabs defaultValue="semestre1" className="mb-12">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="semestre1">Semestre 1</TabsTrigger>
            <TabsTrigger value="semestre2">Semestre 2</TabsTrigger>
          </TabsList>

          {Object.entries(resources).map(([semester, semesterData]) => (
            <TabsContent key={semester} value={semester}>
              <Tabs defaultValue="cours" className="mb-8">
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="cours">Cours</TabsTrigger>
                  <TabsTrigger value="td">TD & TP</TabsTrigger>
                </TabsList>

                <TabsContent value="cours" className="space-y-4">
                  {semesterData.cours.map((resource, index) => (
                    <Card key={index} className="border-blue-100 hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="flex items-start gap-4 mb-4 md:mb-0">
                            <div className="p-3 rounded-lg bg-blue-100 text-blue-700">
                              <BookOpen className="h-8 w-8" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-blue-800">{resource.title}</h3>
                              <div className="flex flex-wrap items-center text-sm text-blue-600 mt-2 gap-x-4 gap-y-2">
                                <span>Par {resource.author}</span>
                                <span>•</span>
                                <span>Ajouté le {resource.date}</span>
                                <span>•</span>
                                <Badge variant="outline">{resource.format}</Badge>
                                <span>{resource.size}</span>
                              </div>
                            </div>
                          </div>
                          <Link href={resource.driveLink} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                              <Download className="mr-2 h-4 w-4" />
                              Accéder au Drive
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="td" className="space-y-4">
                  {semesterData.td.map((resource, index) => (
                    <Card key={index} className="border-blue-100 hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="flex items-start gap-4 mb-4 md:mb-0">
                            <div className="p-3 rounded-lg bg-blue-100 text-blue-700">
                              <FileText className="h-8 w-8" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-blue-800">{resource.title}</h3>
                              <div className="flex flex-wrap items-center text-sm text-blue-600 mt-2 gap-x-4 gap-y-2">
                                <span>Par {resource.author}</span>
                                <span>•</span>
                                <span>Ajouté le {resource.date}</span>
                                <span>•</span>
                                <Badge variant="outline">{resource.format}</Badge>
                                <span>{resource.size}</span>
                              </div>
                            </div>
                          </div>
                          <Link href={resource.driveLink} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                              <Download className="mr-2 h-4 w-4" />
                              Accéder au Drive
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  )
}

