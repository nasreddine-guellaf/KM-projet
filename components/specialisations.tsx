"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Shield, Brain, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Specialisations() {
  const specialisations = [
    {
      title: "ICSD",
      description: "Ingénierie des Connaissances et Science des Données",
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      details: "Analyse de données, intelligence artificielle, machine learning et data science.",
      link: "/filieres/icsd",
    },
    {
      title: "IIN",
      description: "Ingénierie de l'Information Numérique",
      icon: <Database className="h-12 w-12 text-blue-600" />,
      details: "Gestion de l'information numérique, bases de données et systèmes d'information.",
      link: "/filieres/iin",
    },
    {
      title: "ISSIC",
      description: "Ingénierie de la Sécurité des Systèmes d'Information et Cyberdéfense",
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      details: "Sécurité informatique, cryptographie, protection des données et cyberdéfense.",
      link: "/filieres/issic",
    },
    {
      title: "ISITD",
      description: "Ingénierie des Systèmes d'Information et de la Transformation Digitale",
      icon: <BarChart className="h-12 w-12 text-blue-600" />,
      details: "Transformation digitale, gestion de projets IT et optimisation des processus.",
      link: "/filieres/isitd",
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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nos Filières</h2>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Découvrez les quatre filières disponibles pour les étudiants de première année à l'ESI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialisations.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={spec.link}>
                <Card className="h-full border-blue-100 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="flex items-center">
                    <div className="p-3 rounded-full bg-blue-50 mb-4">{spec.icon}</div>
                    <CardTitle className="text-xl text-blue-800">{spec.title}</CardTitle>
                    <CardDescription className="text-blue-600 text-center">{spec.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-700 mb-4">{spec.details}</p>
                    <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">Découvrir la filière</Button>
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

