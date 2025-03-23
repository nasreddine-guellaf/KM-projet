import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import Specialisations from "@/components/specialisations"
import Ressources from "@/components/ressources"
import Forums from "@/components/forums"
import FAQ from "@/components/faq"

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 antialiased bg-grid-blue/[0.02] relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#1E40AF"
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Specialisations />
        <Forums />
        <Ressources />
        <FAQ />
      </div>
    </main>
  )
}

