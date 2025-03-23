"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, Home, HelpCircle, Menu, LogIn, MessageSquare, X } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-blue-200 bg-white/80 relative z-50"
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

        <Button variant="ghost" size="icon" className="md:hidden text-blue-700" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </motion.nav>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20">
          <div className="flex flex-col items-center space-y-6 p-6">
            <MobileNavLink href="/" onClick={toggleMenu}>
              <Home className="w-5 h-5 mr-2" />
              Accueil
            </MobileNavLink>
            <MobileNavLink href="/ressources/filieres" onClick={toggleMenu}>
              <BookOpen className="w-5 h-5 mr-2" />
              Ressources
            </MobileNavLink>
            <MobileNavLink href="/forums" onClick={toggleMenu}>
              <MessageSquare className="w-5 h-5 mr-2" />
              Forums
            </MobileNavLink>
            <MobileNavLink href="/faq" onClick={toggleMenu}>
              <HelpCircle className="w-5 h-5 mr-2" />
              FAQ
            </MobileNavLink>
            <MobileNavLink href="/poser-question" onClick={toggleMenu}>
              <MessageSquare className="w-5 h-5 mr-2" />
              Poser une question
            </MobileNavLink>

            <div className="pt-6 flex flex-col w-full space-y-4">
              <Link href="/register" onClick={toggleMenu} className="w-full">
                <Button variant="outline" className="w-full text-blue-700 border-blue-500">
                  S'inscrire
                </Button>
              </Link>
              <Link href="/login" onClick={toggleMenu} className="w-full">
                <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                  <LogIn className="w-4 h-4 mr-2" />
                  Connexion
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
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

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      className="text-blue-800 text-lg font-medium hover:text-blue-600 transition-colors flex items-center w-full justify-center"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

