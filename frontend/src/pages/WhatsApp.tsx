import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, CheckCheck, Loader2 } from 'lucide-react';
import api from '../services/api';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: Date;
}

const WhatsApp = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Olá! Sou o assistente virtual da Barbearia. Este é um simulador de chat. Digite "Oi" para começarmos.',
      time: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      time: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      // Small artificial delay to look real
      await new Promise(r => setTimeout(r, 600));
      const { data } = await api.post('/whatsapp/webhook', {
        from: '5511999999999',
        message: userMessage.text
      });

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: data.reply,
        time: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: 'Desculpe, o bot está offline no momento.',
        time: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] max-w-4xl mx-auto bg-[#e5ddd5] rounded-xl overflow-hidden shadow-md border border-gray-200">
      {/* Header */}
      <div className="bg-[#075e54] text-white px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#075e54]">
          <Bot size={24} />
        </div>
        <div>
          <h2 className="font-semibold text-base leading-tight">Bot da Barbearia</h2>
          <span className="text-xs text-white/80 opacity-90">{isTyping ? 'digitando...' : 'online'}</span>
        </div>
      </div>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png')] bg-repeat"
        style={{ backgroundImage: `url('https://i.pinimg.com/originals/8f/ba/cb/8fbacbd464e996966eb9d4a6b7a9c21e.jpg')`, backgroundSize: 'contain' }}
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] rounded-lg p-3 relative shadow-sm ${
              msg.sender === 'user' 
                ? 'bg-[#dcf8c6] rounded-tr-none text-gray-800' 
                : 'bg-white rounded-tl-none text-gray-800'
            }`}>
              <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-[10px] text-gray-500">
                  {msg.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
                {msg.sender === 'user' && <CheckCheck size={14} className="text-blue-500" />}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
           <div className="flex justify-start">
             <div className="bg-white rounded-lg p-3 rounded-tl-none shadow-sm flex items-center gap-1">
                <Loader2 size={16} className="animate-spin text-gray-400" />
             </div>
           </div>
        )}
      </div>

      {/* Input Area */}
      <div className="bg-[#f0f0f0] p-3 flex items-center gap-2">
        <form onSubmit={handleSend} className="flex-1 flex gap-2 w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite uma mensagem..."
            className="flex-1 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500 border border-transparent shadow-sm text-sm"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="w-10 h-10 rounded-full bg-[#00a884] text-white flex items-center justify-center hover:bg-[#008f6f] disabled:opacity-50 transition-colors shadow-sm"
          >
            <Send size={18} className="translate-x-[1px]" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default WhatsApp;
