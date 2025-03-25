import Navbar from "@/components/navbar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Briefcase, Building, Calendar, MapPin, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function StagesPage() {
  const stages = [
    {
      title: "Stage en développement web",
      entreprise: "TechSolutions",
      lieu: "Alger",
      duree: "2 mois",
      date: "Juin - Juillet 2024",
      filiere: "Toutes filières",
      description:
        "Développement d'applications web modernes utilisant les frameworks React et Node.js. Vous participerez à la conception et à l'implémentation de nouvelles fonctionnalités pour nos clients.",
      competences: ["HTML/CSS", "JavaScript", "React", "Node.js"],
      lien: "https://www.linkedin.com/company/techsolutions-algerie",
      source: "LinkedIn",
    },
    {
      title: "Stage en data science",
      entreprise: "DataInsight",
      lieu: "Oran",
      duree: "3 mois",
      date: "Juillet - Septembre 2024",
      filiere: "ICSD",
      description:
        "Analyse de données et création de modèles prédictifs pour optimiser les processus métier. Vous travaillerez sur des projets réels avec des volumes importants de données.",
      competences: ["Python", "Machine Learning", "SQL", "Data Visualization"],
      lien: "https://www.datainsight-dz.com/carrieres",
      source: "Site web",
    },
    {
      title: "Stage en cybersécurité",
      entreprise: "SecureNet",
      lieu: "Alger",
      duree: "2 mois",
      date: "Juin - Juillet 2024",
      filiere: "ISSIC",
      description:
        "Participation à des audits de sécurité et mise en place de solutions de protection des systèmes d'information. Vous serez formé aux dernières techniques de cyberdéfense.",
      competences: ["Sécurité réseau", "Cryptographie", "Analyse de vulnérabilités", "Ethical Hacking"],
      lien: "https://www.linkedin.com/company/securenet-algerie",
      source: "LinkedIn",
    },
    {
      title: "Stage en gestion de projet IT",
      entreprise: "ConsultIT",
      lieu: "Constantine",
      duree: "3 mois",
      date: "Juin - Août 2024",
      filiere: "ISITD",
      description:
        "Accompagnement de projets de transformation digitale pour nos clients. Vous participerez à toutes les phases du projet, de l'analyse des besoins à la livraison finale.",
      competences: ["Gestion de projet", "Méthodologies Agile", "UML", "Business Analysis"],
      lien: "https://www.consultit-dz.com/stages",
      source: "Site web",
    },
    {
      title: "Stage en bases de données",
      entreprise: "InfoSystems",
      lieu: "Alger",
      duree: "2 mois",
      date: "Juillet - Août 2024",
      filiere: "IIN",
      description:
        "Conception et optimisation de bases de données pour des applications d'entreprise. Vous travaillerez sur l'amélioration des performances et la migration de données.",
      competences: ["SQL", "Oracle", "MongoDB", "ETL"],
      lien: "https://www.linkedin.com/company/infosystems-algerie",
      source: "LinkedIn",
    },
  ]

  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/ressources" className="inline-flex items-center text-blue-700 hover:text-blue-900 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux ressources
          </Link>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Offres de Stages</h1>
          <p className="text-blue-700 max-w-3xl">
            Découvrez les offres de stages disponibles pour les étudiants de première année. Ces opportunités vous
            permettront d'acquérir une expérience pratique et de mettre en application vos connaissances.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {stages.map((stage, index) => (
            <Card key={index} className="border-blue-100 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="h-5 w-5 text-blue-700" />
                      <h3 className="text-xl font-semibold text-blue-800">{stage.title}</h3>
                      <Badge className="bg-blue-600">{stage.filiere}</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
                      <div className="flex items-center text-blue-700">
                        <Building className="h-4 w-4 mr-2" />
                        <span>{stage.entreprise}</span>
                      </div>
                      <div className="flex items-center text-blue-700">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{stage.lieu}</span>
                      </div>
                      <div className="flex items-center text-blue-700">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>
                          {stage.date} ({stage.duree})
                        </span>
                      </div>
                    </div>

                    <p className="text-blue-700 mb-4">{stage.description}</p>

                    <div>
                      <h4 className="font-medium text-blue-800 mb-2">Compétences requises :</h4>
                      <div className="flex flex-wrap gap-2">
                        {stage.competences.map((competence, i) => (
                          <Badge key={i} variant="outline" className="bg-blue-50">
                            {competence}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 bg-gray-50 border-t border-blue-100">
                <a href={stage.lien} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                    {stage.source === "LinkedIn" ? (
                      <Linkedin className="mr-2 h-4 w-4" />
                    ) : (
                      <ExternalLink className="mr-2 h-4 w-4" />
                    )}
                    Voir l'offre sur {stage.source}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

