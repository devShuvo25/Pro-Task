"use client"

import { 
  Palette, 
  Code, 
  Megaphone, 
  Database, 
  Layout, 
  Terminal, 
  Smartphone, 
  Shield, 
  Plus,
  ArrowRight
} from "lucide-react"
import { motion } from "framer-motion"

export default function Categories() {
  const categories = [
    { name: "Design", count: 12, completed: 8, icon: Palette, color: "text-purple-600", bg: "bg-purple-50" },
    { name: "Development", count: 24, completed: 15, icon: Code, color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Marketing", count: 8, completed: 3, icon: Megaphone, color: "text-orange-600", bg: "bg-orange-50" },
    { name: "Backend", count: 18, completed: 10, icon: Database, color: "text-emerald-600", bg: "bg-emerald-50" },
    { name: "Frontend", count: 15, completed: 12, icon: Layout, color: "text-indigo-600", bg: "bg-indigo-50" },
    { name: "DevOps", count: 6, completed: 2, icon: Terminal, color: "text-slate-600", bg: "bg-slate-50" },
    { name: "Mobile", count: 9, completed: 5, icon: Smartphone, color: "text-pink-600", bg: "bg-pink-50" },
    { name: "Security", count: 4, completed: 1, icon: Shield, color: "text-red-600", bg: "bg-red-50" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
  }

  return (
    <div className="flex-1 min-h-screen bg-white">
      <div className="max-w-[1600px] mx-auto px-6 py-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Categories</h1>
                <p className="text-gray-500 mt-1">Organize your workflow by project or team.</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                <Plus className="h-4 w-4" />
                <span>New Category</span>
            </button>
        </div>

        {/* Categories Grid */}
        <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
            {categories.map((cat, index) => {
                const Icon = cat.icon
                const progress = Math.round((cat.completed / cat.count) * 100) || 0
                
                return (
                    <motion.div 
                        variants={item} 
                        key={index}
                        className="group flex flex-col p-6 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-md transition-all cursor-pointer"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className={`p-3 rounded-lg ${cat.bg} ${cat.color}`}>
                                <Icon className="h-6 w-6" />
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowRight className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900">{cat.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{cat.count} Tasks</p>

                        <div className="mt-6 space-y-2">
                             <div className="flex justify-between text-xs font-medium text-gray-500">
                                <span>Progress</span>
                                <span>{progress}%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                                <div 
                                    className={`h-full rounded-full ${cat.color.replace('text-', 'bg-')}`} 
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                    </motion.div>
                )
            })}
        </motion.div>
      </div>
    </div>
  )
}
