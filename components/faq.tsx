"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqItems = [
    {
      question: "Comment puis-je contribuer au Wiki27 ?",
      answer:
        "Après vous être connecté avec votre compte étudiant, vous pouvez ajouter des ressources, modifier des pages existantes ou créer de nouveaux contenus. Toutes les contributions sont modérées par l'équipe pour assurer la qualité.",
    },
    {
      question: "Quels types de ressources puis-je trouver sur Wiki27 ?",
      answer:
        "Vous trouverez des supports de cours, des TD/TP, des annales d'examens, des tutoriels, des guides pratiques et des offres de stages adaptées aux étudiants de première année.",
    },
    {
      question: "Comment choisir ma filière de spécialisation ?",
      answer:
        "Wiki27 propose des descriptions détaillées de chaque filière, des témoignages d'étudiants et des conseils pour vous aider à faire votre choix. Consultez la section 'Filières' pour plus d'informations.",
    },
    {
      question: "Puis-je accéder à Wiki27 sans être étudiant à l'ESI ?",
      answer:
        "Non, Wiki27 est une plateforme réservée aux étudiants de l'ESI. Vous devez vous connecter avec vos identifiants étudiants pour accéder au contenu.",
    },
    {
      question: "Comment signaler une erreur dans le contenu ?",
      answer:
        "Sur chaque page, vous trouverez un bouton 'Signaler un problème' qui vous permettra de décrire l'erreur. L'équipe de modération examinera votre signalement et apportera les corrections nécessaires.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Foire Aux Questions</h2>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Trouvez des réponses aux questions fréquemment posées par les étudiants de première année.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-blue-200">
                <AccordionTrigger className="text-blue-800 hover:text-blue-600">{item.question}</AccordionTrigger>
                <AccordionContent className="text-blue-700">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

