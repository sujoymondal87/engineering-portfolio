import './App.css'

const systems = [
  { id: '01', name: 'No-Code App Builder', desc: 'Click-based app composition. Offline runtimes, AI agents, AR triggers, multilingual TTS, payments, real-time sync, geofencing — configurable without code.' },
  { id: '02', name: 'Offline-First Browser Runtime', desc: 'Service Workers, IndexedDB, blob chunk storage. localStorage failed at production media scale. Built custom chunk storage.' },
  { id: '03', name: 'AI Orchestration Middleware', desc: 'Multi-model routing across OpenAI, Claude, Gemini, DeepSeek. Stateful (Redis sessions) + Stateless (generation tasks). No LangChain.' },
  { id: '04', name: 'Real-Time Sync Engine', desc: 'WebSocket-based state sync across kiosks and touchpoints. Silent audio sync with hard-seek correction, scoped per app and block.' },
  { id: '05', name: 'Analytics Pipeline', desc: 'MySQL + Redis, no third-party warehouse. Four-stage evolution: SQL → precomputed JSON → chunking + token mapping → progressive batching + IndexedDB cache.' },
  { id: '06', name: 'Adaptive Pre-Cache Pipeline', desc: 'Priority-based download, checkpoint/resume, retry queues, shared media layer across apps. Resumable execution across browser sessions.' },
  { id: '07', name: 'AR Recognition + Face Detection', desc: 'Markerless artifact recognition via mind files. Jeeliz FaceFilter for 3D face overlays. GLTF models, facial event triggers — all browser-based.' },
  { id: '08', name: 'Indoor Floor Detection', desc: 'Mobile GPS median smoothing, GPS elevation for floor, sponsor-configured altitude ranges. No beacons required.' },
  { id: '09', name: 'Payment + Ticket Lifecycle', desc: 'Generated → Sold → Activated → Expired. Activation separate from payment. Offline payment blocked at backend — deliberate constraint, not a technical limitation.' },
  { id: '10', name: 'Publish-Time Feature Detection', desc: 'Builder scans block types on publish, generates feature manifest. Frontend loads only required JS/CSS. Custom code splitting at application level.' },
  { id: '11', name: 'Polygon Geofencing', desc: 'Polygon boundaries, not radius. Browser Geolocation API. Outdoor location-aware content delivery. Hidden scavenger hunt use case.' },
  { id: '12', name: 'Voice Synthesis Runtime', desc: 'Azure, Google, ElevenLabs, Gemini. Per-language named voices. Timed text pacing — waits for TTS completion before allowing navigation.' },
]

const stack = [
  'PHP', 'Node.js', 'TypeScript', 'MySQL', 'Redis',
  'JavaScript', 'IndexedDB', 'Service Workers', 'WebSockets',
  'OpenAI API', 'Claude API', 'Gemini API', 'DeepSeek',
  'Azure TTS', 'ElevenLabs', 'Stripe', 'PayPal',
  'Google Maps API', 'Jeeliz FaceFilter', 'MindAR',
  'DigitalOcean', 'PM2', 'AngularJS', 'React (learning)',
]

const posts = [
  { title: 'GPS altitude indoors is noisy. We built floor detection on it anyway.', url: 'https://linkedin.com/in/sujoymondal-tech' },
  { title: 'Payment is the wrong event to start a ticket\'s validity timer.', url: 'https://linkedin.com/in/sujoymondal-tech' },
  { title: 'We fixed the same analytics bottleneck four times. Different layer each time.', url: 'https://linkedin.com/in/sujoymondal-tech' },
  { title: 'In offline mode, we blocked the payment form entirely.', url: 'https://linkedin.com/in/sujoymondal-tech' },
  { title: 'Persistent memory made our AI app generation worse.', url: 'https://linkedin.com/in/sujoymondal-tech' },
  { title: 'The hardest engineering decision wasn\'t the offline runtime or AI orchestration.', url: 'https://linkedin.com/in/sujoymondal-tech' },
  { title: 'A tree has one path to every node. Real visitor flows don\'t work that way.', url: 'https://linkedin.com/in/sujoymondal-tech' },
]

