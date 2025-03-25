"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Send } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function PoserQuestionPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    question: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Envoyer les données à Formspree
      const response = await fetch("https://formspree.io/f/xdkegjjq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Une erreur est survenue lors de l'envoi du formulaire")
      }

      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        question: "",
      })

      // Afficher un message de succès
      toast({
        title: "Question envoyée",
        description: "Votre question a été envoyée avec succès. Nous vous répondrons dans les plus brefs délais.",
      })
    } catch (error: any) {
      console.error("Erreur lors de l'envoi de la question:", error)
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue lors de l'envoi de votre question.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
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
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Poser une question</h1>
          <p className="text-blue-700 max-w-3xl">
            Vous avez une question qui n'est pas couverte dans notre FAQ ? Utilisez ce formulaire pour nous la poser.
            Notre équipe vous répondra dans les plus brefs délais.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto border-blue-100">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800">Formulaire de contact</CardTitle>
            <CardDescription className="text-blue-600">
              Tous les champs marqués d'un astérisque (*) sont obligatoires.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit} action="https://formspree.io/f/xdkegjjq" method="POST">
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-blue-800">
                    Nom complet *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="border-blue-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-blue-800">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@esi.ac.ma"
                    className="border-blue-200"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-blue-800">
                  Sujet *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sujet de votre question"
                  className="border-blue-200"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-blue-800">
                  Catégorie
                </Label>
                <Select value={formData.category} onValueChange={handleSelectChange}>
                  <SelectTrigger className="border-blue-200">
                    <SelectValue placeholder="Sélectionnez une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">Question générale</SelectItem>
                    <SelectItem value="cours">Cours et ressources</SelectItem>
                    <SelectItem value="filieres">Filières</SelectItem>
                    <SelectItem value="stages">Stages</SelectItem>
                    <SelectItem value="technique">Problème technique</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="hidden" name="category" value={formData.category} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="question" className="text-blue-800">
                  Votre question *
                </Label>
                <Textarea
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  placeholder="Détaillez votre question ici..."
                  className="min-h-[150px] border-blue-200"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white" disabled={loading}>
                {loading ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer ma question
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  )
}

