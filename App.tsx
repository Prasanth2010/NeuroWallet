
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyItMattersSection from './components/WhyItMattersSection';
import HowItWorksSection from './components/HowItWorksSection';
import UseCasesSection from './components/UseCasesSection';
import ResultSection from './components/ResultSection';
import TechStackSection from './components/TechStackSection';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="min-h-screen overflow-x-hidden bg-slate-900">
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <WhyItMattersSection />
                <HowItWorksSection />
                <UseCasesSection />
                <ResultSection />
                <TechStackSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;
