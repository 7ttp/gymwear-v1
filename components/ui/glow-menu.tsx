"use client"

import type * as React from "react"
import { motion } from "framer-motion"
import { User, ShoppingCart, Menu, Headphones } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
  requiresAuth?: boolean
}

interface GlowMenuProps {
  itemCount?: number
}

export function GlowMenu({ itemCount = 0 }: GlowMenuProps) {
  const { isAuthenticated } = useAuth()

  const menuItems: MenuItem[] = [
    {
      icon: <Menu className="h-5 w-5" />,
      label: "Men",
      href: "/men",
      gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
      iconColor: "text-blue-500",
    },
    {
      icon: <Menu className="h-5 w-5" />,
      label: "Drops",
      href: "/drops",
      gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
      iconColor: "text-orange-500",
    },
    {
      icon: <Headphones className="h-5 w-5" />,
      label: "Support",
      href: "/support",
      gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
      iconColor: "text-green-500",
    },
    {
      icon: <User className="h-5 w-5" />,
      label: "Profile",
      href: isAuthenticated ? "/profile" : "/auth/signin",
      gradient: "radial-gradient(circle, rgba(139,69,19,0.15) 0%, rgba(160,82,45,0.06) 50%, rgba(101,67,33,0) 100%)",
      iconColor: "text-amber-600",
      requiresAuth: true,
    },
    {
      icon: (
        <div className="relative">
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {itemCount > 9 ? "9+" : itemCount}
            </span>
          )}
        </div>
      ),
      label: "Cart",
      href: isAuthenticated ? "/cart" : "/auth/signin",
      gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
      iconColor: "text-red-500",
      requiresAuth: true,
    },
  ]

  const itemVariants = {
    initial: { rotateX: 0, opacity: 1 },
    hover: { rotateX: -90, opacity: 0 },
  }

  const backVariants = {
    initial: { rotateX: 90, opacity: 0 },
    hover: { rotateX: 0, opacity: 1 },
  }

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: {
      opacity: 1,
      scale: 2,
      transition: {
        opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
      },
    },
  }

  const navGlowVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const sharedTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    duration: 0.5,
  }

  return (
    <motion.nav
      className="p-2 rounded-2xl bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg relative overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="absolute -inset-2 bg-gradient-radial from-transparent via-white/10 via-30% via-gray-400/10 via-60% via-white/5 via-90% to-transparent rounded-3xl z-0 pointer-events-none"
        variants={navGlowVariants}
      />
      <ul className="flex items-center gap-2 relative z-10">
        {menuItems.map((item, index) => (
          <motion.li key={item.label} className="relative">
            <motion.div
              className="block rounded-xl overflow-visible group relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                variants={glowVariants}
                style={{
                  background: item.gradient,
                  opacity: 0,
                  borderRadius: "16px",
                }}
              />
              <motion.div
                variants={itemVariants}
                transition={sharedTransition}
                style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-white/70 group-hover:text-white transition-colors rounded-xl"
                >
                  <span className={`transition-colors duration-300 group-hover:${item.iconColor}`}>{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              </motion.div>
              <motion.div
                className="absolute inset-0 z-10"
                variants={backVariants}
                transition={sharedTransition}
                style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 bg-transparent text-white/70 group-hover:text-white transition-colors rounded-xl"
                >
                  <span className={`transition-colors duration-300 group-hover:${item.iconColor}`}>{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}
