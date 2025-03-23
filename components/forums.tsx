"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Users, Lightbulb, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Forums() {
  const forumCategories = [
    {
      title: "Discussions Générales",
      description: "Échangez sur tous les sujets liés à la vie étudiante",
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      link: "/forums/general",
    },
    {
      title: "Entraide",
      description: "Posez vos questions et aidez vos camarades",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      link: "/forums/entraide",
    },
    {
      title: "Projets Collaboratifs",
      description: "Trouvez des partenaires pour vos projets",
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      link: "/forums/projets",
    },
    {
      title: "Questions aux Anciens",
      description: "Bénéficiez de l'expérience des promotions précédentes",
      icon: <HelpCircle className="h-8 w-8 text-blue-600" />,
      link: "/forums/anciens",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Espace Collaboratif</h2>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Échangez avec vos camarades, posez vos questions et partagez vos connaissances dans nos forums dédiés.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {forumCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={category.link}>
                <Card className="h-full border-blue-100 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="flex items-center">
                    <div className="p-3 rounded-full bg-blue-100 mb-4">{category.icon}</div>
                    <CardTitle className="text-xl text-blue-800">{category.title}</CardTitle>
                    <CardDescription className="text-blue-600 text-center">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Button variant="outline" className="text-blue-700 border-blue-500 hover:bg-blue-100">
                      Accéder au forum
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/forums">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8">Voir tous les forums</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

