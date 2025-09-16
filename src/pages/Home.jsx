
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Star } from "lucide-react";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Home() {
  const [activeNav, setActiveNav] = useState(null);
  const navItems = ["NFT", "Crypto", "About Us", "Our Team", "Doc", "Blog", "Connect Wallet"];

  const advantages = [
    { number: '01.', title: 'Low management fees', description: 'Connect our AI to your exchange account and invest crypto automatically. IntuitAI app work while you just live.' },
    { number: '02.', title: 'Personal support', description: 'Connect our AI to your exchange account and invest crypto automatically. IntuitAI app work while you just live.' },
    { number: '03.', title: 'Saving your time', description: 'Connect our AI to your exchange account and invest crypto automatically. IntuitAI app work while you just live.' },
    { number: '04.', title: 'Withdraw anytime', description: 'Connect our AI to your exchange account and invest crypto automatically. IntuitAI app work while you just live.' },
    { number: '05.', title: 'Secure & insured', description: 'Connect our AI to your exchange account and invest crypto automatically. IntuitAI app work while you just live.' },
    { number: '06.', title: 'Easy to use', description: 'Connect our AI to your exchange account and invest crypto automatically. IntuitAI app work while you just live.' }
  ];

  const testimonials = [
    {
      name: 'Nick Green',
      role: 'Developer',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      avatarBg: 'bg-green-500/30',
      comment: 'Great! Compared to everything else I\'ve ever used, this is the best technology.',
    },
    {
      name: 'Dora Adams',
      role: 'HR manager',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      avatarBg: 'bg-pink-500/30',
      comment: 'Great! Compared to everything else I\'ve ever used, this is the best technology.',
    },
    {
      name: 'Paul Rojers',
      role: 'Project manager',
      avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
      avatarBg: 'bg-blue-500/30',
      comment: 'Great! Compared to everything else I\'ve ever used, this is the best technology.',
    },
    {
      name: 'Nick Green',
      role: 'Developer',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      avatarBg: 'bg-green-500/30',
      comment: 'Great! Compared to everything else I\'ve ever used, this is the best technology.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans overflow-x-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 py-5 md:px-12">
          <nav className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold tracking-wider">IntuitAI</div>
              <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/60 rounded-lg backdrop-blur-sm border border-slate-700/50">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c88e559c369481ed8dff8c/19c7aa35d_fluentxyz.png"
                  alt="Fluent Logo"
                  className="w-4 h-4"
                  style={{
                    animation: 'float 6s ease-in-out infinite'
                  }}
                />
                <span className="text-xs text-gray-400 tracking-wider">POWERED BY FLUENT</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <a 
                  key={index} 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveNav(index);
                  }}
                  className={`flex items-center gap-1 transition-colors duration-300 hover:text-purple-400 ${
                    activeNav === index ? 'text-purple-400 font-semibold' : 'text-gray-300'
                  }`}
                >
                  {item}
                  {item !== "Connect Wallet" && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="px-6 md:px-12 mt-12 md:mt-20 relative">
          {/* Rotating Starburst */}
          <div className="absolute top-6 md:top-12 left-1/2 -translate-x-1/2 z-20">
            <div className="animate-pulse">
              <div
                className="w-24 h-24 md:w-32 md:h-32"
                style={{
                  animation: 'starburstRotate 10s ease-in-out infinite'
                }}
              >
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c88e559c369481ed8dff8c/e70d971bf_toka5.png"
                  alt="Decorative starburst"
                  className="w-full h-full opacity-80 contrast-150 brightness-150"
                />
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 pt-24 md:pt-0">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <p className="text-sm font-bold tracking-widest text-purple-400 mb-4">DISCOVER HOW TO EARN MORE</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Predict crypto<br />markets
                </span>
              </h1>
              <p className="text-lg text-gray-400 max-w-md mx-auto md:mx-0 mb-10">
                Connect our AI to your exchange account and invest crypto automatically. IntuitAI app work while you just live.
              </p>

              <Link to={createPageUrl('CryptoPredictorChat')}>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity rounded-full px-12 py-6 text-lg border-none">
                  Get Predictions
                </Button>
              </Link>

              <div className="flex justify-center md:justify-start gap-12 mt-12">
                <div>
                  <p className="text-4xl font-bold">2M+</p>
                  <p className="text-gray-400 text-sm">ACTIVE USERS</p>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div>
                  <p className="text-4xl font-bold">4.8</p>
                  <p className="text-gray-400 text-sm">AVG RATING</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl scale-75"></div>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c88e559c369481ed8dff8c/b2dc2cf26_koka4.png"
                alt="AI Crypto Prediction"
                className="relative z-10 w-full max-w-md md:max-w-lg"
              />
            </div>
          </div>
        </main>

        {/* Partners Section */}
        <section className="px-6 md:px-12 mt-16 pb-12">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-8">
            <span className="text-xl font-light text-gray-600 hover:text-white transition-colors duration-300 cursor-pointer tracking-widest">
              AEROMIZ
            </span>
            <span className="text-xl font-bold text-gray-600 hover:text-white transition-colors duration-300 cursor-pointer tracking-wide">
              SEVANES
            </span>
            <span className="text-xl font-normal text-gray-600 hover:text-white transition-colors duration-300 cursor-pointer lowercase tracking-tight">
              abadon
            </span>
            <span className="text-xl font-medium text-gray-600 hover:text-white transition-colors duration-300 cursor-pointer">
              Aroflit
            </span>
            <span className="text-xl font-light text-gray-600 hover:text-white transition-colors duration-300 cursor-pointer lowercase tracking-wide">
              happenz
            </span>
            <span className="text-xl font-light text-gray-600 hover:text-white transition-colors duration-300 cursor-pointer tracking-widest">
              AEROMIZ
            </span>
          </div>
        </section>

        {/* Base Concept Section */}
        <section className="px-6 md:px-12 py-16 relative overflow-hidden">
          <div
            className="absolute top-24 left-1/2 -translate-x-1/4 w-32 h-32 bg-no-repeat bg-contain opacity-10"
            style={{backgroundImage: "url('https://cdn.pixelbin.io/v2/throbbing-poetry-5e04c5/original/fxVE.png')"}}
          ></div>
           <div
            className="absolute inset-0 bg-no-repeat bg-left-top opacity-5"
            style={{backgroundImage: "url('https://cdn.pixelbin.io/v2/throbbing-poetry-5e04c5/original/wavy_lines.png')"}}
          ></div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="relative flex justify-center order-2 md:order-1 -ml-16">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c88e559c369481ed8dff8c/70555f87f_toka3.png"
                alt="Crypto Trading Concept"
                className="relative z-10 w-full max-w-lg drop-shadow-[0_20px_40px_rgba(128,90,213,0.3)]"
              />
            </div>

            <div className="absolute left-1/2 top-16 -translate-x-1/2 md:left-[45%] md:top-8 z-0">
              <div className="animate-pulse">
                <div
                  className="w-32 h-32"
                  style={{
                    animation: 'starburstRotate 10s ease-in-out infinite'
                  }}
                >
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c88e559c369481ed8dff8c/f8bc5d584_toka5.png"
                    alt="Decorative starburst"
                    className="w-full h-full opacity-30"
                  />
                </div>
              </div>
            </div>

            <div className="relative text-center md:text-left order-1 md:order-2 z-20">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Base<span className="text-purple-400">concept</span>
                </h2>
                <div className="w-6 h-6 text-2xl font-thin text-purple-400">+</div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                Invest in Bitcoin, Ethereum, USDT, and other cryptocurrencies
                using our crypto trading app. The Bitcoin and
                cryptocurrency markets have experienced a surge in volume
                recently, making it an exciting time to become a trader.
                Connect our AI to your exchange account and invest crypto
                automatically. IntuitAI app work while you just live.
              </p>

              <Link to={createPageUrl('CryptoPredictorChat')}>
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-blue-500 hover:opacity-90 transition-opacity rounded-md px-12 py-6 text-lg border-none">
                  Get Predictions
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Main Advantages Section */}
        <section className="px-6 md:px-12 py-24 relative">
          <div
            className="absolute bottom-16 -left-16 w-32 h-32 bg-no-repeat bg-contain opacity-10 animate-spin"
            style={{backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c88e559c369481ed8dff8c/f8bc5d584_toka5.png')", animationDuration: '40s'}}
          ></div>
          <div
            className="absolute top-24 right-0 w-48 h-48 bg-no-repeat bg-contain opacity-10"
            style={{backgroundImage: "url('https://cdn.pixelbin.io/v2/throbbing-poetry-5e04c5/original/fxVE.png')"}}
          ></div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Main<span className="text-purple-400">advantages</span>
              <span className="text-purple-400 text-2xl font-thin ml-2">+</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-16">
              Connect our AI to your exchange account and invest crypto automatically. IntuitAI app work while you just live.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-slate-800/60 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-start gap-2 pt-1">
                      <div className="w-4 h-4 mt-2 rounded-full bg-gradient-to-br from-white to-pink-300 shadow-lg shadow-pink-400/30"></div>
                      <span className="text-3xl font-bold text-gray-600">{advantage.number}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-200">{advantage.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Model Section */}
        <section className="px-6 md:px-12 py-16 relative">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="text-left">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Business <span className="text-purple-400">model</span>
                </h2>
                <div className="w-6 h-6 text-2xl font-thin text-purple-400">+</div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-lg">
                Invest in Bitcoin, Ethereum, USDT, and other cryptocurrencies
                using our crypto trading app. The Bitcoin and cryptocurrency
                markets have experienced a surge in volume recently, making it
                an exciting time to become a trader. Connect our AI to your
                exchange account and invest crypto automatically. IntuitAI app work
                while you just live.
              </p>

              <Button
                size="lg"
                className="bg-purple-400 hover:bg-purple-500 text-white rounded-md px-8 py-3 text-base"
              >
                Learn more
              </Button>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c88e559c369481ed8dff8c/1ad0062d4_tbsp.png"
                  alt="Background pattern"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="relative z-10">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c88e559c369481ed8dff8c/ab33e9b6d_toka6.png"
                  alt="3D Business Model Visualization"
                  className="w-full max-w-lg drop-shadow-[0_20px_40px_rgba(147,51,234,0.4)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-6 md:px-12 py-16 relative">
          <div className="absolute top-16 right-16 w-8 h-8 text-purple-400 animate-pulse">*</div>
          <svg width="60" height="150" viewBox="0 0 100 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-8 right-0 -mr-8 opacity-10 hidden md:block">
            <path d="M83.25,2.9c-23.8,9.5-49.8,25-49.8,59.5s23,59,51,60.5s44-24.5,44-55.5s-23-60-52-64s-48.5,23-48.5,56.5 
            s24,62.5,53.5,62.5s48.5-27,48.5-57s-27-58-53-61.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hear from the <span className="text-purple-400">clients</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-16">
              Connect our AI to your exchange account and invest crypto automatically. IntuitAI app work while you just live.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/60 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6">{testimonial.comment}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-full p-1 ${testimonial.avatarBg}`}>
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Powered by Fluent Section */}
        <section className="px-6 md:px-12 py-16 text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl blur-lg opacity-25 group-hover:opacity-60 transition duration-1000" style={{ animation: 'pulse-slow 4s infinite ease-in-out' }}></div>
            <div className="relative flex flex-col items-center justify-center p-8 bg-slate-800/60 rounded-2xl backdrop-blur-sm border border-slate-700/50">
              <p className="text-sm text-gray-400 mb-4 tracking-widest">POWERED BY</p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c88e559c369481ed8dff8c/19c7aa35d_fluentxyz.png"
                  alt="Fluent Logo"
                  className="w-12 h-12"
                  style={{
                    animation: 'float 6s ease-in-out infinite'
                  }}
                />
                <span className="text-4xl font-bold text-white tracking-wider">Fluent</span>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />

      <style jsx>{`
        @keyframes starburstRotate {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(-360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse-slow {
          0% { opacity: 0.25; }
          50% { opacity: 0.6; }
          100% { opacity: 0.25; }
        }
      `}</style>
    </div>
  );
}
