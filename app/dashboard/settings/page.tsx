"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Bell, Lock, Globe, Save, Camera } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile")

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Lock },
    { id: "appearance", label: "Appearance", icon: Globe },
  ]

  return (
    <div className="max-w-[1400px] mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#1A1A1A]">Settings</h1>
        <p className="text-lg text-gray-500 font-medium">Manage your personal preferences and account security.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-72 shrink-0">
          <nav className="flex lg:flex-col gap-2 p-2 bg-white rounded-[24px] border border-gray-100/50 shadow-sm overflow-x-auto lg:overflow-visible no-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex-1 lg:flex-none flex items-center justify-center lg:justify-start gap-3 px-6 py-4 text-sm font-bold rounded-[18px] transition-all duration-300 min-w-fit",
                    isActive
                    ? "bg-[#1A1A1A] text-white shadow-lg shadow-gray-200" 
                    : "text-gray-400 hover:text-[#1A1A1A] hover:bg-gray-50"
                  )}
                >
                  <Icon className={cn("h-5 w-5", isActive ? "text-[#FF6B6B]" : "text-gray-300")} />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </aside>

        {/* Content Area */}
        <div className="flex-1 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[32px] border border-gray-100/50 p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.02)]"
            >
              <div className="max-w-2xl">
                {activeTab === "profile" && (
                  <div className="space-y-10">
                    <div className="flex items-center gap-8">
                      <div className="relative group cursor-pointer">
                        <div className="h-28 w-28 rounded-[36px] bg-[#F8F9FD] flex items-center justify-center text-3xl font-black text-[#FF6B6B] border-4 border-white shadow-xl">
                          SM
                        </div>
                        <div className="absolute -right-2 -bottom-2 bg-[#1A1A1A] text-white p-3 rounded-2xl shadow-lg group-hover:bg-[#FF6B6B] transition-colors">
                          <Camera className="w-4 h-4" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-[#1A1A1A]">Shuvo Mallik</h3>
                        <p className="text-gray-500 font-medium">shuvo@example.com</p>
                      </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="space-y-3">
                        <label className="text-sm font-black text-[#1A1A1A] uppercase tracking-wider">First Name</label>
                        <input type="text" defaultValue="Shuvo" className="w-full h-14 px-6 rounded-2xl border border-gray-100 bg-[#F8F9FD] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/5 focus:border-[#FF6B6B]/20 transition-all font-bold text-sm" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-black text-[#1A1A1A] uppercase tracking-wider">Last Name</label>
                        <input type="text" defaultValue="Mallik" className="w-full h-14 px-6 rounded-2xl border border-gray-100 bg-[#F8F9FD] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/5 focus:border-[#FF6B6B]/20 transition-all font-bold text-sm" />
                      </div>
                      <div className="md:col-span-2 space-y-3">
                        <label className="text-sm font-black text-[#1A1A1A] uppercase tracking-wider">Biography</label>
                        <textarea rows={4} className="w-full p-6 rounded-2xl border border-gray-100 bg-[#F8F9FD] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/5 focus:border-[#FF6B6B]/20 transition-all font-bold text-sm" placeholder="Tell us about yourself..."></textarea>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "notifications" && (
                  <div className="space-y-8">
                    <div className="space-y-6">
                      {["Email Alerts", "Push Notifications", "Task Reminders", "Daily Digest"].map((item) => (
                        <div key={item} className="flex items-center justify-between p-6 rounded-3xl bg-[#F8F9FD] hover:bg-white border border-transparent hover:border-gray-100 transition-all group">
                          <span className="font-bold text-[#1A1A1A]">{item}</span>
                          <button className="w-14 h-8 bg-gray-200 rounded-full relative p-1 transition-colors group-hover:bg-[#FF6B6B]/20">
                            <div className="h-6 w-6 bg-white rounded-full shadow-sm transition-transform" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "security" && (
                  <div className="space-y-8">
                    <div className="grid gap-8">
                      <div className="space-y-3">
                        <label className="text-sm font-black text-[#1A1A1A] uppercase tracking-wider">Current Password</label>
                        <input type="password" placeholder="••••••••" className="w-full h-14 px-6 rounded-2xl border border-gray-100 bg-[#F8F9FD] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/5 focus:border-[#FF6B6B]/20 transition-all font-bold text-sm" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-black text-[#1A1A1A] uppercase tracking-wider">New Password</label>
                        <input type="password" placeholder="••••••••" className="w-full h-14 px-6 rounded-2xl border border-gray-100 bg-[#F8F9FD] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/5 focus:border-[#FF6B6B]/20 transition-all font-bold text-sm" />
                      </div>
                    </div>
                    <button className="text-sm font-black text-[#FF6B6B] hover:text-[#ff5252] transition-colors uppercase tracking-widest px-1">Reset all login sessions</button>
                  </div>
                )}

                {activeTab === "appearance" && (
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {["Light", "Dark", "Custom"].map((theme) => (
                        <div key={theme} className="group cursor-pointer">
                          <div className="h-40 rounded-[24px] bg-[#F8F9FD] border-2 border-transparent group-hover:border-[#FF6B6B] transition-all relative overflow-hidden shadow-sm">
                             <div className="absolute inset-x-0 top-0 h-10 bg-white border-b border-gray-100" />
                             <div className="absolute top-14 left-4 right-8 h-4 bg-gray-200/50 rounded-full" />
                             {theme === "Dark" && <div className="absolute inset-0 bg-[#0F1117] opacity-90" />}
                          </div>
                          <p className="mt-4 text-center font-black text-sm uppercase tracking-widest text-gray-400 group-hover:text-[#1A1A1A] transition-colors">{theme}</p>
                        </div>
                      ))}
                   </div>
                )}

                <div className="mt-16 pt-8 border-t border-gray-50 flex justify-end gap-4">
                  <button className="px-8 py-4 rounded-2xl font-bold text-gray-400 hover:text-[#1A1A1A] transition-colors">Discard</button>
                  <button className="flex items-center gap-3 bg-[#FF6B6B] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#ff5252] transition-all shadow-xl shadow-red-200/50 active:scale-95">
                    <Save className="h-5 w-5" />
                    Save Changes
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
