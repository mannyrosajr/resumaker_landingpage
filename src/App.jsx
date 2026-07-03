import heroPic from './assets/hero-pic.png'
import resumakerIcon from './assets/resumaker-icon.svg'
import './App.css'

const detour = [
  {
    title: 'The usual detour',
    items: [
      'Copy the job description',
      'Paste it into another AI tool',
      'Rewrite the long draft',
      'Fix the layout',
      'Find the posting again',
    ],
  },
  {
    title: 'Resumaker',
    items: [
      'Stay on the posting',
      'Open the extension',
      'Answer only real gaps',
      'Export a one-page PDF',
      'Apply while the role is still in front of you',
    ],
  },
]

const roleSignals = [
  {
    role: 'Business roles',
    text: 'Lead with case work, models, research, operations projects, campus jobs, and measurable ownership.',
  },
  {
    role: 'Tech roles',
    text: 'Lead with shipped features, APIs, GitHub projects, debugging work, systems thinking, and tools used.',
  },
  {
    role: 'Data and product roles',
    text: 'Lead with SQL, dashboards, user research, analysis, process changes, and decisions backed by evidence.',
  },
]

const proofNotes = [
  {
    title: 'Show the work',
    text: 'NACE advises students to show examples of skills, not just list the skill names.',
    source: 'NACE',
    url: 'https://www.naceweb.org/talent-acquisition/candidate-selection/the-key-skills-employers-seek-on-college-students-resumes',
  },
  {
    title: 'The posting is the brief',
    text: 'USAJOBS advises applicants to address the job announcement and use similar terms where relevant.',
    source: 'USAJOBS',
    url: 'https://help.usajobs.gov/faq/application/documents/resume/what-to-include',
  },
  {
    title: 'Keywords affect ranking',
    text: 'WIRED covered a ranking test where job-posting keywords changed algorithmic placement by up to 16 spots.',
    source: 'WIRED',
    url: 'https://www.wired.com/story/job-applicants-hack-resume-reading-software/',
  },
]

const steps = [
  {
    label: '01',
    title: 'Build your profile',
    text: 'Add internships, projects, coursework, clubs, certifications, skills, and early work experience once.',
  },
  {
    label: '02',
    title: 'Open a posting',
    text: 'Browse normally. Resumaker detects the role from LinkedIn, Handshake, Indeed, Greenhouse, Lever, and most career pages.',
  },
  {
    label: '03',
    title: 'Generate in context',
    text: 'The extension selects the relevant proof, mirrors supported job language, and asks questions when the profile is not enough.',
  },
  {
    label: '04',
    title: 'Export and apply',
    text: 'Preview, copy, or download a one-page PDF without turning the application into another editing session.',
  },
]

const guardrails = [
  {
    title: 'Uses',
    items: [
      'Facts from your profile',
      'Answers you confirm',
      'Relevant job-posting language',
      'Real projects, roles, coursework, and skills',
    ],
  },
  {
    title: 'Rejects',
    items: [
      'Skills you do not have',
      'Fake metrics or dates',
      'Inflated job titles',
      'Generic resume filler',
    ],
  },
]

const plans = [
  {
    name: 'Free',
    price: '$0',
    detail: '3 resumes to start, then 1 every 24 hours',
    includes: ['Profile builder', 'Job detection', 'One-page PDF export'],
    cta: 'Start free',
  },
  {
    name: 'Plus',
    price: '$5/mo',
    detail: '40 tailored resumes per month',
    includes: [
      'Profile builder',
      'Job detection',
      'AI skill gap prompts',
      'One-page PDF export',
      'Searchable history',
    ],
    cta: 'Choose Plus',
    featured: true,
  },
  {
    name: 'Pro',
    price: '$12/mo',
    detail: '125 tailored resumes per month',
    includes: [
      'Profile builder',
      'Job detection',
      'AI skill gap prompts',
      'One-page PDF export',
      'Searchable history',
      'Resume-to-job fit rating',
      'AI-assisted revision',
      'Retry tools',
    ],
    cta: 'Choose Pro',
    premium: true,
  },
]

