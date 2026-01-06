"use client"

import { StatsCard } from "@/app/components/StatsCard/StatsCard"
import { TaskCard } from "@/app/components/taskCard/TaskCard"
import { Activity, CheckCircle2, Clock, AlertTriangle } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export default function Dashboard() {
  const containerRef = useRef<HTMLDivElement>(null)

  const stats = [
    {
      label: "Total Tasks",
      count: 25,
      icon: Activity,
      color: "text-blue-500",
    },
    {
      label: "Completed",
      count: 12,
      icon: CheckCircle2,
      color: "text-emerald-500",
    },
    {
      label: "In Progress",
      count: 8,
      icon: Clock,
      color: "text-orange-500",
    },
    {
      label: "Vital Tasks",
      count: 5,
      icon: AlertTriangle,
      color: "text-[#FF6B6B]",
    },
  ]

  const recentTasks = [
    {
      title: "Design System Update",
      description: "Update the color palette and typography components to match new branding guidelines.",
      status: "In Progress",
      priority: "High",
      category: "Design",
      tags: ["UI", "System"],
      dueDate: "2024-03-20",
    },
    {
      title: "API Authentication",
      description: "Implement JWT authentication for the public API endpoints.",
      status: "Todo",
      priority: "High",
      category: "Backend",
      tags: ["Security", "API"],
      dueDate: "2024-03-22",
    },
    {
      title: "Dashboard Analytics",
      description: "Integrate charts for user activity and task completion rates.",
      status: "Completed",
      priority: "Medium",
      category: "Frontend",
      tags: ["Charts", "Data"],
      dueDate: "2024-03-15",
    },
  ]

  useGSAP(() => {
    gsap.from(".anim-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    })
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="space-y-12">
      <div className="anim-item">
        <h1 className="text-4xl font-black tracking-tight text-[#1A1A1A]">Dashboard Overview</h1>
        <p className="mt-3 text-lg text-gray-500 font-medium">Welcome back! Here's a snapshot of your current performance.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="anim-item">
            <StatsCard {...stat} />
          </div>
        ))}
      </div>

      {/* Recent Tasks */}
      <div className="space-y-8">
        <div className="anim-item flex items-center justify-between border-b border-gray-100 pb-5">
          <h2 className="text-3xl font-black tracking-tight text-[#1A1A1A]">Recent Progress</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {recentTasks.map((task, index) => (
            <div key={index} className="anim-item">
              <TaskCard task={task as any} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
