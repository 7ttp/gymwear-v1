"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Smartphone, MapPin, Clock, Package, MessageCircle } from "lucide-react"

const deviceSessions = [
  {
    id: 1,
    device: "iPhone 14 Pro",
    location: "Mumbai, Maharashtra",
    lastActive: "2 minutes ago",
    current: true,
  },
  {
    id: 2,
    device: "MacBook Pro",
    location: "Mumbai, Maharashtra",
    lastActive: "1 hour ago",
    current: false,
  },
]

const orders = [
  {
    id: "TRY001",
    items: ["Compression Tank", "Performance Shorts"],
    total: 4498,
    status: "Delivered",
    date: "2024-01-15",
  },
  {
    id: "TRY002",
    items: ["Training Tee"],
    total: 1799,
    status: "In Transit",
    date: "2024-01-20",
  },
]

const supportTickets = [
  {
    id: "SUP001",
    subject: "Size exchange request",
    status: "Open",
    date: "2024-01-18",
  },
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Profile
          </motion.h1>

          <div className="grid gap-8">
            {/* Device Sessions */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Smartphone className="h-6 w-6" />
                Device Sessions
              </h2>
              <div className="space-y-4">
                {deviceSessions.map((session) => (
                  <div key={session.id} className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium">{session.device}</h3>
                      <div className="flex items-center gap-4 text-white/60 text-sm mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {session.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {session.lastActive}
                        </span>
                      </div>
                    </div>
                    {session.current && (
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Current</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Orders History */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Package className="h-6 w-6" />
                Order History
              </h2>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium">Order #{order.id}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          order.status === "Delivered"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <p className="text-white/60 text-sm mb-2">{order.items.join(", ")}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">{order.date}</span>
                      <span className="text-white font-medium">₹{order.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Support Tickets */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageCircle className="h-6 w-6" />
                Support Tickets
              </h2>
              <div className="space-y-4">
                {supportTickets.map((ticket) => (
                  <div key={ticket.id} className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium">{ticket.subject}</h3>
                      <p className="text-white/60 text-sm">
                        Ticket #{ticket.id} • {ticket.date}
                      </p>
                    </div>
                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">
                      {ticket.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
