"use client"

import { StatsCard } from "@/app/components/StatsCard/StatsCard"
import { TaskCard } from "@/app/components/taskCard/TaskCard"
import { Activity, CheckCircle2, Clock, AlertTriangle } from "lucide-react"

export default function Dashboard() {
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
      color: "text-[#FF5F5F]",
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

  return (
    <div className="space-y-8">
        <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            <p className="mt-2 text-lg text-gray-500">Welcome back, here's an overview of your projects.</p>
        </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Recent Tasks */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Recent Tasks</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {recentTasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}
