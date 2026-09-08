import React, { useEffect, useRef } from 'react'
import Message from './Message'
import { GeminiLogo, ChatGPTLogo } from './Logos'
import logoImage from '../assets/logo.png'

export default function ChatArea( { messages, isLoading } ) {
    const endRef = useRef( null )

    useEffect( () => {
        endRef.current?.scrollIntoView( { behavior: 'smooth' } )
    }, [messages] )

    return (
        <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
                {messages.length === 0 ? (
                <WelcomeScreen />
            ) : (
                messages.map( ( msg, idx ) => (
                    <Message key={idx} message={msg} />
                ) )
            )}

            <div ref={endRef} />
            </div>
        </div>
    )
}

function WelcomeScreen() {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="max-w-xl text-center">
                <div className="mb-8 flex justify-center">
                    <img src={logoImage} alt="Sara Bot" className="w-20 h-20 rounded-2xl shadow-xl shadow-orange-500/10 border border-neutral-800" />
                </div>
                
                <div className="flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg shadow-sm">
                        <GeminiLogo className="w-5 h-5 text-blue-400" />
                        <div className="text-left">
                            <p className="text-xs font-medium text-white">Gemini</p>
                            <p className="text-[10px] text-neutral-500">Fast Chat</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg shadow-sm">
                        <ChatGPTLogo className="w-5 h-5 text-green-500" />
                        <div className="text-left">
                            <p className="text-xs font-medium text-white">ChatGPT</p>
                            <p className="text-[10px] text-neutral-500">Advanced Coding</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
