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
    <>
      <style jsx>{`
        .coming-soon-container {
          background-color: #FFFFFF;
          background-image: url("/coming-soon-bg.png");
          background-size: 85%;
          background-position: right bottom;
          background-repeat: no-repeat;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          font-family: var(--font-manrope), sans-serif;
          position: relative;
          overflow: hidden;
          justify-content: center;
        }

        .content-wrapper {
          max-width: 1200px;
          width: 100%;
          text-align: left;
          z-index: 1;
          margin-top: -5vh;
        }

        .text-block {
          max-width: 700px;
        }

        .headline {
          color: #E67E22;
          font-size: 4.5rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 4rem;
          letter-spacing: -0.04em;
        }

        .countdown-container {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          margin-bottom: 5rem;
        }

        .countdown-item {
          text-align: center;
          min-width: 80px;
        }

        .countdown-value {
          color: #D35400;
          font-size: 4rem;
          font-weight: 900;
          line-height: 1;
        }

        .countdown-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #666;
          margin-top: 0.5rem;
        }

        .divider {
          width: 1px;
          height: 50px;
          background-color: #E0E0E0;
        }

        @media (max-width: 1024px) {
          .coming-soon-container {
            background-size: 60%;
          }
          .headline {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .coming-soon-container {
            background-size: 250%; /* Much larger to zoom in on the hand */
            background-position: 85% bottom; /* Focus on the right side where the hand is */
            padding: 1rem;
            justify-content: flex-start;
            padding-top: 8vh;
          }

          .content-wrapper {
            text-align: center;
            margin-top: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .text-block {
            max-width: 100%;
          }

          .headline {
            font-size: 2.5rem;
            margin-bottom: 2rem;
          }

          .countdown-container {
            gap: 1rem;
            justify-content: center;
            margin-bottom: 3rem;
          }

          .countdown-item {
            min-width: 60px;
          }

          .countdown-value {
            font-size: 2.5rem;
          }

          .divider {
            height: 30px;
          }
        }

        @media (max-width: 480px) {
          .headline {
            font-size: 2.2rem;
          }
          .countdown-container {
            gap: 0.5rem;
          }
          .countdown-item {
            min-width: 50px;
          }
          .countdown-value {
            font-size: 1.8rem;
          }
        }
      `}</style>

      <div className="coming-soon-container">
        {/* Background Shapes Pattern */}
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

        <div className="content-wrapper">
          <div className="text-block">
            <div className="animate-fade-in">
              <h2 className="headline">
                ¡Pronto estaremos <br /> 
                <span style={{ color: '#004A8D' }}>en línea</span> para ustedes!
              </h2>

              <div className="countdown-container">
                 <div className="countdown-item">
                   <div className="countdown-value">{timeLeft.days}</div>
                   <div className="countdown-label">Días</div>
                 </div>
                 <div className="divider"></div>
                 <div className="countdown-item">
                   <div className="countdown-value">{timeLeft.hours}</div>
                   <div className="countdown-label">Horas</div>
                 </div>
                 <div className="divider"></div>
                 <div className="countdown-item">
                   <div className="countdown-value">{timeLeft.minutes}</div>
                   <div className="countdown-label">Minutos</div>
                 </div>
                 <div className="divider"></div>
                 <div className="countdown-item">
                   <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
                   <div className="countdown-label">Segundos</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
