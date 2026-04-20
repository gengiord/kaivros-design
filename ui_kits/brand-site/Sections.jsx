function NavBar({ active = 'brand' }) {
  const items = ['Brand', 'Downloads', 'Colors', 'Typography', 'Components', 'Press Kit'];
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 48px', borderBottom: '1px solid var(--border)',
      background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)',
      position: 'sticky', top: 0, zIndex: 10,
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <img src="../../assets/kaivros-logo.svg" style={{ height: 26 }} alt="Kaivros"/>
      </a>
      <div style={{ display: 'flex', gap: 28 }}>
        {items.map(it => (
          <a key={it} href="#" style={{
            fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 14,
            color: active === it.toLowerCase() ? 'var(--lilla-md)' : 'var(--fg1)',
            textDecoration: 'none', opacity: active === it.toLowerCase() ? 1 : 0.7,
          }}>{it}</a>
        ))}
      </div>
      <button className="k-btn k-btn--primary k-btn--sm">Download kit</button>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{ padding: '80px 48px 64px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{
        fontFamily: 'var(--font-heading)', fontSize: 12, fontWeight: 600,
        letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--lilla-md)',
        marginBottom: 20,
      }}>Brand guidelines · v2.4</div>
      <h1 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 1.05, letterSpacing: '-0.025em',
        color: 'var(--fg1)', marginBottom: 24, textWrap: 'pretty',
      }}>
        The visual system for <span style={{ color: 'var(--lilla-md)' }}>Kaivros</span>.
      </h1>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: 19, color: 'var(--fg2)',
        maxWidth: 620, lineHeight: 1.6,
      }}>
        Tokens, components, and patterns for the Kaivros ecosystem —
        calm, warm, and built to stay out of the way.
      </p>
      <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
        <button className="k-btn k-btn--primary k-btn--lg">Explore the system</button>
        <button className="k-btn k-btn--outline k-btn--lg">Download assets</button>
      </div>
    </section>
  );
}

function BrandShowcase() {
  return (
    <section style={{ padding: '0 48px 80px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{
        background: '#fff', borderRadius: 'var(--radius-2xl)', padding: 12,
        boxShadow: 'var(--shadow-card)', border: '1px solid var(--border)',
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gridTemplateRows: '1fr 1fr',
        gap: 8, aspectRatio: '16/9',
      }}>
        {/* Logo cell */}
        <div style={{
          gridRow: '1 / 3', background: 'var(--cream)', borderRadius: 'var(--radius-md)',
          display: 'flex', flexDirection: 'column', padding: '24px 28px',
        }}>
          <span style={{
            fontFamily: 'var(--font-heading)', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--lilla-md)',
          }}>Kaivros — Brand Card</span>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="../../assets/kaivros-logo.svg" style={{ width: '70%', maxWidth: 340 }} alt="Kaivros"/>
          </div>
        </div>
        {/* Palette */}
        <div style={{ background: '#fff', borderRadius: 'var(--radius-md)', overflow: 'hidden', display: 'flex' }}>
          {['#DDD1F2','#C5AEE8','#A98FD8','#8B6EC4','#493364','#1F1F1F'].map(c => (
            <div key={c} style={{ flex: 1, background: c }}/>
          ))}
        </div>
        {/* Usage cells */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          <div style={{ background: 'var(--coral)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
            <img src="../../assets/kaivros-logo-coral.svg" style={{ maxWidth: '100%', maxHeight: '100%' }}/>
          </div>
          <div style={{ background: 'var(--lilla-lt)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
            <img src="../../assets/kaivros-logo-lilla-lt.svg" style={{ maxWidth: '100%', maxHeight: '100%' }}/>
          </div>
          <div style={{ background: 'var(--black)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
            <img src="../../assets/kaivros-logo-black.svg" style={{ maxWidth: '100%', maxHeight: '100%' }}/>
          </div>
        </div>
      </div>
    </section>
  );
}

function TokenGrid() {
  const items = [
    { title: 'Colors', count: '23 tokens', desc: 'Lilla, violet, orange, and supporting accents.', color: 'var(--lilla-md)' },
    { title: 'Typography', count: '3 families', desc: 'Bricolage Grotesque, Outfit, Noto Sans.', color: 'var(--orange)' },
    { title: 'Spacing', count: '4px base', desc: 'Consistent rhythm across all layouts.', color: 'var(--violet)' },
    { title: 'Shadows', count: '9 elevations', desc: 'Soft, warm, never harsh.', color: 'var(--meadow)' },
  ];
  return (
    <section style={{ padding: '0 48px 96px', maxWidth: 1200, margin: '0 auto' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 32 }}>
        Design tokens
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {items.map(it => (
          <div key={it.title} className="k-card k-card--hover">
            <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', background: it.color, marginBottom: 16 }}/>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 18, marginBottom: 4 }}>{it.title}</h3>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg3)', marginBottom: 10 }}>{it.count}</div>
            <p style={{ fontSize: 13, color: 'var(--fg2)', lineHeight: 1.5 }}>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 48px', textAlign: 'center' }}>
      <div className="k-wm" style={{ marginBottom: 10 }}>
        <span className="kk" style={{ fontSize: 22, color: 'var(--lilla-md)' }}>K</span>
        <span className="rr" style={{ fontSize: 20, color: 'var(--fg1)' }}>aivros</span>
      </div>
      <p style={{ fontSize: 12, color: 'var(--fg3)' }}>brand.kaivros.com · v2.4</p>
    </footer>
  );
}

Object.assign(window, { NavBar, Hero, BrandShowcase, TokenGrid, Footer });
