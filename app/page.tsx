"use client";

import { CheckCircle2, Clock, ListTodo, Activity } from "lucide-react";
import { StatsCard } from "./components/StatsCard/StatsCard";
import { TaskCard } from "./components/taskCard/TaskCard";

export default function DashBoard() {
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
      title: "Design Homepage",
      description:
        "Create high-fidelity mockups for the new landing page including hero section and features.",
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
      title: "Read Book",
      description: "Read first 3 chapters of 'Clean Code'.",
      status: "in progress",
      priority: "low",
      category: "Learning",
      tags: ["reading", "education"],
      dueDate: "2026-01-15T20:00:00Z",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Good Morning, Sundar! 👋
        </h1>
        <p className="text-gray-500">
          Here's what's happening with your projects today
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          label="Total Tasks"
          count={24}
          icon={ListTodo}
          color="text-blue-500"
        />
        <StatsCard
          label="Completed"
          count={12}
          icon={CheckCircle2}
          color="text-green-500"
        />
        <StatsCard
          label="In Progress"
          count={8}
          icon={Activity}
          color="text-purple-500"
        />
        <StatsCard
          label="Pending"
          count={4}
          icon={Clock}
          color="text-orange-500"
        />
      </div>

      {/* Recent Tasks */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Recent Tasks</h2>
          <button className="text-sm font-medium text-[#FF5F5F] hover:underline">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {demoTasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}
