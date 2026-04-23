import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className="glass" style={{ padding: '1rem 2rem', position: 'fixed', width: '100%', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', fontWeight: 700 }}>Practiiko</h1>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#features">Características</a>
            <a href="#about">Nosotros</a>
            <button className="btn-primary" style={{ background: 'var(--primary)', padding: '0.5rem 1.25rem', borderRadius: 'var(--radius)', color: 'white' }}>Empezar</button>
          </div>
        </div>
      </nav>

      <header className={styles.hero}>
        <h2 style={{ fontSize: '4rem', marginBottom: '1.5rem', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800 }}>
          Gestión inteligente para <br /> mentes creativas.
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          La plataforma definitiva que separa la complejidad técnica de la libertad creativa. Autogestiona tu web con Practiiko.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button style={{ padding: '1rem 2rem', background: 'var(--primary)', borderRadius: 'var(--radius)', fontWeight: 600 }}>Prueba Gratis</button>
          <button className="glass" style={{ padding: '1rem 2rem', borderRadius: 'var(--radius)', fontWeight: 600 }}>Ver Demo</button>
        </div>
      </header>

      <section className={styles.grid} id="features">
        <div className="glass-card">
          <h3>SEO Dinámico</h3>
          <p>Optimización automática para buscadores en cada publicación.</p>
        </div>
        <div className="glass-card">
          <h3>Autogestión</h3>
          <p>Toma el control total de tu contenido sin depender de terceros.</p>
        </div>
        <div className="glass-card">
          <h3>Rendimiento Premium</h3>
          <p>Arquitectura Next.js diseñada para la velocidad y conversión.</p>
        </div>
      </section>
    </div>
  );
}
