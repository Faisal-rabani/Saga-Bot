import React from 'react'
import { Menu } from 'lucide-react'
import logoImage from '../assets/logo.png'

export default function Header( { onCompareModels, onToggleSidebar } ) {
    return (
        <div className="bg-[#0A0A0A] border-b border-neutral-800/50 px-6 py-4 flex items-center justify-between z-10 relative">
            {/* Left Section: Menu & Logo */}
            <div className="flex items-center gap-4 z-10">
                <button 
                    onClick={onToggleSidebar}
                    className="p-1 text-neutral-400 hover:text-white transition rounded"
                >
                    <Menu size={20} />
                </button>
                <img src={logoImage} alt="Sara Bot Logo" className="w-8 h-8 rounded" />
            </div>

            {/* Center Section: Title */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                <h1 className="text-xl font-orbitron font-bold text-orange-500 tracking-wider">Sara Bot</h1>
                <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 font-medium mt-0.5">Vibe Agent</p>
            </div>

            {/* Right Section: Compare */}
            <div className="z-10">
                <button
                    onClick={onCompareModels}
                    className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 rounded text-xs font-medium transition"
                >
                    Compare Models
                </button>
            </div>
        </div>
    )
}
