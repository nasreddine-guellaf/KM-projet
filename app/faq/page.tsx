import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Général",
      questions: [
        {
          question: "Qu'est-ce que Wiki27 ?",
          answer:
            "Wiki27 est une plateforme collaborative réservée aux étudiants de première année de l'ESI. Elle permet de partager des ressources pédagogiques, d'échanger sur les forums et de trouver des informations sur les filières et les stages.",
        },
        {
          question: "Comment puis-je contribuer au Wiki27 ?",
          answer:
            "Après vous être connecté avec votre compte étudiant, vous pouvez ajouter des ressources, participer aux forums, modifier des pages existantes ou créer de nouveaux contenus. Toutes les contributions sont modérées par l'équipe pour assurer la qualité.",
        },
        {
          question: "Puis-je accéder à Wiki27 sans être étudiant à l'ESI ?",
          answer:
            "Non, Wiki27 est une plateforme réservée aux étudiants de l'ESI. Vous devez vous connecter avec vos identifiants étudiants pour accéder au contenu.",
        },
      ],
    },
    {
      category: "Ressources",
      questions: [
        {
          question: "Quels types de ressources puis-je trouver sur Wiki27 ?",
          answer:
            "Vous trouverez des supports de cours, des TD/TP, des annales d'examens, des tutoriels, des guides pratiques et des offres de stages adaptées aux étudiants de première année.",
        },
        {
          question: "Comment signaler une erreur dans le contenu ?",
          answer:
            "Sur chaque page, vous trouverez un bouton 'Signaler un problème' qui vous permettra de décrire l'erreur. L'équipe de modération examinera votre signalement et apportera les corrections nécessaires.",
        },
        {
          question: "Puis-je télécharger les ressources pour les consulter hors ligne ?",
          answer:
            "Oui, la plupart des ressources sont disponibles au téléchargement au format PDF ou dans leur format d'origine pour une consultation hors ligne.",
        },
      ],
    },
    {
      category: "Filières",
      questions: [
        {
          question: "Comment choisir ma filière de spécialisation ?",
          answer:
            "Wiki27 propose des descriptions détaillées de chaque filière, des témoignages d'étudiants et des conseils pour vous aider à faire votre choix. Consultez la section 'Filières' pour plus d'informations et n'hésitez pas à poser vos questions sur le forum 'Questions aux Anciens'.",
        },
        {
          question: "Quand dois-je choisir ma filière de spécialisation ?",
          answer:
            "Le choix de filière s'effectue généralement à la fin du premier semestre. L'administration de l'ESI communiquera les dates exactes et la procédure à suivre.",
        },
        {
          question: "Puis-je changer de filière après avoir fait mon choix ?",
          answer:
            "Le changement de filière est possible mais soumis à certaines conditions. Il est généralement plus facile de changer en début de deuxième année qu'en cours d'année. Consultez l'administration pour connaître la procédure exacte.",
        },
      ],
    },
    {
      category: "Forums",
      questions: [
        {
          question: "Comment créer un nouveau sujet sur le forum ?",
          answer:
            "Connectez-vous à votre compte, accédez à la catégorie de forum appropriée, puis cliquez sur le bouton 'Nouveau sujet'. Remplissez le formulaire avec un titre clair et le contenu de votre message, puis soumettez-le.",
        },
        {
          question: "Puis-je modifier ou supprimer mes messages ?",
          answer:
            "Vous pouvez modifier vos messages pendant les 24 heures suivant leur publication. La suppression d'un message n'est possible que par les modérateurs, sur demande justifiée.",
        },
        {
          question: "Comment signaler un comportement inapproprié sur les forums ?",
          answer:
            "Chaque message dispose d'un bouton 'Signaler' qui vous permet d'alerter les modérateurs. Précisez la raison de votre signalement pour faciliter leur travail.",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-700 hover:text-blue-900 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Foire Aux Questions</h1>
          <p className="text-blue-700 max-w-3xl">
            Trouvez des réponses aux questions fréquemment posées par les étudiants de première année. Si vous ne
            trouvez pas la réponse à votre question, n'hésitez pas à la poser sur nos forums.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqCategories.map((category, index) => (
            <Card key={index} className="border-blue-100 p-6">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, i) => (
                  <AccordionItem key={i} value={`${category.category}-${i}`} className="border-blue-200">
                    <AccordionTrigger className="text-blue-800 hover:text-blue-600">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-blue-700">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg border border-blue-100 shadow-sm text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
          <p className="text-blue-700 mb-6">
            Posez votre question sur notre forum d'entraide ou contactez-nous directement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/forums/entraide">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8">Poser une question</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-blue-700 border-blue-500 hover:bg-blue-100">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

