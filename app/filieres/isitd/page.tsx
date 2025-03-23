import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, BookOpen, FileText, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IsitdPage() {
  const resources = {
    semestre1: {
      cours: [
        {
          title: "Transformation digitale des entreprises",
          author: "Prof. Belkacem",
          date: "13/09/2023",
          format: "PDF",
          size: "3.2 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
        {
          title: "Gestion de projets informatiques",
          author: "Prof. Mansouri",
          date: "27/09/2023",
          format: "PDF",
          size: "2.9 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
      ],
      td: [
        {
          title: "TD1 - Analyse des besoins et cahier des charges",
          author: "Prof. Belkacem",
          date: "20/09/2023",
          format: "PDF",
          size: "1.8 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
        {
          title: "TD2 - Modélisation des processus métier",
          author: "Prof. Belkacem",
          date: "04/10/2023",
          format: "PDF",
          size: "2.2 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
      ],
    },
    semestre2: {
      cours: [
        {
          title: "comptabilite generale",
          author: "Prof . REGURAGUI yassine",
          date: "11/02/2024",
          format: "PDF",
          size: "1.1 MB",
          driveLink: "https://drive.google.com/file/d/1H8IgO53_LdGRWNzYCEKoy590f8Dni01l/view?usp=drive_link",
        },
        {
          title: "Innovation et technologies émergentes",
          author: "Prof. Mansouri",
          date: "25/02/2024",
          format: "PDF",
          size: "3.5 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
      ],
      td: [
        {
          title: "TD3 - Planification et suivi de projet",
          author: "Prof. Mansouri",
          date: "18/02/2024",
          format: "PDF",
          size: "2.5 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
        {
          title: "TP1 - Projet de transformation digitale",
          author: "Prof. Mansouri",
          date: "08/03/2024",
          format: "ZIP",
          size: "7.8 MB",
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
              <BarChart className="h-12 w-12 text-blue-700" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-blue-900">ISITD</h1>
              <p className="text-xl text-blue-700">
                Ingénierie des Systèmes d'Information et de la Transformation Digitale
              </p>
            </div>
          </div>
          <p className="text-blue-700 max-w-3xl mb-6">
            La filière ISITD forme des ingénieurs spécialisés dans la transformation digitale des entreprises et
            l'optimisation des processus métier. Elle couvre les domaines de la gestion de projets IT, des systèmes
            d'information et de l'innovation technologique.
          </p>
          <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Débouchés professionnels</h2>
            <ul className="list-disc pl-6 text-blue-700 space-y-2">
              <li>Chef de projet transformation digitale</li>
              <li>Consultant en systèmes d'information</li>
              <li>Architecte d'entreprise</li>
              <li>Responsable innovation</li>
              <li>Business Analyst</li>
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

