import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TdTpPage() {
  const resources = {
    math: [
      {
        title: "TD1 - Analyse mathématique",
        author: "Prof. Benali",
        date: "20/09/2023",
        format: "PDF",
        size: "1.5 MB",
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
      {
        title: "TD2 - Algèbre linéaire",
        author: "Prof. Hamdi",
        date: "05/10/2023",
        format: "PDF",
        size: "1.8 MB",
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
      {
        title: "TP1 - Calcul numérique avec Python",
        author: "Prof. Kaddour",
        date: "15/10/2023",
        format: "ZIP",
        size: "3.2 MB",
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
    ],
    algo: [
      {
        title: "TD1 - Structures de contrôle",
        author: "Prof. Mansouri",
        date: "18/09/2023",
        format: "PDF",
        size: "1.2 MB",
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
      {
        title: "TD2 - Structures de données",
        author: "Prof. Mansouri",
        date: "02/10/2023",
        format: "PDF",
        size: "1.6 MB",
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
      {
        title: "TP1 - Implémentation d'algorithmes de tri",
        author: "Prof. Ziani",
        date: "12/10/2023",
        format: "ZIP",
        size: "2.8 MB",
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
    ],
    prog: [
      {
        title: "TD1 - Bases de la programmation en C",
        author: "Prof. Belkacem",
        date: "19/09/2023",
        format: "PDF",
        size: "1.4 MB",
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
      {
        title: "TD2 - Fonctions et tableaux",
        author: "Prof. Belkacem",
        date: "03/10/2023",
        format: "PDF",
        size: "1.7 MB",
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
      {
        title: "TP1 - Projet de programmation en Java",
        author: "Prof. Rahmani",
        date: "20/10/2023",
        format: "ZIP",
        size: "4.5 MB",
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
    ],
    db: [
      {
        title: "TD1 - Modèle Entité-Association",
        author: "Prof. Hadj",
        date: "21/09/2023",
        format: "PDF",
        size: "1.3 MB",
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
      {
        title: "TD2 - Requêtes SQL",
        author: "Prof. Hadj",
        date: "06/10/2023",
        format: "PDF",
        size: "1.5 MB",
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-here",
      },
      {
        title: "TP1 - Conception et implémentation d'une BDD",
        author: "Prof. Mesbah",
        date: "25/10/2023",
        format: "ZIP",
        size: "3.8 MB",
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
          <h1 className="text-4xl font-bold text-blue-900 mb-4">TD & TP</h1>
          <p className="text-blue-700 max-w-3xl">
            Accédez aux travaux dirigés et travaux pratiques pour toutes les matières de première année. Ces documents
            vous aideront à mettre en pratique les concepts vus en cours.
          </p>
        </div>

        <Tabs defaultValue="math" className="mb-12">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="math">Mathématiques</TabsTrigger>
            <TabsTrigger value="algo">Algorithmique</TabsTrigger>
            <TabsTrigger value="prog">Programmation</TabsTrigger>
            <TabsTrigger value="db">Bases de données</TabsTrigger>
          </TabsList>

          {Object.entries(resources).map(([category, resourceList]) => (
            <TabsContent key={category} value={category} className="space-y-4">
              {resourceList.map((resource, index) => (
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
          ))}
        </Tabs>
      </div>
    </main>
  )
}

