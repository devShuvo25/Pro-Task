"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Bell, Lock, Globe, Save } from "lucide-react"

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile")

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Lock },
    { id: "appearance", label: "Appearance", icon: Globe },
  ]

  return (
    <div className="flex-1 min-h-screen bg-white">
      <div className="max-w-[1600px] mx-auto px-6 py-8">
        
        <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Settings</h1>
            <p className="text-gray-500 mt-1">Manage your account settings and preferences.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:w-64 flex-shrink-0">
                <nav className="space-y-1">
                    {tabs.map((tab) => {
                        const Icon = tab.icon
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                                    activeTab === tab.id
                                    ? "bg-gray-100 text-gray-900" 
                                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                            >
                                <Icon className="h-5 w-5" />
                                {tab.label}
                            </button>
                        )
                    })}
                </nav>
            </aside>

            {/* Content Area */}
            <div className="flex-1 max-w-3xl">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
                >
                    {activeTab === "profile" && (
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Public Profile</h3>
                                <p className="text-sm text-gray-500">This information will be displayed publicly.</p>
                            </div>
                            
                            <div className="flex items-center gap-6">
                                <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-bold text-gray-400">
                                    SM
                                </div>
                                <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                    Change Avatar
                                </button>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">First Name</label>
                                    <input type="text" defaultValue="Shuvo" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all text-sm" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                    <input type="text" defaultValue="Mallik" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all text-sm" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                    <input type="email" defaultValue="shuvo@example.com" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all text-sm" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Bio</label>
                                    <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all text-sm" placeholder="Tell us a little about yourself..."></textarea>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "notifications" && (
                        <div className="space-y-6">
                             <div>
                                <h3 className="text-lg font-bold text-gray-900">Notifications</h3>
                                <p className="text-sm text-gray-500">Configure how you receive alerts.</p>
                            </div>
                            <div className="space-y-4">
                                {["Email Notifications", "Push Notifications", "Weekly Digest", "Task Reminders"].map((item) => (
                                    <div key={item} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                                        <span className="text-sm font-medium text-gray-700">{item}</span>
                                        <div className="w-11 h-6 bg-gray-200 rounded-full relative cursor-pointer transition-colors hover:bg-gray-300">
                                            <div className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full shadow-sm transition-transform"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "security" && (
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Security</h3>
                                <p className="text-sm text-gray-500">Manage your password and security preferences.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Current Password</label>
                                    <input type="password" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all text-sm" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">New Password</label>
                                    <input type="password" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all text-sm" />
                                </div>
                            </div>
                             <button className="text-sm font-medium text-red-600 hover:text-red-700">Log out of all other sessions</button>
                        </div>
                    )}

                    {activeTab === "appearance" && (
                        <div className="space-y-6">
                             <div>
                                <h3 className="text-lg font-bold text-gray-900">Appearance</h3>
                                <p className="text-sm text-gray-500">Customize the look and feel of the dashboard.</p>
                            </div>
                             <div className="grid grid-cols-3 gap-4">
                                {["Light", "Dark", "System"].map((theme) => (
                                    <div key={theme} className="border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-gray-900 transition-all text-center">
                                        <div className="h-20 bg-gray-100 rounded-lg mb-3"></div>
                                        <span className="text-sm font-medium text-gray-900">{theme}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                        <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all">
                            <Save className="h-4 w-4" />
                            Save Changes
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </div>
  )
}
