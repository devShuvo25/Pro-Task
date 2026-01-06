"use client"

import { TaskCard } from "@/app/components/taskCard/TaskCard"
import { Plus, Filter, SortAsc, Search, ListFilter, AlertTriangle } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

export default function VitalTasks() {
  const [searchQuery, setSearchQuery] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)

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
      title: "Database Optimization",
      description: "Optimize slow queries on the users table and add necessary indexes.",
      status: "In Progress",
      priority: "High",
      category: "Database",
      tags: ["SQL", "Performance"],
      dueDate: "2024-03-18",
    },
    {
      title: "Security Patch Deployment",
      description: "Critical security patch for the payment gateway integration.",
      status: "Todo",
      priority: "High",
      category: "DevOps",
      tags: ["Security", "Critical"],
      dueDate: "2024-03-19",
    },
  ]

  const filteredTasks = tasks.filter(task => 
    (task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  useGSAP(() => {
    gsap.from(".anim-stagger", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: "power3.out"
    })
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="max-w-[1600px] mx-auto space-y-12">
      {/* Header Section */}
      <div className="anim-stagger flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3 text-[#FF6B6B]">
            <AlertTriangle className="h-6 w-6 stroke-[2.5px]" />
            <span className="text-xs font-black tracking-[0.2em] uppercase">Urgent & Critical</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#1A1A1A]">
            Vital <span className="text-[#FF6B6B]">Tasks</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 font-medium">Focus on high-priority items that require immediate attention.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-[18px] font-bold hover:bg-[#FF6B6B] transition-all shadow-xl shadow-gray-200 hover:shadow-red-200/50 active:scale-95 group">
            <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
            Add Critical Task
          </button>
        </div>
      </div>

      {/* Stats Ribbon */}
      <div className="anim-stagger grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "High Priority", value: tasks.length, active: true },
          { label: "Due Today", value: "2", color: "text-red-500" },
          { label: "Overdue", value: "0", color: "text-gray-400" },
          { label: "Needs Review", value: "1", color: "text-orange-500" },
        ].map((stat) => (
          <div key={stat.label} className={cn(
            "p-6 rounded-[24px] border transition-all duration-300",
            stat.active ? "bg-white border-[#FF6B6B]/20 shadow-md shadow-red-50/50" : "bg-white border-gray-100 shadow-sm"
          )}>
            <p className={cn(
              "text-[10px] font-black uppercase tracking-widest",
              stat.active ? "text-[#FF6B6B]" : "text-gray-400"
            )}>{stat.label}</p>
            <p className={cn(
              "text-3xl font-black mt-2 tracking-tight",
              stat.active ? "text-[#1A1A1A]" : stat.color || "text-[#1A1A1A]"
            )}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="anim-stagger flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-gray-100 pb-8">
        <div className="flex items-center bg-gray-100/50 p-1.5 rounded-2xl">
          {["All Vital", "Due Soon", "Overdue"].map((tab, i) => (
            <button 
              key={tab}
              className={cn(
                "px-6 py-2.5 rounded-xl text-sm font-bold transition-all",
                i === 0 
                ? 'bg-white text-[#1A1A1A] shadow-md' 
                : 'text-gray-400 hover:text-[#1A1A1A]'
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-400" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search critical tasks..." 
              className="h-14 w-full rounded-2xl border border-gray-100 bg-white pl-12 pr-6 text-sm font-semibold text-[#1A1A1A] placeholder:text-gray-400 focus:border-[#FF6B6B]/20 focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/5 transition-all shadow-sm"
            />
          </div>
          <button className="h-14 w-14 flex items-center justify-center rounded-2xl border border-gray-100 bg-white text-gray-400 hover:text-[#1A1A1A] hover:bg-gray-50 transition-all shadow-sm">
            <SortAsc className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Task Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <div key={index} className="anim-stagger">
              <TaskCard task={task as any} />
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-gray-100 rounded-[32px] bg-white/50">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-8 w-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-black text-[#1A1A1A]">No critical tasks found</h3>
            <p className="mt-2 text-gray-500 font-medium">You're all caught up on urgent items.</p>
          </div>
        )}
      </div>
    </div>
  )
}
