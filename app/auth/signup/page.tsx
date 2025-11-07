"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { ThreeBackground } from "@/components/ui/three-background"
import { useAuth } from "@/hooks/use-auth"
import { Copy } from "lucide-react"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  })
  const [step, setStep] = useState<"form" | "otp" | "success">("form")
  const [otp, setOtp] = useState("")
  const [generatedCode, setGeneratedCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const generateCode = () => {
    return Math.random().toString().slice(2, 18).padStart(16, "0")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    if (step === "form") {
      // Simulate sending OTP
      setTimeout(() => {
        setStep("otp")
        setIsLoading(false)
      }, 1000)
    } else if (step === "otp") {
      // Simulate OTP verification and account creation
      setTimeout(() => {
        const code = generateCode()
        setGeneratedCode(code)

        const userData = {
          id: Date.now().toString(),
          username: formData.username,
          email: formData.email,
          phone: formData.phone,
          code: code,
        }

        login(userData)
        setStep("success")
        setIsLoading(false)
      }, 1500)
    }
  }

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode)
    alert("Code copied to clipboard!")
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
            <h1 className="text-3xl font-bold text-white mb-8 text-center">
              {step === "success" ? "Welcome to TRYKON!" : "Sign Up"}
            </h1>

            {step === "form" && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/80 mb-2">Username</label>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    placeholder="Minimum 5 characters"
                    minLength={5}
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    placeholder="+91 XXXXX XXXXX"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Password</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    placeholder="Create a strong password"
                    minLength={8}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors disabled:opacity-50"
                >
                  {isLoading ? "Processing..." : "Continue"}
                </button>
              </form>
            )}

            {step === "otp" && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center">
                  <p className="text-white/80 mb-4">We've sent an OTP to {formData.phone}</p>
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Enter OTP</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 text-center text-2xl tracking-widest"
                    placeholder="000000"
                    maxLength={6}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors disabled:opacity-50"
                >
                  {isLoading ? "Verifying..." : "Verify & Create Account"}
                </button>
              </form>
            )}

            {step === "success" && (
              <div className="text-center space-y-6">
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-400 mb-4">Account created successfully!</p>
                  <p className="text-white/80 text-sm mb-4">Your 16-digit login code:</p>
                  <div className="bg-white/10 rounded-lg p-4 font-mono text-white text-lg tracking-wider">
                    {generatedCode}
                  </div>
                  <button
                    onClick={copyCode}
                    className="mt-4 flex items-center gap-2 mx-auto bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-white transition-colors"
                  >
                    <Copy className="h-4 w-4" />
                    Copy Code
                  </button>
                </div>

                <button
                  onClick={() => router.push("/profile")}
                  className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  Go to Profile
                </button>
              </div>
            )}

            {step === "form" && (
              <p className="text-white/60 text-center mt-6">
                Already have an account?{" "}
                <Link href="/auth/signin" className="text-white hover:underline">
                  Sign In
                </Link>
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
