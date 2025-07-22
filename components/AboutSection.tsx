
import React from 'react';

const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);
const EyeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
);
const ZapIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const HandIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>
);

const features = [
    { icon: <UserIcon className="h-8 w-8 text-purple-400"/>, title: 'Personalized Assistant', description: 'Your own AI for navigating the complexities of crypto.' },
    { icon: <EyeIcon className="h-8 w-8 text-purple-400"/>, title: 'Contextual Awareness', description: 'Understands your situation, providing relevant actions.' },
    { icon: <ZapIcon className="h-8 w-8 text-purple-400"/>, title: 'Adaptive Automation', description: 'Automates swaps, payments, and security protocols.' },
    { icon: <HandIcon className="h-8 w-8 text-purple-400"/>, title: 'Natural UX', description: 'Interact naturally with voice, text, and gestures.' },
];

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 lg:py-32 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white">What is <span className="text-purple-400">NeuroWallet</span>?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        NeuroWallet is a revolutionary smart wallet that acts as your personal AI assistant for Web3. We merge advanced AI with cutting-edge blockchain technology to create an experience that is intuitive, secure, and deeply personalized.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-700 mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
