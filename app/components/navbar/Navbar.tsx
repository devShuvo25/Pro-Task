"use client";

import { Search, Bell, Calendar } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const pathname = usePathname();
  const [currentDate, setCurrentDate] = useState({ day: "", fullDate: "" });
  const navRef = useRef(null);

  useEffect(() => {
    const date = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = days[date.getDay()];
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const fullDateStr = `${day}/${month}/${year}`;

    setCurrentDate({ day: dayName, fullDate: fullDateStr });
  }, []);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }, { scope: navRef });

  const navLinks = [
    { label: "Dashboard", href: "/" },
    { label: "Vital Tasks", href: "/dashboard/vital-tasks" },
    { label: "My Tasks", href: "/dashboard/my-tasks" },
    { label: "Category", href: "/dashboard/categories" },
  ];

  return (
    <nav 
      ref={navRef}
      className="w-full bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-gray-100 z-50 transition-all duration-300"
    >
      {/* Left: Brand */}
      <Link href="/" className="flex items-center group">
        <div className="text-[26px] font-bold tracking-tight">
          <span className="text-[#FF6B6B] group-hover:text-[#ff5252] transition-colors">Dash</span>
          <span className="text-[#1A1A1A]">board</span>
        </div>
      </Link>

      {/* Center: Search & Nav Links */}
      <div className="flex items-center gap-12 flex-1 max-w-4xl mx-8">
        {/* Navigation Links */}
        <ul className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`relative text-sm font-semibold transition-all duration-300 py-1 ${
                    isActive ? "text-[#FF6B6B]" : "text-gray-500 hover:text-[#1A1A1A]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF6B6B] rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Search Bar */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="flex items-center bg-[#F5F6FA] rounded-[14px] p-1 border border-transparent focus-within:border-[#FF6B6B]/20 focus-within:bg-white transition-all shadow-sm">
            <input
              type="text"
              placeholder="Search your task here..."
              className="w-full px-4 text-sm font-medium text-gray-700 bg-transparent focus:outline-none placeholder-gray-400 py-2"
            />
            <button className="bg-[#FF6B6B] min-w-[36px] h-[36px] rounded-[10px] flex items-center justify-center hover:bg-[#ff5252] transition-colors shadow-md shadow-red-200/50">
              <Search className="w-4 h-4 text-white stroke-[2.5px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Right: Actions & Date */}
      <div className="flex items-center gap-4">
        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button className="w-[42px] h-[42px] rounded-[12px] flex items-center justify-center hover:bg-gray-50 transition-all group border border-transparent hover:border-gray-100">
            <Bell className="w-5 h-5 text-gray-500 group-hover:text-[#FF6B6B] transition-colors" />
          </button>
          <button className="w-[42px] h-[42px] rounded-[12px] flex items-center justify-center hover:bg-gray-50 transition-all group border border-transparent hover:border-gray-100">
            <Calendar className="w-5 h-5 text-gray-500 group-hover:text-[#FF6B6B] transition-colors" />
          </button>
        </div>

        {/* Date Display */}
        <div className="hidden sm:flex flex-col items-end leading-tight pl-4 border-l border-gray-100">
          <span className="font-bold text-[#1A1A1A] text-[14px]">{currentDate.day}</span>
          <span className="font-bold text-[#4FACFE] text-[11px] tracking-wider uppercase">{currentDate.fullDate}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
