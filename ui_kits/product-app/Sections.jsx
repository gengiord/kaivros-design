// Kaivros Product App — components
// Mock product: a wellness/VR session platform.

function Sidebar({ current, onNav }) {
  const items = [
    { key: 'home', label: 'Home' },
    { key: 'sessions', label: 'Sessions' },
    { key: 'library', label: 'Library' },
    { key: 'progress', label: 'Progress' },
    { key: 'settings', label: 'Settings' },
  ];
  return (
    <aside style={{
      width: 240, background: '#fff', borderRight: '1px solid var(--border)',
      padding: 24, display: 'flex', flexDirection: 'column', gap: 28, flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src="../../assets/kaivros-logo.svg" style={{ height: 22 }} alt=""/>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map(it => {
          const active = current === it.key;
          return (
            <button key={it.key} onClick={() => onNav(it.key)} style={{
              border: 'none', background: active ? 'var(--lilla-lt)' : 'transparent',
              color: active ? 'var(--violet)' : 'var(--fg1)',
              fontFamily: 'var(--font-heading)', fontWeight: active ? 600 : 500, fontSize: 14,
              padding: '10px 14px', borderRadius: 'var(--radius-md)',
              textAlign: 'left', cursor: 'pointer', transition: 'all .2s ease',
            }}>{it.label}</button>
          );
        })}
      </nav>
      <div style={{ marginTop: 'auto', padding: 14, background: 'var(--cream)', borderRadius: 'var(--radius-md)' }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, marginBottom: 4 }}>Weekly streak</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--lilla-md)', lineHeight: 1 }}>6 days</div>
        <div style={{ fontSize: 11, color: 'var(--fg3)', marginTop: 6 }}>Keep it going.</div>
      </div>
    </aside>
  );
}

function TopBar({ user }) {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 32px', borderBottom: '1px solid var(--border)', background: '#fff',
    }}>
      <div style={{
        fontFamily: 'var(--font-heading)', fontSize: 11, fontWeight: 600,
        letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--fg3)',
      }}>Tuesday · April 20</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <button className="k-btn k-btn--outline k-btn--sm">Invite a friend</button>
        <div style={{
          width: 36, height: 36, borderRadius: '50%', background: 'var(--lilla-md)',
          color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14,
        }}>{user?.[0] || 'E'}</div>
      </div>
    </header>
  );
}

