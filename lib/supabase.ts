import { createClient } from "@supabase/supabase-js"

// Ces valeurs doivent être stockées dans des variables d'environnement
// Pour le développement local, vous pouvez les ajouter dans un fichier .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://lmctcuvjamgvxmdxljyq.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtY3RjdXZqYW1ndnhtZHhsanlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1MTUwNDUsImV4cCI6MjA1OTA5MTA0NX0.h1D3tMWDoaI1nUD_7PJja0pP7uDIvGxoe3ai-BiEfgs"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

