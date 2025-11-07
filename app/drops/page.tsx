"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Navbar } from "@/components/layout/navbar"
import { ThreeBackground } from "@/components/ui/three-background"
import { Clock, Zap, Star, ArrowRight } from "lucide-react"
import { useMotionValue, useTransform } from "framer-motion"

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2024-07-12T00:00:00Z").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-4 gap-6 max-w-2xl mx-auto">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <motion.div
          key={unit}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-3 hover:bg-white/15 transition-all duration-300">
            <motion.span
              className="text-4xl md:text-5xl font-bold text-white block"
              key={value}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {value.toString().padStart(2, "0")}
            </motion.span>
          </div>
          <span className="text-white/70 text-sm uppercase tracking-wider font-medium">{unit}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default function DropsPage() {
  const [isNotifyEnabled, setIsNotifyEnabled] = useState(false)
  const [email, setEmail] = useState("")
  const parallaxRef = useRef<HTMLDivElement>(null)
  const y = useMotionValue(0)
  const yParallax = useTransform(y, [0, 500], [0, -60])

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        y.set(window.scrollY)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [y])

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsNotifyEnabled(true)
      setTimeout(() => {
        alert("You'll be notified when the drop goes live!")
      }, 500)
    }
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <ThreeBackground />
      <Navbar />

      {/* Parallax Layer */}
      <motion.div
        ref={parallaxRef}
        style={{ y: yParallax }}
        className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-purple-900/40 via-black/60 to-pink-900/40 opacity-60"
      />

      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Drop Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Side - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Zap className="h-5 w-5 text-yellow-400" />
                <span className="text-white font-semibold tracking-wide">EXCLUSIVE DROP</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  SHADOW
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
                    COLLECTION
                  </span>
                </h1>
                <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed">
                  Limited edition premium collection featuring cutting-edge design and unmatched performance.
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  "Ultra-premium materials",
                  "Limited to 100 pieces worldwide",
                  "Exclusive shadow-tech fabric",
                  "Collector's edition packaging",
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-white/90">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Countdown */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Drops In</h2>
                  <p className="text-white/70">July 12th, 2024 • 12:00 AM IST</p>
                </div>

                <CountdownTimer />
              </motion.div>

              {/* Notify Me Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {!isNotifyEnabled ? (
                  <form onSubmit={handleNotifyMe} className="flex gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email for early access"
                      className="flex-1 bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-white/40 backdrop-blur-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                    >
                      Notify Me
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </form>
                ) : (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 text-center">
                    <p className="text-green-400 font-semibold mb-2">🎉 You're on the list!</p>
                    <p className="text-white/80">We'll notify you 24 hours before the drop goes live.</p>
                  </div>
                )}
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px #a0f' }}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl transform scale-110" />

                {/* Main Image */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-white/10">
                  <img
                    src="/images/drop-hero.png"
                    alt="Shadow Collection Preview"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Elements */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                      <span className="text-white text-sm font-semibold">LIMITED</span>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-semibold">Shadow Tee</p>
                          <p className="text-white/70 text-sm">Premium Collection</p>
                        </div>
                        <div className="text-right">
                          <p className="text-yellow-400 font-bold text-2xl">₹1,599</p>
                          <p className="text-white/50 text-sm line-through">₹4,999</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500/30 rounded-full backdrop-blur-sm border border-purple-400/50"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute -bottom-6 -right-6 w-12 h-12 bg-pink-500/30 rounded-full backdrop-blur-sm border border-pink-400/50"
                  animate={{
                    y: [0, 15, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Additional Info */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Clock className="h-8 w-8 text-white/80 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">24-Hour Window</h3>
                  <p className="text-white/70 text-sm">Limited time availability once live</p>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Instant Access</h3>
                  <p className="text-white/70 text-sm">Early access for registered users</p>
                </div>
                <div className="text-center">
                  <Star className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Exclusive Design</h3>
                  <p className="text-white/70 text-sm">Never to be reproduced again</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
