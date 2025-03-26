"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, Briefcase, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Ressources() {
  const resources = [
    {
      title: "Cours",
      description: "Accédez aux supports de cours pour toutes les matières",
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      link: "/ressources/filieres",
    },
    {
      title: "TD & TP",
      description: "Téléchargez les travaux dirigés et pratiques",
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      link: "/ressources/filieres",
    },
    {
      title: "Stages",
      description: "Trouvez des offres de stages adaptées à votre filière",
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      link: "/ressources/stages",
    },
    {
      title: "Tutoriels",
      description: "Vidéos et guides créés par les étudiants",
      icon: <Video className="h-8 w-8 text-blue-600" />,
      link: "/ressources/tutoriels",
    },
  ]

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Ressources</h2>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Accédez à toutes les ressources partagées par la communauté des étudiants de l'ESI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={resource.link}>
                <Card className="h-full border-blue-100 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="flex items-center">
                    <div className="p-3 rounded-full bg-blue-100 mb-4">{resource.icon}</div>
                    <CardTitle className="text-xl text-blue-800">{resource.title}</CardTitle>
                    <CardDescription className="text-blue-600 text-center">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Button variant="outline" className="text-blue-700 border-blue-500 hover:bg-blue-100">
                      Accéder
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

