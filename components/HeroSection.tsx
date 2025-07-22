
import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900/80"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 animate-fade-in-down">
                    NeuroWallet – The Smarter Way to Web3
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
                    An AI-first smart wallet that understands you. Voice commands, predictive actions, human-centered UX.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                    <a href="#demo" className="bg-white text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg">
                        Try Demo
                    </a>
                    <a href="#waitlist" className="border border-purple-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-purple-500/20 transition-all transform hover:scale-105">
                        Join Waitlist
                    </a>
                </div>

                <div className="relative max-w-lg mx-auto lg:max-w-2xl">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-2 border border-slate-700">
                        <img 
                            src="https://picsum.photos/seed/neurowallet/800/450" 
                            alt="NeuroWallet App Preview" 
                            className="rounded-xl"
                        />
                         <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md p-3 rounded-lg flex items-center gap-3 border border-slate-700">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center animate-pulse flex-shrink-0">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                </svg>
                            </div>
                            <p className="text-sm text-gray-200 font-mono truncate">
                                <span className="text-gray-400">$ </span>
                                send 0.05 ETH to my designer...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
