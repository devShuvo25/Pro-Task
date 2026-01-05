"use client"

import { TaskCard } from "@/app/components/taskCard/TaskCard"
import { Plus, Filter, SortAsc, Search, ListFilter } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function MyTasks() {
  const [searchQuery, setSearchQuery] = useState("")

  const tasks = [
    {
      title: "Design System Update",
      description: "Update the color palette and typography components to match new branding guidelines.",
      status: "In Progress",
      priority: "High",
      category: "Design",
      tags: ["UI", "System", "Figma"],
      dueDate: "2024-03-20",
    },
    {
      title: "API Authentication",
      description: "Implement JWT authentication for the public API endpoints with refresh token rotation.",
      status: "Todo",
      priority: "High",
      category: "Backend",
      tags: ["Security", "API", "Auth"],
      dueDate: "2024-03-22",
    },
    {
      title: "Dashboard Analytics",
      description: "Integrate charts for user activity and task completion rates using Recharts.",
      status: "Completed",
      priority: "Medium",
      category: "Frontend",
      tags: ["Charts", "Data", "React"],
      dueDate: "2024-03-15",
    },
    {
      title: "Mobile Responsive Layout",
      description: "Fix layout issues on mobile devices for the settings and profile pages.",
      status: "Todo",
      priority: "Medium",
      category: "Frontend",
      tags: ["CSS", "Responsive", "Mobile"],
      dueDate: "2024-03-25",
    },
    {
      title: "Database Optimization",
      description: "Optimize slow queries on the users table and add necessary indexes.",
      status: "In Progress",
      priority: "High",
      category: "Database",
      tags: ["SQL", "Performance"],
      dueDate: "2024-03-18",
    },
    {
      title: "User Documentation",
      description: "Write comprehensive documentation for the new export feature.",
      status: "Todo",
      priority: "Low",
      category: "Documentation",
      tags: ["Docs", "Guide"],
      dueDate: "2024-03-30",
    },
    {
      title: "Email Notifications",
      description: "Set up email notifications for task assignments and due date reminders.",
      status: "Completed",
      priority: "Medium",
      category: "Backend",
      tags: ["Email", "Notifications"],
      dueDate: "2024-03-10",
    },
    {
      title: "Accessibility Audit",
      description: "Run an accessibility audit using Lighthouse and fix reported contrast issues.",
      status: "Todo",
      priority: "Low",
      category: "Design",
      tags: ["A11y", "Audit"],
      dueDate: "2024-04-05",
    },
  ]

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

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
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="flex-1 min-h-screen bg-white">
      <div className="max-w-[1600px] mx-auto px-6 py-8 space-y-8">
        
        {/* Header & Stats Ribbon */}
        <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">My Tasks</h1>
                    <p className="text-gray-500 mt-1">Manage, organize, and track your project tasks.</p>
                </div>
                <div className="flex items-center gap-3">
                     <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900/10">
                        <ListFilter className="h-4 w-4" />
                        <span>View</span>
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                        <Plus className="h-4 w-4" />
                        <span>Create Task</span>
                    </button>
                </div>
            </div>

            {/* Simple Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
                {[
                    { label: "Total", value: tasks.length },
                    { label: "Pending", value: tasks.filter(t => t.status === 'Todo').length },
                    { label: "In Progress", value: tasks.filter(t => t.status === 'In Progress').length },
                    { label: "Completed", value: tasks.filter(t => t.status === 'Completed').length },
                ].map((stat) => (
                    <div key={stat.label} className="bg-white px-6 py-4">
                        <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                        <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-100 pb-6">
            <div className="flex items-center bg-gray-100/50 rounded-lg p-1">
                {["All", "Pending", "In Progress", "Completed"].map((tab, i) => (
                    <button 
                        key={tab}
                        className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                            i === 0 
                            ? 'bg-white text-gray-900 shadow-sm' 
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search tasks..." 
                        className="h-10 w-full rounded-lg border border-gray-200 bg-white pl-9 pr-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 transition-all"
                    />
                </div>
                <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 text-gray-700 hover:bg-gray-50 transition-colors">
                    <SortAsc className="h-4 w-4" />
                </button>
            </div>
        </div>

        {/* Task Grid */}
        <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
            {filteredTasks.length > 0 ? (
                filteredTasks.map((task, index) => (
                <motion.div variants={item} key={index}>
                    <TaskCard task={task} />
                </motion.div>
                ))
            ) : (
                <div className="col-span-full py-16 text-center border-2 border-dashed border-gray-100 rounded-xl bg-gray-50/50">
                    <Search className="mx-auto h-8 w-8 text-gray-400" />
                    <h3 className="mt-4 text-sm font-semibold text-gray-900">No tasks found</h3>
                    <p className="mt-1 text-sm text-gray-500">No tasks match your search query.</p>
                </div>
            )}
        </motion.div>
      </div>
    </div>
  )
}

