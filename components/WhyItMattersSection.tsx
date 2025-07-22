
import React from 'react';

const objectives = [
    { icon: '📱', title: 'Remove Complexity', description: 'Make crypto wallets feel as simple and intuitive as messaging apps.' },
    { icon: '🔒', title: 'Emotion-Aware Security', description: 'Secure your assets with biometrics and behavioral analysis for smarter approvals.' },
    { icon: '🤖', title: 'Truly AI-Native', description: 'An experience that learns, recommends, and adapts to you, not the other way around.' },
    { icon: '🙋', title: 'Human-First Design', description: 'Focus on mass adoption through superior UX, not technical jargon.' },
];

const WhyItMattersSection: React.FC = () => {
    return (
        <section id="why" className="py-20 lg:py-32 bg-slate-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white">Why It Matters</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        We're not just building another wallet. We're building a new paradigm for human-computer interaction in the decentralized world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {objectives.map((obj, index) => (
                        <div key={index} className="bg-slate-800 rounded-2xl p-8 flex items-start space-x-6 border border-transparent hover:border-blue-500 transition-all duration-300 shadow-lg">
                            <div className="text-4xl mt-1">{obj.icon}</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{obj.title}</h3>
                                <p className="text-gray-400">{obj.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyItMattersSection;