function HomeView({ onStart }) {
  return (
    <div style={{ padding: '40px 48px', maxWidth: 1100 }}>
      <div style={{
        fontFamily: 'var(--font-heading)', fontSize: 11, fontWeight: 600,
        letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--lilla-md)', marginBottom: 14,
      }}>Good morning, Elena</div>
      <h1 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 54, lineHeight: 1.05,
        letterSpacing: '-0.025em', marginBottom: 16, textWrap: 'pretty',
      }}>
        Breathe in. Your next <span style={{ color: 'var(--lilla-md)' }}>session</span> is ready.
      </h1>
      <p style={{ fontSize: 17, color: 'var(--fg2)', maxWidth: 540, marginBottom: 36, lineHeight: 1.6 }}>
        A 12-minute guided immersion in the Forest environment, tuned to wind you down before your afternoon.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 20, marginBottom: 40 }}>
        <div className="k-card" style={{
          padding: 0, overflow: 'hidden', background: 'linear-gradient(135deg, var(--lilla-md), var(--violet))',
          color: '#fff', minHeight: 260, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        }}>
          <div style={{ padding: 28 }}>
            <span className="k-badge" style={{ background: 'rgba(255,255,255,.2)', color: '#fff', marginBottom: 14 }}>Recommended</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 26, marginBottom: 6 }}>Forest · Evening calm</h3>
            <p style={{ fontSize: 14, opacity: 0.85, marginBottom: 18, lineHeight: 1.5 }}>12 min · Breathwork · Low intensity</p>
            <button onClick={onStart} className="k-btn" style={{
              background: '#fff', color: 'var(--violet)', fontWeight: 700,
            }}>Start session →</button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 20 }}>
          <div className="k-card k-card--hover" style={{ background: 'var(--orange-lt)', border: 'none' }}>
            <span className="k-badge k-badge--accent" style={{ marginBottom: 10 }}>New</span>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 17, marginBottom: 4 }}>Sunrise at altitude</h4>
            <p style={{ fontSize: 13, color: 'var(--fg2)' }}>8 min · Focus</p>
          </div>
          <div className="k-card k-card--hover">
            <span className="k-badge k-badge--neutral" style={{ marginBottom: 10 }}>Continue</span>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 17, marginBottom: 4 }}>Shoreline · Day 3 of 7</h4>
            <p style={{ fontSize: 13, color: 'var(--fg2)' }}>15 min · Sleep support</p>
          </div>
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, marginBottom: 16 }}>For this week</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {[
          { t: 'Deep rest', d: '18 min · Sleep', c: 'var(--lilla-lt)', b: 'Popular' },
          { t: 'Morning clarity', d: '10 min · Focus', c: 'var(--mint)', b: 'New' },
          { t: 'Walk in the hills', d: '22 min · Mood', c: 'var(--daffodil)', b: null },
        ].map(it => (
          <div key={it.t} className="k-card k-card--hover" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ height: 110, background: it.c }}/>
            <div style={{ padding: 18 }}>
              {it.b && <span className="k-badge k-badge--primary" style={{ marginBottom: 8 }}>{it.b}</span>}
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 16, marginBottom: 4 }}>{it.t}</h4>
              <p style={{ fontSize: 13, color: 'var(--fg2)' }}>{it.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SessionView({ onBack }) {
  const [phase, setPhase] = React.useState('ready'); // ready | running | done
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (phase !== 'running') return;
    const t = setInterval(() => setCount(c => {
      if (c >= 100) { setPhase('done'); return 100; }
      return c + 1;
    }), 60);
    return () => clearInterval(t);
  }, [phase]);

  return (
    <div style={{
      flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(180deg, var(--violet) 0%, var(--violet-dk) 100%)',
      color: '#fff', minHeight: 'calc(100vh - 73px)', padding: 48, position: 'relative',
    }}>
      <button onClick={onBack} style={{
        position: 'absolute', top: 24, left: 24, background: 'rgba(255,255,255,0.12)',
        border: '1px solid rgba(255,255,255,0.18)', color: '#fff', padding: '8px 14px',
        borderRadius: 'var(--radius-md)', cursor: 'pointer', fontFamily: 'var(--font-heading)',
        fontWeight: 500, fontSize: 13,
      }}>← Back</button>

      <div style={{ textAlign: 'center', maxWidth: 520 }}>
        <div style={{
          fontFamily: 'var(--font-heading)', fontSize: 11, fontWeight: 600,
          letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--lilla-lt)', marginBottom: 20,
        }}>Forest · Evening calm</div>

        {phase === 'ready' && (
          <>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 56, lineHeight: 1.1,
              letterSpacing: '-0.025em', marginBottom: 16,
            }}>Put on your headset.<br/>Find a soft seat.</h1>
            <p style={{ fontSize: 17, opacity: 0.8, marginBottom: 36, lineHeight: 1.6 }}>
              We'll guide the rest. 12 minutes, uninterrupted.
            </p>
            <button onClick={() => setPhase('running')} className="k-btn k-btn--accent k-btn--lg" style={{ padding: '14px 32px', height: 'auto', fontSize: 16 }}>Begin</button>
          </>
        )}

        {phase === 'running' && (
          <>
            <div style={{
              width: 180, height: 180, borderRadius: '50%', margin: '0 auto 36px',
              background: 'var(--lilla-md)', opacity: 0.85,
              transform: `scale(${1 + Math.sin(count / 8) * 0.15})`,
              transition: 'transform 0.4s ease-in-out',
              boxShadow: '0 0 80px rgba(169,143,216,0.5)',
            }}/>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36, marginBottom: 10 }}>
              {count % 16 < 8 ? 'Breathe in' : 'Breathe out'}
            </h2>
            <div style={{ width: 260, height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 2, margin: '24px auto 0', overflow: 'hidden' }}>
              <div style={{ width: `${count}%`, height: '100%', background: 'var(--lilla-lt)', transition: 'width 0.06s linear' }}/>
            </div>
          </>
        )}

        {phase === 'done' && (
          <>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 48, marginBottom: 14 }}>Nicely done.</h1>
            <p style={{ fontSize: 17, opacity: 0.8, marginBottom: 30 }}>That's 6 days in a row. Your streak continues.</p>
            <button onClick={onBack} className="k-btn k-btn--primary k-btn--lg">Back to home</button>
          </>
        )}
      </div>
    </div>
  );
}

function SignIn({ onSignIn }) {
  const [email, setEmail] = React.useState('');
  return (
    <div style={{
      minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr',
      background: 'var(--cream)',
    }}>
      <div style={{ padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 520 }}>
        <img src="../../assets/kaivros-logo.svg" style={{ height: 28, marginBottom: 48, alignSelf: 'flex-start' }} alt="Kaivros"/>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 44, lineHeight: 1.1,
          letterSpacing: '-0.025em', marginBottom: 12,
        }}>Welcome back.</h1>
        <p style={{ fontSize: 16, color: 'var(--fg2)', marginBottom: 36 }}>Sign in to continue your practice.</p>
        <form onSubmit={(e) => { e.preventDefault(); onSignIn(); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="k-field">
            <label>Email</label>
            <input className="k-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@kaivros.com"/>
          </div>
          <div className="k-field">
            <label>Password</label>
            <input className="k-input" type="password" placeholder="••••••••"/>
            <div className="hint">Password must be at least 8 characters</div>
          </div>
          <button type="submit" className="k-btn k-btn--primary k-btn--lg" style={{ marginTop: 8 }}>Sign in</button>
          <button type="button" className="k-btn k-btn--ghost">Create an account</button>
        </form>
      </div>
      <div style={{
        background: 'var(--lilla-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 30% 30%, var(--lilla-lt) 0%, transparent 60%)',
          opacity: 0.6,
        }}/>
        <div style={{ position: 'relative', color: '#fff', maxWidth: 420 }}>
          <div style={{
            fontFamily: 'var(--font-heading)', fontSize: 11, fontWeight: 600,
            letterSpacing: '0.28em', textTransform: 'uppercase', opacity: 0.75, marginBottom: 20,
          }}>Kaivros · Practice</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Calm you can step into.
          </h2>
          <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.6, opacity: 0.85 }}>
            Immersive wellness sessions, designed for the few minutes a day that matter most.
          </p>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Sidebar, TopBar, HomeView, SessionView, SignIn });
