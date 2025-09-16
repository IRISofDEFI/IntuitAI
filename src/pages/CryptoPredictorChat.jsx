/*import React, { useState, useEffect, useRef } from 'react';
import { agentSDK } from '@/agents';
import MessageBubble from '@/components/agent/MessageBubble';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, Loader2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Toaster } from "@/components/ui/sonner"

export default function CryptoPredictorChat() {
    const [conversation, setConversation] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const messagesEndRef = useRef(null);
    const AGENT_NAME = 'crypto_predictor';

    useEffect(() => {
        const initConversation = async () => {
            try {
                const existingConversations = await agentSDK.listConversations({ agent_name: AGENT_NAME });
                let currentConversation;

                if (existingConversations.length > 0) {
                    currentConversation = await agentSDK.getConversation(existingConversations[0].id);
                } else {
                    currentConversation = await agentSDK.createConversation({
                        agent_name: AGENT_NAME,
                        metadata: { name: "Crypto Prediction Chat" }
                    });
                }
                setConversation(currentConversation);
                setMessages(currentConversation.messages || []);

                const unsubscribe = agentSDK.subscribeToConversation(currentConversation.id, (data) => {
                    setMessages(data.messages);
                });

                setIsLoading(false);
                return () => unsubscribe();
            } catch (error) {
                console.error("Failed to initialize conversation:", error);
                setIsLoading(false);
            }
        };

        initConversation();
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (inputMessage.trim() && conversation && !isLoading) {
            const tempMessage = inputMessage;
            setInputMessage('');
            await agentSDK.addMessage(conversation, { role: 'user', content: tempMessage });
        }
    };

    const isAgentReplying = messages.length > 0 && messages[messages.length - 1].role === 'assistant' && messages[messages.length - 1].status === 'in_progress';

    return (
        <div className="flex flex-col h-screen bg-slate-900 text-white font-sans">
             <Toaster richColors theme="dark" />
            <header className="flex items-center p-4 border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm z-10">
                <Link to={createPageUrl('Home')}>
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                </Link>
                <div className="ml-4">
                    <h1 className="text-xl font-bold">Crypto Predictor AI</h1>
                    <p className="text-sm text-purple-400">Powered by IntuitAI</p>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto p-4 md:p-6">
                <div className="max-w-3xl mx-auto">
                    {isLoading ? (
                        <div className="flex justify-center items-center h-full">
                            <Loader2 className="w-8 h-8 text-purple-400 animate-spin" />
                            <p className="ml-4">Initializing AI Agent...</p>
                        </div>
                    ) : (
                        messages.map((msg, index) => <MessageBubble key={index} message={msg} />)
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </main>

            <footer className="p-4 border-t border-slate-800 bg-slate-900/80 backdrop-blur-sm">
                <form onSubmit={handleSendMessage} className="max-w-3xl mx-auto flex items-center gap-2">
                    <Input
                        type="text"
                        placeholder="Ask for a crypto prediction... (e.g., 'What's the outlook for Bitcoin?')"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-500 rounded-lg h-12"
                        disabled={isLoading || isAgentReplying}
                    />
                    <Button type="submit" size="icon" className="h-12 w-12 bg-purple-600 hover:bg-purple-700 rounded-lg flex-shrink-0" disabled={isLoading || isAgentReplying}>
                        {isAgentReplying ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    </Button>
                </form>
            </footer>
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Toaster } from "@/components/ui/sonner"

export default function CryptoPredictorChat() {
    const [inputMessage, setInputMessage] = useState('');

    // Placeholder message when AI is not available
    const messages = [
        { role: 'assistant', content: "The AI Crypto Predictor is currently unavailable. This feature requires a backend AI service to be connected. Please contact support for more information." }
    ];

    const handleSendMessage = (e) => {
        e.preventDefault();
        // In this version, sending messages is disabled as AI backend is not connected
        console.log("AI is not available, message not sent:", inputMessage);
        setInputMessage('');
    };

    return (
        <div className="flex flex-col h-screen bg-slate-900 text-white font-sans">
            <Toaster richColors theme="dark" />
            <header className="flex items-center p-4 border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm z-10">
                <Link to={createPageUrl('Home')}>
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                </Link>
                <div className="ml-4">
                    <h1 className="text-xl font-bold">Crypto Predictor AI</h1>
                    <p className="text-sm text-red-400">AI Service Unavailable</p> {/* Changed text for clarity }
                </div>
            </header>

            <main className="flex-1 overflow-y-auto p-4 md:p-6">
                <div className="max-w-3xl mx-auto">
                    {messages.map((msg, index) => (
                        // A simplified MessageBubble or just a styled div for the placeholder
                        <div key={index} className={`flex gap-3 my-4 ${msg.role === 'user' ? "justify-end" : "justify-start"}`}>
                            {msg.role !== 'user' && (
                                <div className="h-8 w-8 rounded-lg bg-slate-700 flex items-center justify-center mt-0.5 flex-shrink-0">
                                    {/* Placeholder icon *}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-purple-400"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
                                </div>
                            )}
                            <div className={`max-w-[85%] ${msg.role === 'user' ? "flex flex-col items-end" : ""}`}>
                                <div className={`rounded-2xl px-4 py-2.5 ${msg.role === 'user' ? "bg-purple-600 text-white" : "bg-slate-700 text-slate-200"}`}>
                                    <p className="text-sm leading-relaxed">{msg.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="p-4 border-t border-slate-800 bg-slate-900/80 backdrop-blur-sm">
                <form onSubmit={handleSendMessage} className="max-w-3xl mx-auto flex items-center gap-2">
                    <Input
                        type="text"
                        placeholder="AI service is not active..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-500 rounded-lg h-12"
                        disabled={true} // Disable input as AI is not available
                    />
                    <Button type="submit" size="icon" className="h-12 w-12 bg-purple-600 hover:bg-purple-700 rounded-lg flex-shrink-0" disabled={true}>
                        <Send className="w-5 h-5" />
                    </Button>
                </form>
            </footer>
        </div>
    );
}*/


