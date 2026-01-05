"use client"

import Link from "next/link"
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Tag, 
  MoreHorizontal, 
  CheckSquare, 
  Paperclip, 
  Flag,
  Share2,
  Trash2,
  Edit3
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TaskDetails({ params }: { params: { id: string } }) {
  // Demo Data from User
  const task = {
    title: "Buy groceries",
    description: "Milk, eggs, bread, and coffee beans",
    status: "todo",
    priority: "high",
    category: "Personal",
    tags: ["shopping", "home"],
    dueDate: "2026-01-06T18:00:00Z",
    isCompleted: false,
    subtasks: [],
    createdAt: "2026-01-05T08:00:00Z"
  }

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-50 text-red-600 border-red-100 ring-4 ring-red-50/50"
      case "medium":
        return "bg-yellow-50 text-yellow-600 border-yellow-100 ring-4 ring-yellow-50/50"
      case "low":
        return "bg-blue-50 text-blue-600 border-blue-100 ring-4 ring-blue-50/50"
      default:
        return "bg-gray-50 text-gray-600 border-gray-100"
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })
  }

  return (
    <div className="flex flex-col gap-8 w-full h-full">
      {/* Header Navigation */}
      <div className="flex items-center justify-between bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 text-gray-500 transition-all hover:bg-[#FF5F5F] hover:text-white hover:shadow-lg hover:scale-105"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-1">
              <span className="hover:text-[#FF5F5F] cursor-pointer transition-colors">Dashboard</span>
              <span>/</span>
              <span className="text-gray-900">Task Details</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Task Overview</h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
           <button className="flex items-center gap-2.5 rounded-xl bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
            <Share2 className="h-4 w-4" />
            Share
          </button>
          <button className="flex items-center gap-2.5 rounded-xl bg-[#FF5F5F] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-200 hover:bg-[#FF5F5F]/90 hover:shadow-red-300 transition-all hover:translate-y-[-2px]">
            <Edit3 className="h-4 w-4" />
            Edit Task
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="xl:col-span-2 space-y-8">
          {/* Title Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-[0_2px_40px_-10px_rgba(0,0,0,0.06)] border border-gray-50 group">
             {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 p-16 bg-gradient-to-br from-orange-50 to-red-50 rounded-bl-[10rem] opacity-50 transition-transform group-hover:scale-110 duration-700"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className={`rounded-full px-5 py-2 text-sm font-bold tracking-wide uppercase border ${getPriorityColor(task.priority)}`}>
                  {task.priority} Priority
                </span>
                <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-900">
                  <MoreHorizontal className="h-6 w-6" />
                </button>
              </div>
              
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">{task.title}</h2>
              <p className="text-gray-600 leading-relaxed text-xl font-light max-w-2xl">
                {task.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-3 pt-8 border-t border-gray-100">
                {task.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-600 border border-gray-100 transition-colors hover:border-gray-300 hover:bg-white">
                    <Tag className="h-4 w-4 text-[#FF5F5F]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Subtasks */}
          <div className="rounded-[2.5rem] bg-white p-10 shadow-[0_2px_40px_-10px_rgba(0,0,0,0.06)] border border-gray-50">
            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-red-50 flex items-center justify-center text-[#FF5F5F]">
                 <CheckSquare className="h-5 w-5" />
              </div>
              Checklist
              <span className="ml-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
                {task.subtasks.length > 0 ? `${task.subtasks.filter((t: any) => t.completed).length}/${task.subtasks.length}` : "0"}
              </span>
            </h3>
            
            <div className="space-y-4">
              {task.subtasks.length > 0 ? (
                task.subtasks.map((subtask: any) => (
                <div key={subtask.id} className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-100">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-lg border-2 transition-all ${subtask.completed ? "bg-[#FF5F5F] border-[#FF5F5F]" : "border-gray-300 group-hover:border-[#FF5F5F]"}`}>
                    {subtask.completed && <CheckSquare className="h-4 w-4 text-white" />}
                  </div>
                  <span className={`flex-1 text-lg font-medium transition-colors ${subtask.completed ? "text-gray-400 line-through" : "text-gray-700 group-hover:text-gray-900"}`}>
                    {subtask.title}
                  </span>
                </div>
              ))
              ) : (
                <div className="flex flex-col items-center justify-center py-12 rounded-3xl border-2 border-dashed border-gray-100 bg-gray-50/50">
                   <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 text-gray-400">
                     <CheckSquare className="h-8 w-8" />
                   </div>
                  <p className="text-gray-500 font-medium">No subtasks created yet</p>
                  <button className="mt-4 text-[#FF5F5F] font-semibold hover:underline">+ Add Subtask</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          {/* Task Info */}
          <div className="rounded-[2.5rem] bg-white p-8 shadow-[0_2px_40px_-10px_rgba(0,0,0,0.06)] border border-gray-50">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-8 flex items-center gap-2">
                <span className="h-1.5 w-6 rounded-full bg-[#FF5F5F]"></span>
                Time & Status
            </h3>
            
            <div className="space-y-8">
              <div className="group">
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-3 group-hover:text-[#FF5F5F] transition-colors">Due Date</span>
                 <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 group-hover:border-orange-100 group-hover:bg-orange-50/30 transition-colors">
                   <div className="h-12 w-12 rounded-xl bg-orange-100/50 flex items-center justify-center text-orange-500 shadow-sm">
                     <Calendar className="h-6 w-6" />
                   </div>
                   <div>
                       <p className="font-bold text-gray-900 text-lg">{formatDate(task.dueDate)}</p>
                       <p className="text-xs text-orange-600 font-medium mt-0.5">Due soon</p>
                   </div>
                 </div>
              </div>

               <div className="group">
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-3 group-hover:text-[#FF5F5F] transition-colors">Category</span>
                 <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 group-hover:border-purple-100 group-hover:bg-purple-50/30 transition-colors">
                   <div className="h-12 w-12 rounded-xl bg-purple-100/50 flex items-center justify-center text-purple-500 shadow-sm">
                     <Flag className="h-6 w-6" />
                   </div>
                    <div>
                       <p className="font-bold text-gray-900 text-lg">{task.category}</p>
                       <p className="text-xs text-purple-600 font-medium mt-0.5">Project Tag</p>
                   </div>
                 </div>
              </div>

              <div className="group">
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-3 group-hover:text-[#FF5F5F] transition-colors">Created At</span>
                 <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                   <div className="h-12 w-12 rounded-xl bg-gray-200/50 flex items-center justify-center text-gray-500 shadow-sm">
                     <Clock className="h-6 w-6" />
                   </div>
                   <p className="font-bold text-gray-700">{formatDate(task.createdAt)}</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Attachments Section Removed or Placeholder */}
           <div className="rounded-[2.5rem] bg-white p-8 shadow-[0_2px_40px_-10px_rgba(0,0,0,0.06)] border border-gray-50 opacity-40 hover:opacity-100 transition-opacity pointer-events-none grayscale hover:grayscale-0">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-8 flex items-center gap-2">
                <span className="h-1.5 w-6 rounded-full bg-blue-500"></span>
                Attachments
            </h3>
            <div className="flex flex-col items-center justify-center py-8 rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200">
                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3">
                     <Paperclip className="h-5 w-5 text-gray-400" />
                </div>
              <p className="text-gray-500 font-medium text-sm">No files attached</p>
              <p className="text-xs text-gray-400 mt-1">Upload files here</p>
            </div>
          </div>

           {/* Delete Action */}
           <button className="w-full flex items-center justify-center gap-3 rounded-2xl bg-red-50 py-5 text-red-600 font-bold hover:bg-red-100 hover:shadow-lg hover:shadow-red-50 transition-all">
             <Trash2 className="h-5 w-5" />
             Delete Task
           </button>
        </div>
      </div>
    </div>
  )
}
