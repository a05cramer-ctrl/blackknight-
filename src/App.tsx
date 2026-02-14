import './App.css'
import heroImage from './image.png'
import loreImage from './image copy.png'
import featuredImage from './image copy 2.png'

const BATTLE_PASS_TIERS = [
  { tier: 1, reward: '100 $BKNGHT', unlocked: true },
  { tier: 2, reward: 'Black Knight Banner', unlocked: true },
  { tier: 3, reward: '250 $BKNGHT', unlocked: true },
  { tier: 4, reward: 'Emote: Victory Royale', unlocked: true },
  { tier: 5, reward: '500 $BKNGHT', unlocked: true },
  { tier: 6, reward: 'Loading Screen', unlocked: true },
  { tier: 7, reward: '750 $BKNGHT', unlocked: true },
  { tier: 8, reward: 'Spray: Knight Emblem', unlocked: true },
  { tier: 9, reward: '1000 $BKNGHT', unlocked: true },
  { tier: 10, reward: 'Wrap: Dark Steel', unlocked: true },
  { tier: 11, reward: '1500 $BKNGHT', unlocked: true },
  { tier: 12, reward: 'Back Bling: Shield', unlocked: true },
  { tier: 13, reward: '2000 $BKNGHT', unlocked: true },
  { tier: 14, reward: 'Pickaxe: Knight Sword', unlocked: true },
  { tier: 15, reward: '2500 $BKNGHT', unlocked: true },
  { tier: 16, reward: 'Glider: Dragon Wings', unlocked: true },
  { tier: 17, reward: '3000 $BKNGHT', unlocked: false },
  { tier: 18, reward: 'Style: Flaming Eyes', unlocked: false },
  { tier: 19, reward: '5000 $BKNGHT', unlocked: false },
  { tier: 20, reward: 'LEGENDARY: Black Knight Skin', unlocked: false },
]


function App() {
  return (
    <div className="landing">
      <div className="fortnite-bg" />
      <div className="floating-particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="particle" style={{ '--i': i } as React.CSSProperties} />
        ))}
      </div>

      <nav className="nav">
        <div className="nav-brand">
          <span className="ticker">$BKNGHT</span>
          <span className="brand-name">BLACK KNIGHT</span>
        </div>
        <div className="nav-links">
          <a href="#lore">STORY</a>
          <a href="#featured">FEATURED</a>
          <a href="#battlepass">BATTLE PASS</a>
          <a href="#arena" className="nav-cta">PLAY NOW</a>
        </div>
      </nav>

      {/* Hero - Fortnite-style full bleed */}
      <section className="hero-banner">
        <div className="hero-bg-overlay" />
        <div className="hero-content">
          <span className="hero-tag">LEGENDARY • SEASON 1</span>
          <h1 className="hero-headline">BLACK KNIGHT</h1>
          <p className="hero-tagline">The last guardian of the arena. Victory or oblivion.</p>
          <div className="hero-actions">
            <a href="#" className="quicklink quicklink-chart">
            <span className="ql-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </span>
            <span className="ql-label">Chart</span>
            </a>
            <a href="https://x.com/BlackKnight_dev" target="_blank" rel="noopener noreferrer" className="quicklink quicklink-twitter">
            <span className="ql-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </span>
            <span className="ql-label">Twitter</span>
            </a>
          </div>
        </div>
        <div className="hero-character">
          <img src={heroImage} alt="Black Knight" />
        </div>
      </section>

      {/* Lore Section */}
      <section className="lore-section" id="lore">
        <div className="lore-layout">
          <div className="lore-image-wrap">
            <img src={loreImage} alt="Black Knight - The Guardian" className="lore-img" />
          </div>
          <div className="lore-content">
            <span className="lore-label">ORIGIN</span>
            <h2>The Black Knight</h2>
            <p className="lore-lead">
              Born in the storm. Forged in the arena. The Black Knight emerged from the chaos of the first collapse—a lone survivor who turned survival into supremacy.
            </p>
            <p>
              Clad in armor darkened by ash and flame, the Knight became legend through sheer dominance. Victory Royale after Victory Royale. The $BKNGHT token carries that legacy—a symbol for those who refuse to back down. <strong>The arena bows to no one. Except the Black Knight.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Featured - Large character moment */}
      <section className="featured-section" id="featured">
        <div className="featured-bg" />
        <div className="featured-content">
          <span className="featured-badge">VICTORY ROYALE</span>
          <h2>LAST ONE STANDING</h2>
          <p>The storm closes. The arena empties. Only the Black Knight remains.</p>
        </div>
        <div className="featured-character">
          <img src={featuredImage} alt="Black Knight - Victory" className="featured-img" />
        </div>
      </section>

      {/* Battle Pass */}
      <section className="battlepass-section" id="battlepass">
        <h2 className="section-title">
          <span className="section-title-bg">REWARDS</span>
          <span className="section-title-text">BATTLE PASS</span>
        </h2>
        <p className="section-subtitle">20 tiers. Exclusive Black Knight rewards.</p>
        <div className="bp-progress-bar">
          <div className="bp-progress-fill" style={{ width: '80%' }} />
          <span className="bp-progress-text">16 / 20 UNLOCKED</span>
        </div>
        <div className="bp-tiers-grid">
          {BATTLE_PASS_TIERS.map((t) => (
            <div key={t.tier} className={`bp-tier-card ${t.unlocked ? 'unlocked' : 'locked'}`}>
              <div className="bp-tier-number">{t.tier}</div>
              <div className="bp-tier-reward">{t.reward}</div>
              <div className="bp-tier-status">{t.unlocked ? '✓' : '🔒'}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats + CTA */}
      <section className="stats-section">
        <h2 className="section-title">
          <span className="section-title-bg">LOADOUT</span>
          <span className="section-title-text">TOKEN STATS</span>
        </h2>
        <div className="stats-grid">
          <div className="stat-card"><span className="stat-value">1B</span><span className="stat-label">SUPPLY</span></div>
          <div className="stat-card"><span className="stat-value">0%</span><span className="stat-label">TAX</span></div>
          <div className="stat-card"><span className="stat-value">LP</span><span className="stat-label">BURNED</span></div>
        </div>
      </section>

      <section className="arena-cta" id="arena">
        <h2>JOIN THE ARENA</h2>
        <p>Drop in. Dominate. Victory Royale.</p>
        <a href="#" className="ft-cta">PLAY NOW</a>
      </section>

      <footer className="footer">
        <span>$BKNGHT • Black Knight • Season 1</span>
      </footer>
    </div>
  )
}

export default App
