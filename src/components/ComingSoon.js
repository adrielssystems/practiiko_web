"use client";

import { useState, useEffect } from 'react';

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({ days: 15, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      backgroundImage: 'url("/coming-soon-bg.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center right',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      fontFamily: 'var(--font-manrope), sans-serif',
      position: 'relative',
      overflow: 'hidden',
      justifyContent: 'center'
    }}>
      {/* Background Shapes Pattern - Kept for subtle texture over the white area */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '300px',
        opacity: 0.05,
        zIndex: 0,
        backgroundImage: `radial-gradient(circle at 20px 20px, #E67E22 2px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'left', zIndex: 1, marginTop: '-5vh' }}>
        <div style={{ 
          maxWidth: '700px' // Limit width to keep text over the white area of the bg
        }}>
          <div className="animate-fade-in">
            <h2 style={{ 
              color: '#E67E22', 
              fontSize: '4.5rem', 
              fontWeight: 900, 
              lineHeight: 1.1, 
              marginBottom: '4rem', 
              letterSpacing: '-0.04em'
            }}>
              Pronto estaremos <br /> 
              <span style={{ color: '#004A8D' }}>On line</span> para ustedes!
            </h2>

            {/* Countdown Container */}
            <div style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              alignItems: 'center', 
              marginBottom: '5rem' 
            }}>
               <div style={{ textAlign: 'center', minWidth: '80px' }}>
                 <div style={{ color: '#D35400', fontSize: '4rem', fontWeight: 900, lineHeight: 1 }}>{timeLeft.days}</div>
                 <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#666', marginTop: '0.5rem' }}>Días</div>
               </div>
               <div style={{ width: '1px', height: '50px', backgroundColor: '#E0E0E0' }}></div>
               <div style={{ textAlign: 'center', minWidth: '80px' }}>
                 <div style={{ color: '#D35400', fontSize: '4rem', fontWeight: 900, lineHeight: 1 }}>{timeLeft.hours}</div>
                 <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#666', marginTop: '0.5rem' }}>Horas</div>
               </div>
               <div style={{ width: '1px', height: '50px', backgroundColor: '#E0E0E0' }}></div>
               <div style={{ textAlign: 'center', minWidth: '80px' }}>
                 <div style={{ color: '#D35400', fontSize: '4rem', fontWeight: 900, lineHeight: 1 }}>{timeLeft.minutes}</div>
                 <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#666', marginTop: '0.5rem' }}>Minutos</div>
               </div>
               <div style={{ width: '1px', height: '50px', backgroundColor: '#E0E0E0' }}></div>
               <div style={{ textAlign: 'center', minWidth: '80px' }}>
                 <div style={{ color: '#D35400', fontSize: '4rem', fontWeight: 900, lineHeight: 1 }}>{String(timeLeft.seconds).padStart(2, '0')}</div>
                 <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#666', marginTop: '0.5rem' }}>Segundos</div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
