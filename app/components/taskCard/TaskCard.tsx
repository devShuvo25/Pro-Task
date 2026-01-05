"use client"

import { Calendar, Tag, MoreHorizontal } from "lucide-react"
import { motion } from "framer-motion"

interface TaskProps {
  title: string
  description: string
  status: string
  priority: string
  category: string
  tags: string[]
  dueDate: string
}

export function TaskCard({ task }: { task: TaskProps }) {
  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-50 text-red-600 ring-red-500/10"
      case "medium":
        return "bg-orange-50 text-orange-600 ring-orange-500/10"
      case "low":
        return "bg-blue-50 text-blue-600 ring-blue-500/10"
      default:
        return "bg-gray-50 text-gray-600 ring-gray-500/10"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-emerald-50 text-emerald-600 ring-emerald-500/20"
      case "in progress":
        return "bg-purple-50 text-purple-600 ring-purple-500/20"
      case "todo":
        return "bg-gray-50 text-gray-600 ring-gray-500/20"
      default:
        return "bg-gray-50 text-gray-600 ring-gray-500/20"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
    })
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative flex flex-col justify-between rounded-3xl bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border border-gray-100/50"
    >
      <div className="absolute left-0 top-6 bottom-6 w-1 bg-transparent transition-colors group-hover:bg-[#FF5F5F] rounded-r-full"></div>
      
      <div>
        <div className="mb-5 flex items-center justify-between">
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase ring-1 ${getPriorityColor(
              task.priority
            )}`}
          >
            {task.priority}
          </span>
          <button className="text-gray-300 opacity-0 transition-all hover:text-gray-600 hover:bg-gray-50 p-1.5 rounded-lg group-hover:opacity-100">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-[#FF5F5F] transition-colors">
          {task.title}
        </h3>
        <p className="mb-6 text-sm text-gray-500 line-clamp-2 leading-relaxed font-medium">{task.description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {task.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 rounded-lg bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-600 border border-gray-100"
            >
              <Tag className="h-3 w-3 text-gray-400" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(task.dueDate)}</span>
        </div>
        
        <span
          className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ring-1 ${getStatusColor(
            task.status
          )}`}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-current" />
          {task.status}
        </span>
      </div>
    </motion.div>
  )
}