const faqs = [
  {
    question: 'Does Resumaker invent experience?',
    answer:
      'No. It only uses your saved profile and answers you confirm. If something is not supported, it stays out.',
  },
  {
    question: 'Do I paste the job description?',
    answer:
      'No. Resumaker reads the job posting from the tab you are already on.',
  },
  {
    question: 'How fast can it generate a resume?',
    answer:
      'Under 30 seconds. At that pace, you can generate up to 20 tailored resumes in 10 minutes.',
  },
  {
    question: 'How is this different from another AI tool?',
    answer:
      'It is faster and more reliable. You do not leave the posting, paste the job description, or clean up a long generic draft. Resumaker works from the current tab and writes for a one-page resume.',
  },
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Resumaker home">
          <img className="brand-mark" src={resumakerIcon} alt="" />
          <span>Resumaker</span>
        </a>
        <nav className="nav-links" aria-label="Page sections">
          <a href="#why">Problem</a>
          <a href="#flow">Flow</a>
          <a href="#fit">Fit</a>
          <a href="#guardrails">Accuracy</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-cta" href="#pricing">
          Add to Chrome
        </a>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy-wrap">
            <h1 id="hero-title">Resumaker. Stand out today.</h1>
            <p className="hero-copy">
              A Chrome extension that turns the job posting in your current tab
              into a tailored, one-page resume. No paste box. No resume rewrite
              detour. No coming back to the application cold.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#pricing">
                Add to Chrome
              </a>
              <a className="secondary-button" href="#why">
                Why it matters
              </a>
            </div>
            <div className="hero-proof" aria-label="Product guarantees">
              <span>Same tab</span>
              <span>Grounded in your profile</span>
              <span>One-page PDF</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Resumaker product preview">
            <img
              className="promo-art"
              src={heroPic}
              alt="Resumaker Chrome extension hero showing job detection and tailored resume generation"
            />
          </div>
        </section>

        <section className="section detour-section" id="why" aria-labelledby="why-title">
          <div className="section-heading">
            <p className="eyebrow">The problem</p>
            <h2 id="why-title">Leaving the tab costs momentum.</h2>
          </div>
          <div className="detour-grid">
            {detour.map((group) => (
              <article className="list-card align-start" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="flow" aria-labelledby="flow-title">
          <div className="section-heading sticky-heading">
            <p className="eyebrow">The flow</p>
            <h2 id="flow-title">Built for the application tab.</h2>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <article className="step-card" key={step.title}>
                <span>{step.label}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section fit-section" id="fit" aria-labelledby="fit-title">
          <div className="section-heading">
            <p className="eyebrow">The advantage</p>
            <h2 id="fit-title">Tailoring changes the signal.</h2>
            <p>
              A resume should lead with the proof that matches the role, then
              cut what does not help.
            </p>
          </div>
          <div className="role-grid">
            {roleSignals.map((signal) => (
              <article className="role-card" key={signal.role}>
                <span>{signal.role}</span>
                <p>{signal.text}</p>
              </article>
            ))}
          </div>
          <div className="proof-strip" aria-label="Supporting sources">
            {proofNotes.map((note) => (
              <a href={note.url} target="_blank" rel="noreferrer" key={note.title}>
                <strong>{note.title}</strong>
                <span>{note.text}</span>
                <em>{note.source}</em>
              </a>
            ))}
          </div>
        </section>

        <section
          className="section guardrail-section"
          id="guardrails"
          aria-labelledby="guardrail-title"
        >
          <div className="section-heading">
            <p className="eyebrow">The boundary</p>
            <h2 id="guardrail-title">Frame it better. Do not fake it.</h2>
            <p>
              Resumaker can reframe real experience. It cannot invent a better
              candidate.
            </p>
          </div>
          <div className="guardrail-grid">
            {guardrails.map((group) => (
              <article className="list-card align-start" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section pricing-section"
          id="pricing"
          aria-labelledby="pricing-title"
        >
          <div className="section-heading centered">
            <p className="eyebrow">Pricing</p>
            <h2 id="pricing-title">Pick your application pace.</h2>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                className={`price-card ${plan.featured ? 'featured' : ''} ${plan.premium ? 'premium' : ''}`}
                key={plan.name}
              >
                <h3>{plan.name}</h3>
                <p className="price">{plan.price}</p>
                <p className="plan-detail">{plan.detail}</p>
                <ul>
                  {plan.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#top">{plan.cta}</a>
              </article>
            ))}
          </div>
          <p className="billing-note">
            Monthly billing. Cards accepted worldwide.
          </p>
        </section>

        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="section-heading sticky-heading">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title">Straight answers.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#top" aria-label="Resumaker home">
          <img className="brand-mark" src={resumakerIcon} alt="" />
          <span>Resumaker</span>
        </a>
        <p>Tailored one-page resumes from the job posting you are viewing.</p>
        <div className="footer-links">
          <a href="mailto:contact@resumaker.app">Contact</a>
          <a href="#top">Privacy</a>
          <a href="#top">Terms</a>
        </div>
      </footer>
    </div>
  )
}

export default App
