import React, { useState, useEffect, useRef } from 'react';
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