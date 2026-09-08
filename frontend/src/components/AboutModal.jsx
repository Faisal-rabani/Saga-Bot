import React from 'react'
import { X } from 'lucide-react'
import { GeminiLogo, ChatGPTLogo } from './Logos'
import logoImage from '../assets/logo.png'

export default function AboutModal( { isOpen, onClose } ) {
    if ( !isOpen ) return null

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-[#0A0A0A] rounded-xl w-full max-w-md max-h-[90vh] flex flex-col border border-neutral-800 shadow-2xl relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-neutral-800">
                    <h2 className="text-lg font-orbitron font-bold text-orange-500 tracking-wider">About Sara Bot</h2>
                    <button
                        onClick={onClose}
                        className="text-neutral-500 hover:text-white transition"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto">
                    <div className="flex justify-center mb-6">
                        <img src={logoImage} alt="Sara Bot Logo" className="w-20 h-20 rounded-2xl shadow-xl shadow-orange-500/10 border border-neutral-800" />
                    </div>
                    
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-orbitron font-bold text-orange-500">Sara Bot</h3>
                        <p className="text-sm text-neutral-400 mt-1 uppercase tracking-[0.2em] font-medium">Next-Gen Vibe Agent</p>
                    </div>

                    <p className="text-sm text-neutral-300 text-center mb-6 leading-relaxed">
                        Sara Bot is an incredibly successful intelligent agent designed to maximize your productivity. By seamlessly intelligently routing requests, we ensure you always get the best possible answer in record time.
                    </p>

                    <h4 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-3 text-center">Core Architecture</h4>
                    <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-4 p-4 bg-[#111] border border-neutral-800 rounded-lg">
                            <div className="bg-blue-500/10 p-2 rounded-md">
                                <GeminiLogo className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white">Gemini</h4>
                                <p className="text-xs text-neutral-500">Fast Chat</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-[#111] border border-neutral-800 rounded-lg">
                            <div className="bg-green-500/10 p-2 rounded-md">
                                <ChatGPTLogo className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">ChatGPT</h4>
                                <p className="text-xs text-neutral-500">Advanced Coding & Complex Logic</p>
                            </div>
                        </div>
                    </div>

                    <h4 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-3 text-center">Why We Are The Best</h4>
                    <ul className="text-xs text-neutral-400 space-y-2 px-2">
                        <li className="flex items-center gap-2"><span className="text-orange-500">✓</span> Real-time Auto-Routing mechanism</li>
                        <li className="flex items-center gap-2"><span className="text-orange-500">✓</span> Ultra-premium, minimalist dark UI</li>
                        <li className="flex items-center gap-2"><span className="text-orange-500">✓</span> Side-by-side model comparison tools</li>
                        <li className="flex items-center gap-2"><span className="text-orange-500">✓</span> Blazing fast response rendering</li>
                    </ul>
                </div>

                {/* Footer */}
                <div className="border-t border-neutral-800 p-4 flex justify-center bg-[#111]">
                    <p className="text-xs text-neutral-600">v1.0.0 &copy; 2026 Sara Bot</p>
                </div>
            </div>
        </div>
    )
}
