"use client"

import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"

interface StatsCardProps {
  label: string
  count: string | number
  icon: LucideIcon
  color: string
}

export function StatsCard({ label, count, icon: Icon, color }: StatsCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1)] border border-gray-50">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <h3 className="mt-2 text-3xl font-bold text-gray-900">{count}</h3>
        </div>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-opacity-20 ${color.replace("text-", "bg-")}`}
        >
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
      </div>
    </div>
  )
}
