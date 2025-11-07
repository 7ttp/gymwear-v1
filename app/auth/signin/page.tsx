"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { ThreeBackground } from "@/components/ui/three-background"
import { useAuth } from "@/hooks/use-auth"

export default function SignInPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    code: "",
  })
  const [loginMethod, setLoginMethod] = useState<"password" | "code">("password")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      const userData = {
        id: "1",
        username: formData.username,
        email: `${formData.username}@example.com`,
        phone: "+91 98765 43210",
        code: "1234567890123456",
      }

      login(userData)
      setIsLoading(false)
      router.push("/profile")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-black relative">
      <ThreeBackground />
      <Navbar />

      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-md mx-auto px-6">
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold text-white mb-8 text-center">Sign In</h1>

            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setLoginMethod("password")}
                className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                  loginMethod === "password" ? "bg-white text-black" : "bg-white/10 text-white/70"
                }`}
              >
                Password
              </button>
              <button
                onClick={() => setLoginMethod("code")}
                className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                  loginMethod === "code" ? "bg-white text-black" : "bg-white/10 text-white/70"
                }`}
              >
                16-Digit Code
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/80 mb-2">Username</label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  placeholder="Enter your username"
                  required
                />
              </div>

              {loginMethod === "password" ? (
                <div>
                  <label className="block text-white/80 mb-2">Password</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-white/80 mb-2">16-Digit Code</label>
                  <input
                    type="text"
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 font-mono"
                    placeholder="Enter your 16-digit code"
                    maxLength={16}
                    required
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors disabled:opacity-50"
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <p className="text-white/60 text-center mt-6">
              Don't have an account?{" "}
              <Link href="/auth/signup" className="text-white hover:underline">
                Sign Up
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
