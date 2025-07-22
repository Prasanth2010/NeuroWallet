
import React from 'react';

const techTags = [
    'ERC-4337', 'Account Abstraction', 'OpenAI / LLMs', 'Biometric Integration',
    'React Native', 'Flutter', 'Secure Cloud AI', 'On-Device AI', 'zkAuth',
    'Social Recovery', 'Chainlink Functions'
];


const TechStackSection: React.FC = () => {
    return (
        <section id="tech" className="py-20 lg:py-32 bg-slate-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white">Technological Snapshots</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        Built on a foundation of open, secure, and cutting-edge technologies.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-4xl mx-auto">
                    {techTags.map((tag, index) => (
                        <div key={index} className="bg-slate-700 text-gray-200 text-sm font-medium px-4 py-2 rounded-full border border-slate-600 hover:bg-slate-600 transition-colors cursor-default">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;
