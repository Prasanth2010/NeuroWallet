import React from 'react';
import InteractiveDemo from './InteractiveDemo';

const ResultSection: React.FC = () => {
    return (
        <section id="demo" className="py-20 lg:py-32 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white">Experience NeuroWallet Live</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        This is not just a concept. Try our live testnet demo to see AI-assisted transfers and automation in action.
                    </p>
                </div>
                
                <InteractiveDemo />
                
            </div>
        </section>
    );
};

export default ResultSection;