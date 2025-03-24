"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { BookOpen, Users } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-6">
              Bienvenue sur
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> Wiki27</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-blue-700 text-xl mb-8 max-w-2xl mx-auto"
          >
            La plateforme collaborative des étudiants de première année de l'ESI pour partager des ressources, trouver
            des cours et des stages.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/ressources/filieres">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8">
                <BookOpen className="mr-2 h-5 w-5" />
                Découvrir les ressources
              </Button>
            </Link>
            <Link href="/forums">
              <Button size="lg" variant="outline" className="text-blue-700 border-blue-500 hover:bg-blue-100">
                <Users className="mr-2 h-5 w-5" />
                Collaborer
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

