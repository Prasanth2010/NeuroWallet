
import React from 'react';

const TwitterIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.08c.55 1.7 2.14 2.93 4.03 2.96-1.46 1.14-3.3 1.82-5.3 1.82-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.34 0 11.35-6.08 11.35-11.35 0-.17 0-.34-.01-.51.78-.57 1.45-1.28 1.99-2.09z"></path></svg>
);
const DiscordIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.28,3.43c-1.1-1.3-2.6-2.35-4.32-3a0.47,0.47,0,0,0-.56.32,13.61,13.61,0,0,0-1.13,3.47,11.45,11.45,0,0,0-6.54,0A13.61,13.61,0,0,0,6.6,0.75a0.47,0.47,0,0,0-.56-.32c-1.72.65-3.22,1.7-4.32,3a0.5,0.5,0,0,0-.05.63,16,16,0,0,0,4,8.3,14.61,14.61,0,0,0,2.5,2.44,1,1,0,0,0,.7.28,1,1,0,0,0,.7-0.28,14.53,14.53,0,0,0,2.5-2.44,16,16,0,0,0,4-8.3A0.5,0.5,0,0,0,20.28,3.43ZM8.43,13.51a1.8,1.8,0,0,1-1.8-1.8A1.8,1.8,0,0,1,8.43,10,1.8,1.8,0,0,1,10.23,11.75,1.8,1.8,0,0,1,8.43,13.51Zm7.14,0a1.8,1.8,0,0,1-1.8-1.8A1.8,1.8,0,0,1,15.57,10,1.8,1.8,0,0,1,17.37,11.75,1.8,1.8,0,0,1,15.57,13.51Z"></path></svg>
);
const GithubIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path></svg>
);


const Footer: React.FC = () => {
    return (
        <footer id="waitlist" className="bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="max-w-md">
                        <h3 className="text-xl font-bold text-white mb-4">Join the Waitlist</h3>
                        <p className="text-gray-400 mb-4">Be the first to know when NeuroWallet launches. Get early access, updates, and become part of our founding community.</p>
                        <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="your.email@example.com" required className="flex-grow bg-slate-800 border border-slate-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            <button type="submit" className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-purple-700 transition-colors flex-shrink-0">
                                Sign Up
                            </button>
                        </form>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-semibold text-white mb-3">Product</h4>
                            <ul className="space-y-2">
                                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                                <li><a href="#use-cases" className="text-gray-400 hover:text-white transition-colors">Use Cases</a></li>
                                <li><a href="#demo" className="text-gray-400 hover:text-white transition-colors">Demo</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-3">Community</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-3">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} NeuroWallet. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><DiscordIcon /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><GithubIcon /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
