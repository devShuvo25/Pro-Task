"use client"

import { Calendar, Tag, MoreHorizontal, CheckCircle2, Clock, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

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
  const getPriorityStyles = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-50 text-red-600 border-red-100"
      case "medium":
        return "bg-orange-50 text-orange-600 border-orange-100"
      case "low":
        return "bg-blue-50 text-blue-600 border-blue-100"
      default:
        return "bg-gray-50 text-gray-600 border-gray-100"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4" />
      case "in progress":
        return <Clock className="h-4 w-4" />
      case "todo":
        return <AlertCircle className="h-4 w-4" />
      default:
        return null
    }
  }

  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "text-emerald-600 bg-emerald-50/50"
      case "in progress":
        return "text-indigo-600 bg-indigo-50/50"
      case "todo":
        return "text-slate-600 bg-slate-50/50"
      default:
        return "text-gray-600 bg-gray-50/50"
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
    <div className={cn(
      "group relative flex flex-col justify-between rounded-[28px] bg-white p-7 transition-all duration-300",
      "border border-gray-100/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1.5"
    )}>
      {/* Accent Line on Hover */}
      <div className="absolute left-0 top-10 bottom-10 w-[3px] bg-transparent group-hover:bg-[#FF6B6B] transition-colors rounded-r-full" />
      
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className={cn(
            "rounded-full px-3.5 py-1.5 text-[10px] font-black uppercase tracking-widest border",
            getPriorityStyles(task.priority)
          )}>
            {task.priority}
          </div>
          <button className="text-gray-300 hover:text-[#1A1A1A] hover:bg-gray-50 p-2 rounded-xl transition-all">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>

        <h3 className="mb-3 text-xl font-black text-[#1A1A1A] leading-tight line-clamp-1 group-hover:text-[#FF6B6B] transition-colors">
          {task.title}
        </h3>
        <p className="mb-7 text-[14px] text-gray-500 line-clamp-2 leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
          {task.description}
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {task.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1.5 rounded-xl bg-[#F8F9FD] px-3 py-1.5 text-[11px] font-bold text-gray-500 border border-gray-100/50 group-hover:border-gray-200 transition-colors"
            >
              <Tag className="h-3 w-3 text-gray-400 group-hover:text-[#FF6B6B] transition-colors" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-50 pt-5 mt-auto">
        <div className="flex items-center gap-2.5 text-sm font-bold text-gray-400 group-hover:text-[#1A1A1A] transition-colors">
          <Calendar className="h-4.5 w-4.5 text-gray-300 group-hover:text-[#4FACFE] transition-colors" />
          <span>{formatDate(task.dueDate)}</span>
        </div>
        
        <div className={cn(
          "flex items-center gap-2 rounded-xl px-3.5 py-2 text-[11px] font-black transition-all",
          getStatusStyles(task.status)
        )}>
          {getStatusIcon(task.status)}
          <span className="uppercase tracking-wider">{task.status}</span>
        </div>
      </div>
    </div>
  )
}
