"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Github, Dribbble } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12 px-6 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
                <span className="text-[#FF5F5F]">Dash</span>board
            </Link>
          <div className="flex gap-4 mt-6">
            <Link href="#" className="text-gray-400 hover:text-[#FF5F5F] transition-colors"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="text-gray-400 hover:text-[#FF5F5F] transition-colors"><Linkedin className="h-5 w-5" /></Link>
            <Link href="#" className="text-gray-400 hover:text-[#FF5F5F] transition-colors"><Github className="h-5 w-5" /></Link>
            <Link href="#" className="text-gray-400 hover:text-[#FF5F5F] transition-colors"><Dribbble className="h-5 w-5" /></Link>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            © 2024 Dashboard Inc. All rights reserved.
          </p>
        </div>

        {/* Links Sections */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">News</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Status</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Docs</Link></li>
          </ul>
        </div>

        <div>
           <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
            </ul>
        </div>
      </div>
      
       <div className="container mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-sm text-gray-500">Subscribe to our newsletter</p>
           <div className="flex gap-2">
               {/* Use inline styles or standard CSS transparently if button variants aren't set up for this specific dark context perfectly, 
                   but assuming standard shadcn button works. We'll use a custom styled button to match the mockup completely. */}
                <Button className="bg-[#FF5F5F] hover:bg-[#FF5F5F]/90 text-white">Subscribe to Newsletter</Button>
           </div>
       </div>
    </footer>
  )
}
