"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { GlowMenu } from "@/components/ui/glow-menu"
import { useAuth } from "@/hooks/use-auth"
import { useCart } from "@/hooks/use-cart"
import { LogOut, X, Menu, User, ShoppingCart, Headphones } from "lucide-react"
import { useState, useEffect } from "react"

export function Navbar() {
  const { isAuthenticated, user, logout } = useAuth()
  const { itemCount } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const mobileMenuItems = [
    {
      icon: <Menu className="h-6 w-6" />,
      label: "Men",
      href: "/men",
      gradient: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(37,99,235,0.1) 50%, rgba(29,78,216,0) 100%)",
      iconColor: "text-blue-400",
    },
    {
      icon: <Menu className="h-6 w-6" />,
      label: "Drops",
      href: "/drops",
      gradient: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, rgba(234,88,12,0.1) 50%, rgba(194,65,12,0) 100%)",
      iconColor: "text-orange-400",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      label: "Support",
      href: "/support",
      gradient: "radial-gradient(circle, rgba(34,197,94,0.2) 0%, rgba(22,163,74,0.1) 50%, rgba(21,128,61,0) 100%)",
      iconColor: "text-green-400",
    },
    {
      icon: <User className="h-6 w-6" />,
      label: "Profile",
      href: isAuthenticated ? "/profile" : "/auth/signin",
      gradient: "radial-gradient(circle, rgba(139,69,19,0.2) 0%, rgba(160,82,45,0.1) 50%, rgba(101,67,33,0) 100%)",
      iconColor: "text-amber-400",
      requiresAuth: true,
    },
    {
      icon: (
        <div className="relative">
          <ShoppingCart className="h-6 w-6" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
              {itemCount > 9 ? "9+" : itemCount}
            </span>
          )}
        </div>
      ),
      label: "Cart",
      href: isAuthenticated ? "/cart" : "/auth/signin",
      gradient: "radial-gradient(circle, rgba(239,68,68,0.2) 0%, rgba(220,38,38,0.1) 50%, rgba(185,28,28,0) 100%)",
      iconColor: "text-red-400",
      requiresAuth: true,
    },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      {/* SVG filter for liquid effect (shared with footer) */}
      <svg width="0" height="0">
        <filter id="liquid-grey-navbar" x="0" y="0">
          <feTurbulence id="turb" baseFrequency="0.02 0.03" numOctaves="2" result="turb" seed="3"/>
          <feDisplacementMap in2="turb" in="SourceGraphic" scale="20" xChannelSelector="R" yChannelSelector="G"/>
          <feColorMatrix type="matrix" values="0.5 0 0 0 0.3  0 0.5 0 0 0.3  0 0 0.5 0 0.3  0 0 0 1 0"/>
        </filter>
      </svg>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <Link href="/" className="text-white text-2xl font-bold tracking-wider select-none group">
            <motion.span
              className="inline-block"
              whileHover={{ filter: 'url(#liquid-grey-navbar)', color: '#fff' }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              style={{ display: 'inline-block' }}
            >
              TRYKON
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Navigation Menu */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.4 }}
        >
          <GlowMenu itemCount={itemCount} />
        </motion.div>

        {/* Desktop Auth Section */}
        <motion.div
          className="hidden md:flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2.6 }}
        >
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <span className="text-white/80 text-sm">Welcome, {user?.username}</span>
              <button
                onClick={logout}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/auth/signin"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-white/90 transition-colors text-sm font-medium"
              >
                Sign Up
              </Link>
            </>
          )}
        </motion.div>

        {/* Mobile Hamburger */}
        <motion.button
          className="md:hidden flex items-center justify-center p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-lg border border-white/20"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="h-6 w-6 text-white" />
        </motion.button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-[100] bg-gradient-to-br from-black/95 via-black/90 to-black/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-modal="true"
            role="dialog"
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 z-50 flex items-center justify-center p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-lg border border-white/20"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="h-6 w-6 text-white" />
            </motion.button>

            {/* Mobile Menu Content */}
            <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
              {/* Logo in Mobile Menu */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link href="/" className="text-white text-3xl font-bold tracking-wider">
                  TRYKON
                </Link>
              </motion.div>

              {/* Navigation Items */}
              <motion.div
                className="w-full max-w-sm space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {mobileMenuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="group relative block w-full p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-lg border border-white/10 hover:border-white/20"
                    >
                      {/* Glow Effect */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: item.gradient }}
                      />
                      
                      {/* Content */}
                      <div className="relative z-10 flex items-center gap-4">
                        <div className={`transition-colors duration-300 group-hover:${item.iconColor}`}>
                          {item.icon}
                        </div>
                        <span className="text-white/90 group-hover:text-white text-lg font-medium transition-colors duration-300">
                          {item.label}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Auth Section */}
              <motion.div
                className="w-full max-w-sm mt-8 pt-8 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {isAuthenticated ? (
                  <div className="space-y-4">
                    <div className="text-center">
                      <span className="text-white/70 text-lg">Welcome back,</span>
                      <div className="text-white text-xl font-semibold mt-1">{user?.username}</div>
                    </div>
                    <motion.button
                      onClick={() => { logout(); setMobileOpen(false) }}
                      className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-lg border border-white/20 text-white/90 hover:text-white text-lg font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <LogOut className="h-5 w-5" />
                      Sign Out
                    </motion.button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <Link
                        href="/auth/signin"
                        onClick={() => setMobileOpen(false)}
                        className="w-full flex items-center justify-center p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-lg border border-white/20 text-white/90 hover:text-white text-lg font-medium"
                      >
                        Sign In
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Link
                        href="/auth/signup"
                        onClick={() => setMobileOpen(false)}
                        className="w-full flex items-center justify-center p-4 rounded-2xl bg-white text-black hover:bg-white/90 transition-all duration-300 text-lg font-semibold"
                      >
                        Create Account
                      </Link>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
