import { useState, useEffect } from 'react';

// Premium Coming Soon Component - Exact Image Replication
function ComingSoon() {
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
      {/* Background Shapes Pattern (Simplified CSS version) */}
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

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  const comingSoonVar = process.env.COMING_SOON || process.env.NEXT_PUBLIC_COMING_SOON;
  const isComingSoon = comingSoonVar?.trim().toLowerCase() === 'true';

  console.log('[DEBUG] COMING_SOON check:', { 
    raw: comingSoonVar, 
    evaluated: isComingSoon 
  });

  if (isComingSoon) {
    return <ComingSoon />;
  }

  return (
    <div className={styles.container}>
      {/* Navigation - Glassmorphism Editorial Style */}
      <nav className="glass" style={{ 
        padding: '1.5rem 3rem', 
        position: 'fixed', 
        width: 'calc(100% - 4rem)', 
        top: '2rem',
        left: '2rem',
        right: '2rem',
        zIndex: 100,
        backgroundColor: 'rgba(252, 249, 248, 0.7)',
        backdropFilter: 'blur(20px)',
        borderRadius: 'var(--radius)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <h1 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 800, 
          fontFamily: 'var(--font-noto-serif)',
          color: 'var(--foreground)',
          letterSpacing: '-0.03em'
        }}>Practiiko</h1>
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          <a href="#concept" style={{ fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Galería</a>
          <a href="#designs" style={{ fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Módulos</a>
          <button style={{ 
            background: 'var(--primary)', 
            padding: '0.75rem 2rem', 
            borderRadius: 'var(--radius)', 
            color: 'white',
            fontWeight: 700,
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>Comprar</button>
        </div>
      </nav>

      {/* Hero Section - Intentional Asymmetry */}
      <header className="section-base" style={{ 
        paddingTop: '20vh', 
        paddingBottom: 'var(--space-hero)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '4rem',
          padding: '0 2rem'
        }} className="animate-fade-in">
          <div style={{ alignSelf: 'center' }}>
            <span style={{ 
              color: 'var(--primary)', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em',
              fontSize: '0.75rem',
              display: 'block',
              marginBottom: '2rem'
            }}>Atelier Practiiko</span>
            <h2 style={{ 
              fontSize: '6rem', 
              lineHeight: 0.95,
              marginBottom: '2.5rem', 
              color: 'var(--foreground)',
              fontWeight: 700,
              fontFamily: 'var(--font-noto-serif)',
              letterSpacing: '-0.04em'
            }}>
              El lujo que llega <br /> <span style={{ color: 'var(--primary)' }}>en caja.</span>
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--secondary)', 
              maxWidth: '500px', 
              marginBottom: '4rem',
              lineHeight: 1.7
            }}>
              Una experiencia de diseño táctil donde la simplicidad modular se encuentra con la artesanía moderna. Tu espacio, rediseñado.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <button style={{ 
                padding: '1.5rem 3rem', 
                background: 'var(--primary)', 
                color: 'white',
                borderRadius: 'var(--radius)', 
                fontWeight: 700,
                fontSize: '1rem',
                textTransform: 'uppercase'
              }}>Explorar</button>
            </div>
          </div>
          {/* Asymmetric Image/Visual block */}
          <div style={{ 
            position: 'relative',
            height: '600px',
            backgroundColor: 'var(--surface-container-low)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            marginTop: '4rem'
          }}>
            <div style={{
              position: 'absolute',
              top: '10%',
              left: '-10%',
              width: '120%',
              height: '100%',
              background: 'url("https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070") center/cover',
              filter: 'grayscale(0.2) contrast(1.1)'
            }}></div>
          </div>
        </div>
      </header>

      {/* Concept Section - Tonal Layering (No Lines) */}
      <section id="concept" className="section-alt" style={{ padding: 'var(--space-section) 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2px', // Invisible gap for tonal shift alignment
            backgroundColor: 'transparent'
          }}>
            <div className="card-tactile" style={{ padding: '5rem 3rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem', display: 'block' }}>01</span>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-noto-serif)' }}>Logística Invisible</h3>
              <p style={{ color: 'var(--secondary)', lineHeight: 1.8 }}>Tu sofá llega en módulos compactos, eliminando la fricción de la entrega tradicional.</p>
            </div>
            <div className="card-tactile" style={{ padding: '5rem 3rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem', display: 'block' }}>02</span>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-noto-serif)' }}>Artesanía Modular</h3>
              <p style={{ color: 'var(--secondary)', lineHeight: 1.8 }}>Sin herramientas, sin manuales infinitos. El diseño se ensambla con la intuición de una galería.</p>
            </div>
            <div className="card-tactile" style={{ padding: '5rem 3rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem', display: 'block' }}>03</span>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-noto-serif)' }}>Evolución Táctil</h3>
              <p style={{ color: 'var(--secondary)', lineHeight: 1.8 }}>Practiiko no es estático. Crece y se transforma según el ritmo de tu vida.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Quote Section */}
      <section className="section-base" style={{ padding: 'var(--space-section) 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <blockquote style={{ 
            fontSize: '2.5rem', 
            fontFamily: 'var(--font-noto-serif)', 
            lineHeight: 1.3,
            color: 'var(--foreground)',
            fontStyle: 'italic'
          }}>
            "En Practiiko, no vendemos muebles; curamos la atmósfera de tu hogar a través de la simplicidad táctil."
          </blockquote>
          <cite style={{ display: 'block', marginTop: '3rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--primary)' }}>
            — Atelier Practiiko
          </cite>
        </div>
      </section>

      {/* Social CTA */}
      <footer className="section-highlight" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Inspiración diaria</h2>
        <a 
          href="https://www.instagram.com/practiiko/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            fontSize: '2rem', 
            fontFamily: 'var(--font-noto-serif)',
            color: 'var(--primary)',
            textDecoration: 'none',
            borderBottom: '2px solid var(--primary)',
            paddingBottom: '0.5rem'
          }}
        >
          @practiiko
        </a>
      </footer>
    </div>
  );
}