function App() {
  return (
    <div className="portfolio">

      <nav className="nav">
        <span className="nav-logo">SM</span>
        <div className="nav-links">
          <a href="#built">Work</a>
          <a href="#systems">Systems</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-label">Co-Founder & CTO · MyAppZone / Neareo · Belgium</div>
        <h1 className="hero-name">Sujoy<br />Mondal</h1>
        <p className="hero-sub">10 years. One engineer. One platform.<br />30 production apps. 35 countries.</p>
        <div className="hero-cta">
          <a href="#systems" className="btn-primary">View Systems</a>
          <a href="#contact" className="btn-secondary">Contact</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">609</span>
            <span className="stat-label">Verified Reviews</span>
          </div>
          <div className="stat">
            <span className="stat-num">4.54</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat">
            <span className="stat-num">35+</span>
            <span className="stat-label">Countries</span>
          </div>
          <div className="stat">
            <span className="stat-num">20+</span>
            <span className="stat-label">Systems Built</span>
          </div>
        </div>
      </section>

      <section className="built" id="built">
        <div className="section-label">01 / What I Built</div>
        <h2 className="section-title">A no-code interactive app builder platform. Built alone.</h2>
        <div className="built-body">
          <p>MyAppZone (Neareo) is a SaaS platform serving museums, cathedrals, tourism institutions, and retail businesses across Europe under enterprise contracts. Sponsors configure offline runtimes, AI agents, AR triggers, multilingual TTS, payments, and geofencing — without writing a line of code.</p>
          <p>Architecture, implementation, debugging, and deployment: entirely solo. Product decisions came from my co-founder. Everything else came from me.</p>
          <p>Production use from 2022 through 2026. ~30 apps deployed. 609 verified reviews at 4.54/5 from visitors across 35+ countries.</p>
        </div>
        <div className="built-tags">
          <span className="tag">Europe Enterprise Contracts</span>
          <span className="tag">2-Person Company</span>
          <span className="tag">Solo Engineering</span>
          <span className="tag">Production 2022–2026</span>
        </div>
      </section>

      <section className="systems" id="systems">
        <div className="section-label">02 / Systems</div>
        <h2 className="section-title">20 production systems. All built, maintained, and debugged by one engineer.</h2>
        <div className="systems-grid">
          {systems.map(s => (
            <div className="system-card" key={s.id}>
              <span className="system-id">{s.id}</span>
              <h3 className="system-name">{s.name}</h3>
              <p className="system-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stack" id="stack">
        <div className="section-label">03 / Tech Stack</div>
        <h2 className="section-title">10 years of production decisions.</h2>
        <div className="stack-grid">
          {stack.map(tech => (
            <span className="stack-item" key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      <section className="writing" id="writing">
        <div className="section-label">04 / Writing</div>
        <h2 className="section-title">Engineering decisions. In public.</h2>
        <div className="posts-list">
          {posts.map((post, i) => (
            <a className="post-item" href={post.url} key={i} target="_blank" rel="noreferrer">
              <span className="post-num">0{i + 1}</span>
              <span className="post-title">{post.title}</span>
              <span className="post-arrow">→</span>
            </a>
          ))}
        </div>
        <a href="https://linkedin.com/in/sujoymondal-tech" className="btn-secondary" target="_blank" rel="noreferrer">
          All posts on LinkedIn →
        </a>
      </section>

      <section className="contact" id="contact">
        <div className="section-label">05 / Contact</div>
        <h2 className="section-title">Open to the right role.<br />Mid-June 2026.</h2>
        <p className="contact-sub">
          Senior Product Engineer · Platform Engineer · Founding Engineer<br />
          Remote · India-based · 25–30L INR
        </p>
        <div className="contact-links">
          <a href="https://linkedin.com/in/sujoymondal-tech" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/sujoymondal87" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      <footer className="footer">
        <span>Sujoy Mondal · 2026</span>
      </footer>

    </div>
  )
}

export default App