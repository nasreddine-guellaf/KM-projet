import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, BookOpen, FileText, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IssicPage() {
  const resources = {
    semestre1: {
      cours: [
        {
          title: "Introduction à la cybersécurité",
          author: "Prof. Rahmani",
          date: "14/09/2023",
          format: "PDF",
          size: "3.5 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
        {
          title: "Cryptographie et sécurité des données",
          author: "Prof. Ziani",
          date: "28/09/2023",
          format: "PDF",
          size: "4.2 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
      ],
      td: [
        {
          title: "TD1 - Principes de base de la sécurité informatique",
          author: "Prof. Rahmani",
          date: "21/09/2023",
          format: "PDF",
          size: "1.7 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
        {
          title: "TD2 - Implémentation d'algorithmes cryptographiques",
          author: "Prof. Ziani",
          date: "05/10/2023",
          format: "PDF",
          size: "2.3 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
      ],
    },
    semestre2: {
      cours: [
        {
          title: "Sécurité des réseaux informatiques",
          author: "Prof. Rahmani",
          date: "12/02/2024",
          format: "PDF",
          size: "3.8 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
        {
          title: "Analyse des vulnérabilités et tests d'intrusion",
          author: "Prof. Ziani",
          date: "26/02/2024",
          format: "PDF",
          size: "5.1 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
      ],
      td: [
        {
          title: "TD3 - Configuration de pare-feu et détection d'intrusion",
          author: "Prof. Rahmani",
          date: "19/02/2024",
          format: "PDF",
          size: "2.6 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
        {
          title: "TP1 - Projet de sécurisation d'un réseau",
          author: "Prof. Ziani",
          date: "09/03/2024",
          format: "ZIP",
          size: "8.5 MB",
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
              <Shield className="h-12 w-12 text-blue-700" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-blue-900">ISSIC</h1>
              <p className="text-xl text-blue-700">
                Ingénierie de la Sécurité des Systèmes d'Information et Cyberdéfense
              </p>
            </div>
          </div>
          <p className="text-blue-700 max-w-3xl mb-6">
            La filière ISSIC forme des ingénieurs spécialisés dans la protection des systèmes d'information et la
            cyberdéfense. Elle couvre les domaines de la sécurité informatique, de la cryptographie et de la protection
            des données.
          </p>
          <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Débouchés professionnels</h2>
            <ul className="list-disc pl-6 text-blue-700 space-y-2">
              <li>Responsable de la sécurité des systèmes d'information (RSSI)</li>
              <li>Expert en cybersécurité</li>
              <li>Pentesteur / Ethical Hacker</li>
              <li>Analyste en sécurité informatique</li>
              <li>Consultant en cyberdéfense</li>
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

