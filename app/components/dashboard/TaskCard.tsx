"use client"

import { Calendar, Tag, MoreHorizontal } from "lucide-react"

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
        return "bg-red-50 text-red-600 border-red-100"
      case "medium":
        return "bg-yellow-50 text-yellow-600 border-yellow-100"
      case "low":
        return "bg-blue-50 text-blue-600 border-blue-100"
      default:
        return "bg-gray-50 text-gray-600 border-gray-100"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-600"
      case "in progress":
        return "bg-purple-100 text-purple-600"
      case "todo":
        return "bg-orange-100 text-orange-600"
      default:
        return "bg-gray-100 text-gray-600"
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
    <div className="group relative rounded-2xl bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] transition-all hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 border border-gray-50 overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-1.5 bg-transparent transition-colors group-hover:bg-[#FF5F5F]"></div>
      <div className="mb-5 flex items-start justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase ${getPriorityColor(
            task.priority
          )}`}
        >
          {task.priority}
        </span>
        <button className="text-gray-400 opacity-0 transition-opacity hover:text-gray-600 group-hover:opacity-100">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      <h3 className="mb-2 text-lg font-bold text-gray-900 line-clamp-1">
        {task.title}
      </h3>
      <p className="mb-4 text-sm text-gray-500 line-clamp-2">{task.description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {task.tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600"
          >
            <Tag className="h-3 w-3" />
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(task.dueDate)}</span>
        </div>
        
        <span
          className={`flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
            task.status
          )}`}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-current" />
          {task.status}
        </span>
      </div>
    </div>
  )
}
