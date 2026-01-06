"use client";

import { CheckCircle2, Clock, ListTodo, Activity, Plus } from "lucide-react";
import { StatsCard } from "./components/StatsCard/StatsCard";
import { TaskCard } from "./components/taskCard/TaskCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function DashBoard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const tasksRef = useRef<HTMLDivElement>(null);

  const demoTasks = [
    {
      title: "Buy groceries",
      description: "Milk, eggs, bread, and coffee beans",
      status: "todo",
      priority: "high",
      category: "Personal",
      tags: ["shopping", "home"],
      dueDate: "2026-01-06T18:00:00Z",
    },
    {
      title: "Design System Update",
      description: "Update the color palette and typography components to match new branding guidelines.",
      status: "in progress",
      priority: "high",
      category: "Work",
      tags: ["design", "ui/ux"],
      dueDate: "2026-01-10T09:00:00Z",
    },
    {
      title: "Weekly Team Meeting",
      description: "Discuss project updates, blockers, and roadmap for Q1.",
      status: "completed",
      priority: "medium",
      category: "Work",
      tags: ["meeting", "team"],
      dueDate: "2026-01-05T14:00:00Z",
    },
    {
      title: "Gym Workout",
      description: "Leg day routine: Squats, lunges, and calf raises.",
      status: "todo",
      priority: "medium",
      category: "Health",
      tags: ["workout", "health"],
      dueDate: "2026-01-07T07:00:00Z",
    },
    {
      title: "Pay Utility Bills",
      description: "Electricity and internet bills for January.",
      status: "todo",
      priority: "high",
      category: "Personal",
      tags: ["finance", "bills"],
      dueDate: "2026-01-08T12:00:00Z",
    },
    {
      title: "Read Clean Code",
      description: "Read first 3 chapters and take notes on key principles.",
      status: "in progress",
      priority: "low",
      category: "Learning",
      tags: ["reading", "education"],
      dueDate: "2026-01-15T20:00:00Z",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(headerRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
    })
    .from(".stats-card", {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    }, "-=0.4")
    .from(".section-header", {
      x: -20,
      opacity: 0,
      duration: 0.5,
    }, "-=0.3")
    .from(".task-card", {
      y: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "back.out(1.2)",
    }, "-=0.2");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="max-w-[1400px] mx-auto space-y-12">
      {/* Header Section */}
      <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight">
            Good Morning, <span className="text-[#FF6B6B]">Sundar!</span> 👋
          </h1>
          <p className="mt-3 text-lg text-gray-500 font-medium">
            Ready to tackle your <span className="text-[#1A1A1A] font-bold">24 active tasks</span>? Let's go!
          </p>
        </div>
        
        <button className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#FF6B6B] text-white px-8 py-4 rounded-[18px] font-bold transition-all duration-300 shadow-xl shadow-gray-200 hover:shadow-[#FF6B6B]/20 active:scale-95 group">
          <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
          Create New Task
        </button>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="stats-card">
          <StatsCard
            label="Total Tasks"
            count={24}
            icon={ListTodo}
            color="text-blue-500"
          />
        </div>
        <div className="stats-card">
          <StatsCard
            label="Completed"
            count={12}
            icon={CheckCircle2}
            color="text-emerald-500"
          />
        </div>
        <div className="stats-card">
          <StatsCard
            label="In Progress"
            count={8}
            icon={Activity}
            color="text-purple-500"
          />
        </div>
        <div className="stats-card">
          <StatsCard
            label="Pending"
            count={4}
            icon={Clock}
            color="text-orange-500"
          />
        </div>
      </div>

      {/* Tasks Section */}
      <div className="space-y-8 pb-12">
        <div className="section-header flex items-center justify-between border-b border-gray-100 pb-5">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black text-[#1A1A1A] tracking-tight">Recent Tasks</h2>
            <span className="bg-[#F5F6FA] text-gray-400 text-sm px-3 py-1 rounded-full font-bold">06</span>
          </div>
          <button className="text-sm font-black text-[#FF6B6B] hover:text-[#ff5252] transition-colors border-b-2 border-transparent hover:border-[#FF6B6B] pb-0.5">
            VIEW ALL PROJECTS
          </button>
        </div>

        <div ref={tasksRef} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {demoTasks.map((task, index) => (
            <div key={index} className="task-card">
              <TaskCard task={task} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
