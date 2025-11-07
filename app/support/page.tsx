"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { ThreeBackground } from "@/components/ui/three-background"
import { useAuth } from "@/hooks/use-auth"
import { MessageCircle, Send, Clock, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

interface SupportTicket {
  id: string
  subject: string
  message: string
  status: "open" | "in-progress" | "resolved"
  createdAt: string
  replies: Array<{
    id: string
    message: string
    isAdmin: boolean
    timestamp: string
  }>
}

const mockTickets: SupportTicket[] = [
  {
    id: "SUP001",
    subject: "Size exchange request",
    message: "I need to exchange my compression tank from size M to L. The M size is too tight.",
    status: "open",
    createdAt: "2024-01-18T10:30:00Z",
    replies: [
      {
        id: "1",
        message: "Thank you for contacting us. We'll process your exchange request within 24 hours.",
        isAdmin: true,
        timestamp: "2024-01-18T11:00:00Z",
      },
    ],
  },
  {
    id: "SUP002",
    subject: "Delivery status inquiry",
    message: "My order TRY002 shows 'In Transit' for 5 days. Can you provide an update?",
    status: "resolved",
    createdAt: "2024-01-15T14:20:00Z",
    replies: [
      {
        id: "2",
        message: "Your order is currently with our delivery partner. Expected delivery: Jan 20, 2024.",
        isAdmin: true,
        timestamp: "2024-01-15T15:00:00Z",
      },
      {
        id: "3",
        message: "Order delivered successfully. Thank you for your patience!",
        isAdmin: true,
        timestamp: "2024-01-20T16:30:00Z",
      },
    ],
  },
]

export default function SupportPage() {
  const { isAuthenticated, user } = useAuth()
  const [tickets, setTickets] = useState<SupportTicket[]>(mockTickets)
  const [newTicket, setNewTicket] = useState({ subject: "", message: "" })
  const [showNewTicketForm, setShowNewTicketForm] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<null | "success" | "error" | "loading">(null)

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTicket.subject.trim() || !newTicket.message.trim()) return

    const ticket: SupportTicket = {
      id: `SUP${String(tickets.length + 1).padStart(3, "0")}`,
      subject: newTicket.subject,
      message: newTicket.message,
      status: "open",
      createdAt: new Date().toISOString(),
      replies: [],
    }

    setTickets([ticket, ...tickets])
    setNewTicket({ subject: "", message: "" })
    setShowNewTicketForm(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) setStatus("success")
      else setStatus("error")
    } catch {
      setStatus("error")
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open":
        return <AlertCircle className="h-5 w-5 text-orange-400" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-blue-400" />
      case "resolved":
        return <CheckCircle className="h-5 w-5 text-green-400" />
      default:
        return <MessageCircle className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-orange-500/20 text-orange-400"
      case "in-progress":
        return "bg-blue-500/20 text-blue-400"
      case "resolved":
        return "bg-green-500/20 text-green-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black relative">
        <ThreeBackground />
        <Navbar />

        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <MessageCircle className="h-16 w-16 text-white/60 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-white mb-4">Support Center</h1>
              <p className="text-white/80 mb-8">Please sign in to access support and view your tickets.</p>
              <Link
                href="/auth/signin"
                className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Sign In to Continue
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact & Support</h1>
        <div className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm space-y-8">
          <section className="text-center">
            <p className="text-lg md:text-xl text-white/80 mb-4">Need help? Our team is here for you. Reach out for order support, product questions, or just to say hi!</p>
            <p className="text-white/60 mb-2">For order and shipping queries, we use <span className="font-bold text-yellow-400">Shiprocket</span> for secure payments and logistics.</p>
            <p className="text-white/60">Email: <a href="mailto:support@trykonsupport.com" className="underline">support@trykonsupport.com</a></p>
          </section>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white/80 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-white/80 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                placeholder="you@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-white/80 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 min-h-[120px]"
                placeholder="How can we help you?"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && <p className="text-green-400 text-center">Message sent! We'll get back to you soon.</p>}
            {status === "error" && <p className="text-red-400 text-center">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </div>
  )
}
