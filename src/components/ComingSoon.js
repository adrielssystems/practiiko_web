"use client";

import { useState, useEffect } from 'react';

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({ days: 38, hours: 14, minutes: 5 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59 };
        if (prev.days > 0) return { days: prev.days - 1, hours: 23, minutes: 59 };
        return prev;
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '4rem 2rem',
      fontFamily: 'var(--font-manrope), sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Shapes Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '300px',
        opacity: 0.1,
        zIndex: 0,
        backgroundImage: `radial-gradient(circle at 20px 20px, #E67E22 2px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center', zIndex: 1 }}>
        {/* Logo Section */}
        <div style={{ marginBottom: '5rem', display: 'flex', justifyContent: 'center' }}>
           <div style={{ fontSize: '5rem', fontWeight: 900, letterSpacing: '-0.04em', display: 'flex', alignItems: 'baseline' }}>
             <span style={{ color: '#E67E22' }}>Pract</span>
             <span style={{ color: '#E67E22', position: 'relative' }}>
               i<span style={{ color: '#004A8D', position: 'absolute', top: '-0.15em', left: '0.45em', fontSize: '0.8em' }}>•</span>
             </span>
             <span style={{ color: '#E67E22', position: 'relative' }}>
               i<span style={{ color: '#004A8D', position: 'absolute', top: '-0.15em', left: '0.45em', fontSize: '0.8em' }}>•</span>
             </span>
             <span style={{ color: '#E67E22' }}>ko</span>
           </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.1fr 0.9fr', 
          gap: '3rem', 
          alignItems: 'center', 
          textAlign: 'left' 
        }}>
          <div className="animate-fade-in">
            <h2 style={{ 
              color: '#E67E22', 
              fontSize: '2.5rem', 
              fontWeight: 900, 
              lineHeight: 1, 
              marginBottom: '1.5rem', 
              textTransform: 'uppercase',
              letterSpacing: '-0.02em'
            }}>
              NUESTRA SOLUCIÓN ESTÁ LLEGANDO
            </h2>
            <p style={{ 
              color: '#1B1C1C', 
              fontSize: '1.125rem', 
              lineHeight: 1.4, 
              marginBottom: '3rem',
              fontWeight: 500
            }}>
              Diseño inteligente, envío eficiente. Estamos empacando al vacío los muebles más cómodos y prácticos para ti. Prepárate para la innovación.
            </p>

            {/* Countdown Container */}
            <div style={{ 
              display: 'flex', 
              gap: '2rem', 
              alignItems: 'center', 
              marginBottom: '4rem' 
            }}>
               <div style={{ textAlign: 'center' }}>
                 <div style={{ color: '#D35400', fontSize: '4rem', fontWeight: 900, lineHeight: 1 }}>{timeLeft.days}</div>
                 <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#666', marginTop: '0.5rem' }}>Días</div>
               </div>
               <div style={{ width: '1px', height: '60px', backgroundColor: '#E0E0E0' }}></div>
               <div style={{ textAlign: 'center' }}>
                 <div style={{ color: '#D35400', fontSize: '4rem', fontWeight: 900, lineHeight: 1 }}>{timeLeft.hours}</div>
                 <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#666', marginTop: '0.5rem' }}>Horas</div>
               </div>
               <div style={{ width: '1px', height: '60px', backgroundColor: '#E0E0E0' }}></div>
               <div style={{ textAlign: 'center' }}>
                 <div style={{ color: '#D35400', fontSize: '4rem', fontWeight: 900, lineHeight: 1 }}>{String(timeLeft.minutes).padStart(2, '0')}</div>
                 <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#666', marginTop: '0.5rem' }}>Minutos</div>
               </div>
            </div>

            {/* CTA Form */}
            <div style={{ 
              display: 'flex', 
              border: '1px solid #E0E0E0', 
              borderRadius: '4px', 
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
              <input 
                type="email" 
                placeholder="Ingresa tu correo para ser el primero en saber..." 
                style={{ 
                  flex: 1, 
                  padding: '1.25rem', 
                  border: 'none', 
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
              <button style={{ 
                backgroundColor: '#004A8D', 
                color: 'white', 
                padding: '0 2rem', 
                fontWeight: 800, 
                textTransform: 'uppercase', 
                fontSize: '0.9rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}>
                NOTIFÍQUENME
              </button>
            </div>
          </div>

          {/* Visual Content */}
          <div style={{ position: 'relative' }} className="animate-fade-in">
            <div style={{
              padding: '1rem',
              backgroundColor: '#F8F9FA',
              borderRadius: '2rem',
              transform: 'rotate(2deg)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
              <img 
                src="/vacuum-package.png" 
                alt="Practiiko Vacuum Package" 
                style={{ 
                  width: '100%', 
                  borderRadius: '1.5rem',
                  display: 'block'
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
