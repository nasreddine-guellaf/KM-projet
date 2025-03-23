"use client"

import { Button } from "@/components/ui/button"
import { BookOpen, Home, HelpCircle, Menu, LogIn, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-blue-200 bg-white/80"
    >
      <Link href="/" className="flex items-center space-x-2">
        <BookOpen className="w-8 h-8 text-blue-700" />
        <span className="text-blue-800 font-medium text-xl">Wiki27</span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/">
          <Home className="w-4 h-4 mr-1" />
          Accueil
        </NavLink>
        <NavLink href="/ressources/filieres">
          <BookOpen className="w-4 h-4 mr-1" />
          Ressources
        </NavLink>
        <NavLink href="/forums">
          <MessageSquare className="w-4 h-4 mr-1" />
          Forums
        </NavLink>
        <NavLink href="/faq">
          <HelpCircle className="w-4 h-4 mr-1" />
          FAQ
        </NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Link href="/register">
          <Button variant="ghost" className="text-blue-700 hover:text-blue-900">
            S'inscrire
          </Button>
        </Link>
        <Link href="/login">
          <Button className="bg-blue-700 hover:bg-blue-800 text-white">
            <LogIn className="w-4 h-4 mr-2" />
            Connexion
          </Button>
        </Link>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-blue-700">
        <Menu className="w-6 h-6" />
      </Button>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-blue-700 hover:text-blue-900 transition-colors relative group flex items-center">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
    </Link>
  )
}

