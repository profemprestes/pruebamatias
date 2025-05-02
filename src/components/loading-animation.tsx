'use client';
import type React from 'react';
import { useMemo } from 'react';
import { PartyPopper, Gift } from 'lucide-react'; // Using Lucide icons

const colors = ['#FFD700', '#1E90FF', '#FF69B4', '#32CD32', '#FF4500']; // Yellow, Blue, Pink, Green, Orange

const generateConfetti = () => {
    const pieces: React.ReactNode[] = [];
    for (let i = 0; i < 50; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const style: React.CSSProperties = {
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            '--confetti-color': color,
        };
        pieces.push(<div key={i} className="confetti" style={style}></div>);
    }
    return pieces;
};


const LoadingAnimation: React.FC = () => {
    const confettiPieces = useMemo(() => {
        return generateConfetti();
    }, []);
    
   
    
   


  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm z-50 overflow-hidden">
      {confettiPieces}
       <div className="relative text-center space-y-4">
        {/* Balloons */}
        <div className="flex justify-center space-x-4">
           <div className="animate-balloon-float" style={{ animationDelay: '0s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" viewBox="0 0 100 130">
                <ellipse cx="50" cy="50" rx="45" ry="50" fill="#1E90FF"/> {/* Sky Blue */}
                <path d="M50 100 Q 45 110 50 130" stroke="#333" strokeWidth="2" fill="none"/>
                 <polygon points="48,100 52,100 50,105" fill="#1E90FF"/>
              </svg>
           </div>
           <div className="animate-balloon-float" style={{ animationDelay: '0.5s' }}>
               <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" viewBox="0 0 100 130">
                <ellipse cx="50" cy="50" rx="45" ry="50" fill="#FF69B4"/> {/* Bubblegum Pink */}
                <path d="M50 100 Q 55 110 50 130" stroke="#333" strokeWidth="2" fill="none"/>
                 <polygon points="48,100 52,100 50,105" fill="#FF69B4"/>
              </svg>
           </div>
             <div className="animate-balloon-float" style={{ animationDelay: '0.2s' }}>
               <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" viewBox="0 0 100 130">
                <ellipse cx="50" cy="50" rx="45" ry="50" fill="#FFD700"/> {/* Sunny Yellow */}
                <path d="M50 100 Q 48 115 50 130" stroke="#333" strokeWidth="2" fill="none"/>
                 <polygon points="48,100 52,100 50,105" fill="#FFD700"/>
              </svg>
           </div>
        </div>

        <PartyPopper className="h-16 w-16 text-primary animate-bounce" />
        <p className="text-xl font-semibold text-foreground animate-pulse">¡Preparando la invitación!</p>
        <Gift className="h-12 w-12 text-secondary inline-block animate-spin slow-spin" />
      </div>
    </div>
  );
};

export default LoadingAnimation;

// Add custom animation utility if needed
// .slow-spin { animation-duration: 3s; }
