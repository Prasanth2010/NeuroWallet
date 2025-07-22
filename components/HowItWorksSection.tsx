
import React, { useState } from 'react';

const tabsData = [
    {
        name: 'AI-Powered UX',
        title: 'AI-Powered UX Layer',
        content: 'Use natural language to manage your assets. Simply say or type "Send 0.05 ETH to my designer" and NeuroWallet handles the rest, including fee optimization and predictive suggestions.',
        icon: '💬',
    },
    {
        name: 'Contextual Triggers',
        title: 'Contextual Triggers',
        content: 'NeuroWallet adapts to your life. It can enable "Safe Mode" at a conference, locking down high-value transactions, or "Vacation Mode" to require extra approvals when you\'re abroad.',
        icon: '📍',
    },
    {
        name: 'Dynamic Security',
        title: 'Dynamic Security',
        content: 'Go beyond passwords. We integrate biometric data like Face ID and fingerprints, with future plans for tone sensing and behavioral analysis for a multi-layered, intelligent security model.',
        icon: '🔐',
    },
    {
        name: 'Smart Features',
        title: 'Modular Smart Features (ERC-4337)',
        content: 'Powered by Account Abstraction, we enable gasless transactions, recurring subscriptions, and conditional logic like "Only send if ETH falls below $1800" without you writing any code.',
        icon: '🔩',
    },
    {
        name: 'Universal UX',
        title: 'Universal UX Layer',
        content: 'We translate complex Web3 terms into plain English. "Slippage" becomes "price risk," and "gas fees" are explained clearly. Onboarding is a conversation, not a lecture.',
        icon: '🌐',
    }
];


const HowItWorksSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="features" className="py-20 lg:py-32 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white">How It Works</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        A fusion of AI, biometrics, and next-gen blockchain technology.
                    </p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                    <div className="flex md:flex-col md:w-1/3 overflow-x-auto -mb-px md:border-r md:border-slate-700 md:pr-8">
                         {tabsData.map((tab, index) => (
                             <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex-shrink-0 text-left p-4 rounded-lg w-full transition-all duration-300 mb-2 ${activeTab === index ? 'bg-purple-600/30 text-white' : 'text-gray-400 hover:bg-slate-800'}`}
                            >
                                <div className="flex items-center gap-4">
                                  <span className="text-2xl">{tab.icon}</span>
                                  <span className="font-bold">{tab.name}</span>
                                </div>
                            </button>
                         ))}
                    </div>
                    <div className="md:w-2/3">
                        <div className="bg-slate-800 p-8 lg:p-12 rounded-2xl border border-slate-700 min-h-[280px] flex flex-col justify-center">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                {tabsData[activeTab].title}
                            </h3>
                            <p className="text-gray-300 text-lg">
                                {tabsData[activeTab].content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
