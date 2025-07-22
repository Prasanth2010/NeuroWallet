
import React from 'react';

const useCases = [
    {
        icon: '👤',
        title: 'Everyday User',
        description: 'Pay friends with a voice command, swap to stables mid-trend, or pay for Netflix in USDC, all without complexity.',
    },
    {
        icon: '🧠',
        title: 'DeFi Enthusiasts',
        description: 'Automate LP exits and risk alerts. Simulate how a market shift would affect your entire portfolio before it happens.',
    },
    {
        icon: '🏛️',
        title: 'DAOs & Teams',
        description: 'Set up group voting rules, contextual spending limits, and treasury management that adapts to your team\'s needs.',
    },
    {
        icon: '🌍',
        title: 'Emerging Markets',
        description: 'Utilize gesture-based commands and offline transactions via NFC or QR codes, overcoming connectivity barriers.',
    },
];

const UseCasesSection: React.FC = () => {
    return (
        <section id="use-cases" className="py-20 lg:py-32 bg-slate-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white">Who It's For</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        NeuroWallet is designed for everyone, from the crypto-curious to the DeFi-native.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {useCases.map((useCase, index) => (
                        <div key={index} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                           <div className="text-5xl mb-6">{useCase.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                            <p className="text-gray-400 flex-grow">{useCase.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection;
