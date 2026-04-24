import styles from "./page.module.css";

// Premium Coming Soon Component - Stitch Inspired
function ComingSoon() {
  return (
    <div style={{
      backgroundColor: 'var(--background)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Tonal Layer (Stitch style) */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '50vw',
        height: '80vh',
        backgroundColor: 'var(--surface-container-low)',
        borderRadius: 'var(--radius)',
        zIndex: 0
      }}></div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '4rem',
        alignItems: 'center',
        zIndex: 1
      }}>
        {/* Text Content */}
        <div className="animate-fade-in">
          <span style={{
            color: 'var(--primary)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.4em',
            fontSize: '0.75rem',
            marginBottom: '2.5rem',
            display: 'block'
          }}>Atelier Practiiko</span>

          <h1 style={{
            fontFamily: 'var(--font-noto-serif)',
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            lineHeight: 0.85,
            color: 'var(--foreground)',
            marginBottom: '3rem',
            letterSpacing: '-0.05em'
          }}>
            Lujo <br />
            <span style={{ color: 'var(--primary)', marginLeft: '1.5rem' }}>Modular.</span>
          </h1>

          <p style={{
            fontSize: '1.125rem',
            color: 'var(--secondary)',
            maxWidth: '400px',
            lineHeight: 1.8,
            marginBottom: '4rem'
          }}>
            Estamos curando una experiencia táctil donde la simplicidad se encuentra con la artesanía. La galería está casi lista para ser habitada.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{
              width: '40px',
              height: '1px',
              backgroundColor: 'var(--primary)'
            }}></div>
            <a
              href="https://www.instagram.com/practiiko/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.875rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--foreground)'
              }}
            >
              @practiiko
            </a>
          </div>
        </div>

        {/* Visual Content (Asymmetric & Overlapping) */}
        <div style={{ position: 'relative' }} className="animate-fade-in">
          <div style={{
            aspectRatio: '4/5',
            width: '100%',
            backgroundColor: 'var(--surface-container-high)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.1)'
          }}>
            <img
              src="/hero-coming-soon.png"
              alt="Practiiko Luxury Modular Sofa"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(0.1) contrast(1.05)'
              }}
            />
          </div>

          {/* Floating Glass Element */}
          <div className="glass" style={{
            position: 'absolute',
            bottom: '-2rem',
            left: '-3rem',
            padding: '2.5rem',
            borderRadius: 'var(--radius)',
            maxWidth: '300px',
            border: '1px solid var(--border-ghost)',
            backdropFilter: 'blur(30px)'
          }}>
            <span style={{
              display: 'block',
              fontSize: '0.625rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--primary)',
              marginBottom: '1rem'
            }}>Status</span>
            <p style={{
              fontSize: '1rem',
              fontWeight: 600,
              lineHeight: 1.4,
              color: 'var(--foreground)'
            }}>
              Montaje de la Galería <br /> en progreso final.
            </p>
          </div>
        </div>
      </div>

      {/* Vertical Branding */}
      <div style={{
        position: 'absolute',
        right: '2rem',
        top: '50%',
        transform: 'rotate(90deg) translateY(-50%)',
        transformOrigin: 'right center',
        fontSize: '0.75rem',
        fontWeight: 500,
        letterSpacing: '0.5em',
        textTransform: 'uppercase',
        color: 'var(--secondary)',
        opacity: 0.3,
        pointerEvents: 'none'
      }}>
        Tactile Gallery Collection 2026
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

