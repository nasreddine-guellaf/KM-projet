"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Type pour les utilisateurs
type User = {
  id: string
  email: string
  firstName: string
  lastName: string
}

// Type pour le contexte d'authentification
type AuthContextType = {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<{ success: boolean; message?: string }>
  signUp: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) => Promise<{ success: boolean; message?: string }>
  signOut: () => void
}

// Création du contexte
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Hook personnalisé pour utiliser le contexte
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth doit être utilisé à l'intérieur d'un AuthProvider")
  }
  return context
}

// Provider du contexte
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Charger l'utilisateur depuis localStorage au chargement
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Erreur lors du chargement de l'utilisateur:", error)
        localStorage.removeItem("user")
      }
    }
    setIsLoading(false)
  }, [])

  // Fonction pour s'inscrire
  const signUp = async (email: string, password: string, firstName: string, lastName: string) => {
    // Vérifier si l'utilisateur existe déjà
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const existingUser = users.find((u: any) => u.email === email)

    if (existingUser) {
      return { success: false, message: "Cet email est déjà utilisé" }
    }

    // Créer un nouvel utilisateur
    const newUser = {
      id: Date.now().toString(),
      email,
      firstName,
      lastName,
      password, // Note: Dans une vraie application, le mot de passe devrait être hashé
    }

    // Ajouter l'utilisateur à la liste
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

    // Rediriger vers la page de connexion
    router.push("/login?registered=true")
    return { success: true }
  }

  // Fonction pour se connecter
  const signIn = async (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const user = users.find((u: any) => u.email === email && u.password === password)

    if (!user) {
      return { success: false, message: "Email ou mot de passe incorrect" }
    }

    // Créer une version de l'utilisateur sans le mot de passe
    const { password: _, ...safeUser } = user

    // Stocker l'utilisateur dans le state et localStorage
    setUser(safeUser)
    localStorage.setItem("user", JSON.stringify(safeUser))

    // Rediriger vers la page d'accueil
    router.push("/")
    return { success: true }
  }

  // Fonction pour se déconnecter
  const signOut = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
  }

  const value = {
    user,
    isLoading,
    signIn,
    signUp,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

