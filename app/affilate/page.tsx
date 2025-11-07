"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function AffiliatePage() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<null | "success" | "error" | "loading" | "claimed">(null)
  const [ip, setIp] = useState("")

  useEffect(() => {
    // Get user IP (for demo, use a public API)
    fetch("https://api.ipify.org?format=json")
      .then(res => res.json())
      .then(data => setIp(data.ip))
  }, [])

  useEffect(() => {
    // Check localStorage for claim
    if (typeof window !== "undefined" && localStorage.getItem("trykonaffiliate-claimed")) {
      setStatus("claimed")
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus("error")
      return
    }
    // Prevent multiple claims from same device
    if (typeof window !== "undefined" && localStorage.getItem("trykonaffiliate-claimed")) {
      setStatus("claimed")
      return
    }
    // Call API route to store email and check IP
    const res = await fetch("/api/affiliate-claim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, ip }),
    })
    const data = await res.json()
    if (res.status === 200) {
      setStatus("success")
      if (typeof window !== "undefined") {
        localStorage.setItem("trykonaffiliate-claimed", "1")
      }
    } else {
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full">
        {/* SVG filter for liquid effect */}
        <svg width="0" height="0">
          <filter id="liquid-grey-affiliate" x="0" y="0">
            <feTurbulence id="turb" baseFrequency="0.02 0.03" numOctaves="2" result="turb" seed="5"/>
            <feDisplacementMap in2="turb" in="SourceGraphic" scale="20" xChannelSelector="R" yChannelSelector="G"/>
            <feColorMatrix type="matrix" values="0.5 0 0 0 0.3  0 0.5 0 0 0.3  0 0 0.5 0 0.3  0 0 0 1 0"/>
          </filter>
        </svg>
        <div className="flex flex-col items-center w-full">
          <motion.h1
            className="text-[16vw] md:text-[8vw] font-extrabold text-white/10 transition-all duration-500 cursor-pointer select-none relative z-10 text-center mb-8 leading-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ width: '100%' }}
          >
            <span className="relative group block w-full">
              <span
                className="block group-hover:text-white/80 transition-colors duration-500 w-full"
                style={{ WebkitFilter: 'none', filter: 'none' }}
              >
                <motion.span
                  className="inline-block w-full text-center"
                  whileHover={{ filter: 'url(#liquid-grey-affiliate)', color: '#fff' }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  style={{ display: 'inline-block' }}
                >
                  TRYKON
                </motion.span>
              </span>
            </span>
          </motion.h1>
        </div>
        <div className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm space-y-8">
          <p className="text-xl text-white/80 text-center mb-4">Enter your email to claim a <span className="text-green-400 font-bold">-9.99% discount</span> on your next order!</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
              placeholder="you@email.com"
              required
              disabled={status === "success" || status === "claimed"}
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success" || status === "claimed"}
              className="w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-green-500 hover:to-purple-600 transition-all disabled:opacity-50"
            >
              {status === "loading" ? "Claiming..." : status === "success" ? "Claimed!" : status === "claimed" ? "Already Claimed" : "Claim Discount"}
            </button>
            {status === "success" && <p className="text-green-400 text-center">Discount claimed! Check your email for your code.</p>}
            {status === "claimed" && <p className="text-yellow-400 text-center">You have already claimed this offer from this device or IP.</p>}
            {status === "error" && <p className="text-red-400 text-center">Invalid email or error. Please try again.</p>}
          </form>
          <p className="text-white/50 text-xs text-center mt-4">One claim per device and IP. No spam allowed. All claims are logged for security.</p>
        </div>
      </div>
    </div>
  )
} 