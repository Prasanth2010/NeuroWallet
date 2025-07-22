import React, { useState, useRef } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

// The API key is read from the environment variables.
// The AI client is only initialized if the key is present.
const ai = process.env.API_KEY ? new GoogleGenAI({ apiKey: process.env.API_KEY }) : null;

const transactionSchema = {
    type: Type.OBJECT,
    properties: {
        action: { type: Type.STRING, description: "The action to perform, e.g., 'send'." },
        amount: { type: Type.NUMBER, description: "The amount of the asset to transfer." },
        asset: { type: Type.STRING, description: "The crypto asset ticker, e.g., 'ETH' or 'USDC'." },
        recipient: { type: Type.STRING, description: "The name or address of the recipient." },
        summary: { type: Type.STRING, description: "A plain English summary of the transaction for user confirmation." },
        error: { type: Type.STRING, description: "A message explaining why the command could not be parsed, if applicable." }
    },
    required: ["summary"]
};


const InteractiveDemo: React.FC = () => {
    const [command, setCommand] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState('idle'); // idle, loading, confirm, processing, success, error
    const [parsedData, setParsedData] = useState<any>(null);
    const [errorMessage, setErrorMessage] = useState('');
    const outputRef = useRef<HTMLDivElement>(null);

    const resetDemo = () => {
        setCommand('');
        setIsLoading(false);
        setStep('idle');
        setParsedData(null);
        setErrorMessage('');
    };

    const handleExecute = async () => {
        if (!command.trim()) return;

        // Check if the AI client was initialized (i.e., if API key exists)
        if (!ai) {
            setErrorMessage('AI features are disabled. The Gemini API key is not configured in the environment.');
            setStep('error');
            return;
        }

        setIsLoading(true);
        setStep('loading');
        setErrorMessage('');

        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: `Parse the following user command for a crypto transaction: "${command}"`,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: transactionSchema,
                    systemInstruction: "You are an AI wallet assistant. Parse user commands into JSON. If the command is ambiguous or missing information for a transfer (amount, asset, recipient), use the 'error' field to explain what's missing. Always provide a 'summary' field. For a valid command, the summary should be a confirmation message. For an invalid one, the summary should state the problem.",
                },
            });

            const jsonString = response.text;
            const data = JSON.parse(jsonString);

            if (data.error || !data.action || !data.amount || !data.asset || !data.recipient) {
                setErrorMessage(data.error || 'I could not understand that command. Please be more specific (e.g., "send 0.1 ETH to Alice").');
                setStep('error');
            } else {
                setParsedData(data);
                setStep('confirm');
            }
        } catch (e) {
            console.error(e);
            let friendlyMessage = 'An unexpected error occurred with the AI service. Please try again.';
            if (e instanceof Error) {
                 if (e.message.includes('API key not valid')) {
                    friendlyMessage = 'The configured API Key is not valid. Please check the environment configuration.';
                 } else if (e.message.includes('400')) {
                     friendlyMessage = 'There was a problem with the request to the AI service (Bad Request). Please check the command.';
                 } else if (e.message.includes('500')) {
                     friendlyMessage = 'The AI service is currently unavailable. Please try again later.';
                 }
            }
            setErrorMessage(friendlyMessage);
            setStep('error');
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleConfirm = async () => {
        setStep('processing');
        const outputElement = outputRef.current;
        if(outputElement) outputElement.innerHTML = '';

        const steps = [
            '✅ Biometric authentication approved...',
            '📦 Bundling transaction with ERC-4337...',
            '📡 Broadcasting to Goerli Testnet...',
            '🔗 Transaction confirmed! Block: 10394582',
        ];
        
        for (let i = 0; i < steps.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 1500));
            if(outputElement) {
                outputElement.innerHTML += `<p class="text-green-400">${steps[i]}</p>`;
            }
        }
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStep('success');
    };


    const renderContent = () => {
        switch (step) {
            case 'confirm':
                return (
                    <div className="text-left space-y-4 p-4 animate-fade-in">
                        <h4 className="font-bold text-white">Confirm Transaction</h4>
                        <p className="text-gray-300">{parsedData.summary}</p>
                        <div className="bg-slate-900/50 p-4 rounded-lg space-y-2 border border-slate-700">
                           <p><strong>Action:</strong> <span className="text-purple-400 font-mono">{parsedData.action}</span></p>
                           <p><strong>Amount:</strong> <span className="text-purple-400 font-mono">{parsedData.amount} {parsedData.asset}</span></p>
                           <p><strong>Recipient:</strong> <span className="text-purple-400 font-mono">{parsedData.recipient}</span></p>
                           <p><strong>Est. Gas Fee:</strong> <span className="text-purple-400 font-mono">0.0012 ETH</span></p>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <button onClick={handleConfirm} className="flex-1 bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition-colors">Confirm</button>
                            <button onClick={resetDemo} className="flex-1 bg-slate-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-slate-700 transition-colors">Cancel</button>
                        </div>
                    </div>
                );
            case 'processing':
                return (
                     <div className="text-left space-y-2 p-4 animate-fade-in">
                         <h4 className="font-bold text-white mb-4">Processing...</h4>
                         <div ref={outputRef} className="font-mono text-sm space-y-2"></div>
                     </div>
                );
            case 'success':
                 return (
                     <div className="text-center space-y-4 p-4 animate-fade-in">
                         <div className="text-5xl">🎉</div>
                         <h4 className="font-bold text-white text-xl">Transaction Complete!</h4>
                         <p className="text-gray-300">Your transfer of {parsedData.amount} {parsedData.asset} to {parsedData.recipient} was successful.</p>
                         <a href="#" onClick={(e) => e.preventDefault()} className="text-purple-400 hover:underline">View on Testnet Explorer</a>
                         <button onClick={resetDemo} className="w-full mt-4 bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">Start New Transaction</button>
                     </div>
                 );
            case 'error':
                 return (
                    <div className="text-center space-y-4 p-4 animate-fade-in">
                        <div className="text-4xl">🤔</div>
                        <h4 className="font-bold text-white text-xl">Oops!</h4>
                        <p className="text-red-400">{errorMessage}</p>
                        <button onClick={resetDemo} className="w-full mt-4 bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">Try Again</button>
                    </div>
                 );
            default: // idle or loading
                return null;
        }
    }

    return (
        <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-slate-700 max-w-2xl mx-auto">
             <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur-lg opacity-40 animate-pulse -z-10"></div>
            <div className="flex flex-col gap-4">
                <label htmlFor="command-input" className="text-white font-semibold">
                    Speak a command to the wallet:
                </label>
                <div className="flex gap-2">
                    <input
                        id="command-input"
                        type="text"
                        value={command}
                        onChange={(e) => setCommand(e.target.value)}
                        placeholder='e.g., "Send 0.05 ETH to my designer"'
                        disabled={isLoading || step !== 'idle'}
                        className="flex-grow bg-slate-900 border border-slate-600 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                    />
                    <button
                        onClick={handleExecute}
                        disabled={isLoading || step !== 'idle' || !command.trim()}
                        className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 transition-colors flex-shrink-0 disabled:bg-slate-700 disabled:cursor-not-allowed flex items-center justify-center w-28"
                    >
                       {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                       ) : 'Execute'}
                    </button>
                </div>
                <div className="text-xs text-gray-400">
                    Try: "Send 100 USDC to DAO Treasury" or "Pay 0.1 ETH to vitalik.eth"
                </div>
            </div>

            {(step !== 'idle' && step !== 'loading') && (
                <div className="mt-6 border-t border-slate-700 pt-6">
                    {renderContent()}
                </div>
            )}
            
            {step === 'loading' && (
                 <div className="mt-6 border-t border-slate-700 pt-6 text-center space-y-3">
                    <div className="flex justify-center items-center gap-2 text-gray-300">
                        <div className="w-5 h-5 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                        <span>AI is thinking...</span>
                    </div>
                    <p className="text-sm text-gray-400">Analyzing your intent and preparing the transaction...</p>
                 </div>
            )}
        </div>
    );
};

export default InteractiveDemo;