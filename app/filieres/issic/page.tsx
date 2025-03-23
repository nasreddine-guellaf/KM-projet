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
        {
          title: "Analyse",
          author: "Prof. BOUALI",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/file/d/1nDHhFShoJAO6jt0qSTMpADwe9OX5F8xo/view?usp=drive_link",
        },
        {
          title: "Analyse",
          author: "Prof. BOUALI",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/file/d/1n6_6cdihXE0cluzeJdvS36Pq6_k2hU1I/view?usp=drive_link",
        },
        {
          title: "Architecture des ordinateurs",
          author: "Prof. CHERIF",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/file/d/1nDHhFShoJAO6jt0qSTMpADwe9OX5F8xo/view?usp=drive_link",
        },
        {
          title: "Systeme d'exploitation",
          author: "Prof. HAQIQ",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/file/d/1nDHhFShoJAO6jt0qSTMpADwe9OX5F8xo/view?usp=drive_linkhttps://drive.google.com/drive/folders/1qVDowFSJ9FegCkxNT9SNt4aF3xBWu5Ou?usp=drive_link",
        },
        {
          title: "Micro-Macro economie",
          author: "Prof. KIHEL",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/drive/folders/1ouVqx8XcPBOdK8Hki1eE2l-2I5uZA-zJ?usp=drive_link",
        },
        {
          title: "Python",
          author: "Prof. MESBAH",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/drive/folders/1pC09Z5Pdr6mqXvdxVfAJW8RzuhyJPzbu?usp=drive_link",
        },
        {
          title: "Optimisation",
          author: "Prof. BOUALI",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/drive/folders/1oyZ8EoXatnui1l8lDvmCgwwFyV7UXz7v?usp=drive_link",
        },
        {
          title: "GED",
          author: "Prof. MAMOUNY",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/drive/folders/1qzxloHK-FEuuX4frvYMhXDdYVE0iX1eg?usp=drive_link",
        },
        {
          title: "RSF",
          author: "Prof. EL MOUKHI",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/file/d/1rU-ajedrvO77_b5-6lq4FCxht6jlzXM8/view?usp=drive_link",
        },
        {
          title: "English for general purposes",
          author: "Prof.__",
          date: "23/03/2024",
          format: "PDF",
          size: "__ MB",
          driveLink: "https://drive.google.com/drive/folders/1r4vt8Btj6frleivFdgtxnMJBO-e8h4eh?usp=drive_link",
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

