"use client"

import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Bell, CalendarDays, Menu, LayoutGrid, AlertCircle, CheckSquare, List, Settings, HelpCircle, LogOut, User } from "lucide-react"

import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()
  const customDate = new Date()
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const dayName = days[customDate.getDay()]
  const dateString = customDate.toLocaleDateString("en-GB") // DD/MM/YYYY

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
    { href: "/dashboard/vital-tasks", label: "Vital Tasks", icon: AlertCircle },
    { href: "/dashboard/my-tasks", label: "My Tasks", icon: CheckSquare },
    { href: "/dashboard/categories", label: "Task Categories", icon: List },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
    { href: "/help", label: "Help", icon: HelpCircle },
  ]

  return (
    <header className="bg-white/80 backdrop-blur-md px-6 py-4 border-b border-gray-100">
      <div className="flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-4">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold flex-shrink-0">
            <span className="text-[#FF5F5F]">Dash</span>board
            </Link>
        </div>


        {/* Right Section */}
        <div className="flex items-center gap-4 sm:gap-8">
            {/* Desktop Navigation Links (Visible on MD+) */}
            <nav className="hidden md:flex items-center gap-1">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link 
                            key={link.href}
                            href={link.href}
                            className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                                isActive 
                                    ? "bg-[#FF5F5F]/10 text-[#FF5F5F]" 
                                    : "text-gray-600 hover:text-[#FF5F5F] hover:bg-gray-50"
                            }`}
                        >
                            {link.label}
                        </Link>
                    )
                })}
            </nav>

             {/* Search Bar */}
             <div className="relative hidden lg:block w-[350px]">
                <input
                    type="text"
                    placeholder="Search your task here..."
                    className="w-full rounded-xl bg-gray-50 px-4 py-2.5 pr-12 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-[#FF5F5F]/20 transition-all border border-gray-100"
                />
                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-lg bg-[#FF5F5F] p-2 text-white shadow-sm transition-all hover:bg-[#FF5F5F]/90 hover:shadow-md active:scale-95">
                    <Search className="h-4 w-4" />
                </button>
            </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:flex rounded-xl bg-gray-50 border border-gray-100 p-2.5 text-gray-600 transition hover:bg-[#FF5F5F] hover:text-white hover:border-[#FF5F5F] shadow-sm">
              <Bell className="h-5 w-5" />
            </button>
            <button className="hidden sm:flex rounded-xl bg-gray-50 border border-gray-100 p-2.5 text-gray-600 transition hover:bg-[#FF5F5F] hover:text-white hover:border-[#FF5F5F] shadow-sm">
              <CalendarDays className="h-5 w-5" />
            </button>
          </div>

          <div className="hidden lg:block text-right">
            <div className="text-sm font-bold text-gray-900">{dayName}</div>
            <div className="text-xs font-semibold text-[#FF5F5F]">{dateString}</div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Avatar className="h-10 w-10 border-2 border-white shadow-md ring-2 ring-gray-50 cursor-pointer transition-transform hover:scale-105">
                <AvatarFallback className="bg-gray-900 text-white text-sm font-bold">SM</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-2">
                <div className="flex items-center gap-3 p-2 mb-2 border-b pb-3">
                    <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-gray-100 text-gray-600 font-bold">SM</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-bold text-gray-900">Shuvo Mallik</p>
                        <p className="text-xs text-gray-500">Admin</p>
                    </div>
                </div>
              <DropdownMenuItem className="cursor-pointer rounded-lg">
                <Link href="/profile" className="flex items-center gap-2 w-full">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-lg">
                <Link href="/dashboard/settings" className="flex items-center gap-2 w-full">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600 cursor-pointer rounded-lg focus:text-red-700 focus:bg-red-50">
                <div className="flex items-center gap-2 w-full">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
