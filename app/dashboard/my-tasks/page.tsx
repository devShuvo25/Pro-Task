"use client"

import { TaskCard } from "@/app/components/taskCard/TaskCard"
import { Plus, Filter, SortAsc, Search, ListFilter } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

export default function MyTasks() {
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
  ]

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
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
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#1A1A1A]">
            My <span className="text-[#FF6B6B]">Tasks</span>
          </h1>
          <p className="mt-3 text-lg text-gray-500 font-medium">You have {tasks.length} tasks synced across all devices.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-white border border-gray-100 px-6 py-4 rounded-[18px] font-bold text-[#1A1A1A] hover:bg-gray-50 transition-all shadow-sm">
            <ListFilter className="w-5 h-5" />
            View
          </button>
          <button className="flex items-center gap-2 bg-[#FF6B6B] text-white px-8 py-4 rounded-[18px] font-bold hover:bg-[#ff5252] transition-all shadow-xl shadow-red-200/50 active:scale-95 group">
            <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
            Create Task
          </button>
        </div>
      </div>

      {/* Stats Ribbon */}
      <div className="anim-stagger grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Total Tasks", value: tasks.length, color: "text-blue-500" },
          { label: "Pending", value: tasks.filter(t => t.status === 'Todo').length, color: "text-orange-500" },
          { label: "In Progress", value: tasks.filter(t => t.status === 'In Progress').length, color: "text-indigo-500" },
          { label: "Completed", value: tasks.filter(t => t.status === 'Completed').length, color: "text-emerald-500" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-[24px] border border-gray-100/50 shadow-sm hover:shadow-md transition-all">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
            <p className={cn("text-3xl font-black mt-2 tracking-tight", stat.color)}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="anim-stagger flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-gray-100 pb-8">
        <div className="flex items-center bg-gray-100/50 p-1.5 rounded-2xl">
          {["All Tasks", "Pending", "In Progress", "Completed"].map((tab, i) => (
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
              placeholder="Filter by title, tags..." 
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
            <h3 className="text-xl font-black text-[#1A1A1A]">No tasks matched your search</h3>
            <p className="mt-2 text-gray-500 font-medium">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  )
}

