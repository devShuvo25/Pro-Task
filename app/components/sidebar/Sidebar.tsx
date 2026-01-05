"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutGrid, AlertCircle, CheckSquare, List, Settings, HelpCircle, LogOut } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Sidebar() {
  const pathname = usePathname()

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
    { href: "/dashboard/vital-tasks", label: "Vital Tasks", icon: AlertCircle },
    { href: "/dashboard/my-tasks", label: "My Tasks", icon: CheckSquare },
    { href: "/dashboard/categories", label: "Task Categories", icon: List },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
    { href: "/help", label: "Help", icon: HelpCircle },
  ]

  return (
    <aside className="flex h-full w-full flex-col bg-gradient-to-b from-[#FF5F5F] to-[#ff8f8f] text-white">
      {/* Profile Section */}
      <div className="flex flex-col items-center py-10">
        <div className="relative mb-4">
            <div className="absolute -inset-1 rounded-full bg-white/30 blur-sm"></div>
            <Avatar className="relative h-24 w-24 border-4 border-white shadow-xl">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback className="bg-white/10 text-white text-2xl font-bold backdrop-blur-md">SG</AvatarFallback>
            </Avatar>
        </div>
        <h2 className="text-xl font-bold tracking-wide">Sundar Gurung</h2>
        <p className="text-sm text-white/80 font-medium">sundargurung360@gmail.com</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-3 px-6 py-6">
        {links.map((link) => {
          const isActive = pathname === link.href
          const Icon = link.icon
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex items-center gap-4 rounded-2xl px-5 py-3.5 transition-all duration-300 ${
                isActive
                  ? "bg-white text-[#FF5F5F] shadow-lg scale-105"
                  : "text-white hover:bg-white/20 hover:backdrop-blur-sm"
              }`}
            >
              <Icon className={`h-5 w-5 transition-transform group-hover:scale-110 ${isActive ? "" : "text-white"}`} />
              <span className="font-semibold tracking-wide">{link.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout Section */}
      <div className="p-6">
        <button className="flex items-center gap-3 text-white hover:text-white/90">
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  )
}
