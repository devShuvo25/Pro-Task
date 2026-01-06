"use client"

import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  label: string
  count: string | number
  icon: LucideIcon
  color: string
  className?: string
}

export function StatsCard({ label, count, icon: Icon, color, className }: StatsCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-[24px] bg-white p-6 transition-all duration-300",
      "border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
      "hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5",
      className
    )}>
      {/* Subtle Background Accent */}
      <div className={cn(
        "absolute -right-4 -bottom-4 h-24 w-24 rounded-full opacity-[0.03] transition-transform duration-500 group-hover:scale-150",
        color.replace("text-", "bg-")
      )} />

      <div className="flex items-center gap-5 relative z-10">
        <div
          className={cn(
            "flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] transition-all duration-300",
            "bg-opacity-10 group-hover:bg-opacity-20",
            color.replace("text-", "bg-")
          )}
        >
          <Icon className={cn("h-7 w-7 transition-transform duration-300 group-hover:scale-110", color)} />
        </div>
        
        <div>
          <p className="text-sm font-semibold text-gray-400 group-hover:text-gray-500 transition-colors uppercase tracking-wider">{label}</p>
          <h3 className="text-3xl font-black text-[#1A1A1A] tracking-tight">{count}</h3>
        </div>
      </div>
    </div>
  )
}
