import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, BookOpen, FileText, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IcsdPage() {
  const resources = {
    semestre1: {
      cours: [
        {
          title: "initiation aux reseaux informatiques",
          author: "Prof. ABOURIZQ",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/drive/folders/1obqrKef1Y_3GN2WksYAG1kEXvzA8MGMm?usp=drive_link",
        },
        {
          title: "Economie generale",
          author: "Prof. ASSABANE",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/drive/folders/1njfiF9WhyUQiBoNDBGD-4P05qKbpD9cm?usp=drive_link",
        },
        {
          title: "Documents structuree",
          author: "Prof. ",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/drive/folders/1nFNsXgoe-fC4gjm-AVeFdB7gGeyux3WK?usp=drive_link",
        },
        {
          title: "Algorithmique",
          author: "Prof. ABOURIZQ",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/drive/folders/1mmM6HFtSPumLyKwfccZeijMyAa6uUT0h?usp=drive_link",
        },
      ],
      td: [
        {
          title: "TD1 - Analyse exploratoire des données",
          author: "Prof. Benali",
          date: "20/09/2023",
          format: "PDF",
          size: "1.8 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
        {
          title: "TD2 - Visualisation de données avec Python",
          author: "Prof. Benali",
          date: "04/10/2023",
          format: "PDF",
          size: "2.3 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
      ],
    },
    semestre2: {
      cours: [
        {
          title: "comtabilite generale",
          author: "Prof. REGURAGUI yassine",
          date: "05/02/2024",
          format: "PDF",
          size: "1.1 MB",
          driveLink: "https://drive.google.com/file/d/1H8IgO53_LdGRWNzYCEKoy590f8Dni01l/view?usp=drive_link",
        },
        {
          title: "knowledge management",
          author: "Prof. Naïla Amrous",
          date: "18/02/2024",
          format: "PDF",
          size: "2.3 MB",
          driveLink: "https://drive.google.com/file/d/1IJOalDTn8va4risCioviCXWdvI_ScPHx/view?usp=drive_link",
        },
        {
          title: "Analyse et conception des SI relationels",
          author: "Prof. EL HALOUI",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/drive/folders/1u8eVtKoMljQ23h02NDp1BXRmtIB-qjD-?usp=sharing",
        },
        {
          title: "Technologie Web",
          author: "Prof. SBIHI Boubker",
          date: "23/03/2024",
          format: "PDF",
          size: "0.551 MB",
          driveLink: "https://drive.google.com/file/d/1lZmX4vqjgKRGNKmRy0QyxWbB52_XpOp6/view?usp=drivesdk ",
        },
        {
          title: "statistique descriptive",
          author: "Prof. Benyaacoub",
          date: "23/03/2024",
          format: "PDF",
          size: "0.551 MB",
          driveLink: "https://drive.google.com/file/d/1lZmX4vqjgKRGNKmRy0QyxWbB52_XpOp6/view?usp=drivesdk ",
        },
        {
          title: "Probabilite ( non disp pour l'instant )",
          author: "Prof. Bouali",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/file/d/1lZmX4vqjgKRGNKmRy0QyxWbB52_XpOp6/view?usp=drivesdk ",
        },
        {
          title: "Programmation Web en PHP",
          author: "Prof. Maqboul",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/drive/folders/1lqMJDYSNeJ3X3Q1ME_K3qoQLrrX6iOLO ",
        },
        {
          title: "algorithmique avancee",
          author: "Prof. Haqiq",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/drive/folders/1m8QjWPS6fnYzPvnrL8GuSAAtHR1D9T8U  ",
        },
        

      ],
      td: [
        {
          title: "TD3 - Algorithmes de classification",
          author: "Prof. Kaddour",
          date: "25/02/2024",
          format: "PDF",
          size: "2.7 MB",
          driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
        },
        {
          title: "TP1 - Projet d'analyse de données réelles",
          author: "Prof. Hamdi",
          date: "15/03/2024",
          format: "ZIP",
          size: "8.4 MB",
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
              <Brain className="h-12 w-12 text-blue-700" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-blue-900">ICSD</h1>
              <p className="text-xl text-blue-700">Ingénierie des Connaissances et Science des Données</p>
            </div>
          </div>
          <p className="text-blue-700 max-w-3xl mb-6">
            La filière ICSD forme des ingénieurs spécialisés dans l'analyse et l'exploitation des données massives. Elle
            couvre les domaines de l'intelligence artificielle, du machine learning, de la data science et du big data.
          </p>
          <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Débouchés professionnels</h2>
            <ul className="list-disc pl-6 text-blue-700 space-y-2">
              <li>Data Scientist</li>
              <li>Ingénieur en Intelligence Artificielle</li>
              <li>Analyste de données</li>
              <li>Consultant en Big Data</li>
              <li>Chercheur en Machine Learning</li>
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

