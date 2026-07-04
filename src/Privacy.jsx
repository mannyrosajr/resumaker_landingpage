import resumakerIcon from './assets/resumaker-icon.svg'
import './App.css'

const sections = [
  {
    id: 'data-we-collect',
    title: 'Data We Collect',
    body: [
      { type: 'p', text: 'We collect only what is needed to generate your resume and manage your subscription:' },
      {
        type: 'ul',
        items: [
          'Account information — your name, email address, and profile photo, collected when you sign in with Google, LinkedIn, or email.',
          'Professional profile — information you enter manually: work experience, education, skills, certifications, and projects.',
          'Job posting content — the text of the job posting on your active browser tab, read only when you click Generate. We do not read any other page content.',
          'Generated resumes — the resumes we produce for you, stored so you can view them later.',
          "Billing information — if you subscribe to Plus or Pro, our payment processor (LemonSqueezy) collects your payment details, billing email, and country directly; we never receive or store your card number. We store your subscription tier, status, and renewal date to enforce your plan's usage limits.",
        ],
      },
      {
        type: 'p',
        text: "We do not collect browsing history, financial information beyond what's described above, health data, or any information from pages you visit outside of a job posting you choose to act on.",
      },
    ],
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Data',
    body: [
      {
        type: 'ul',
        items: [
          'To generate a tailored resume by sending your profile and the job posting to an AI model (Claude, provided by Anthropic).',
          'To store your profile and past resumes so you can access them across sessions.',
          'To authenticate your account via Google, LinkedIn, or email.',
          'To process subscription payments, enforce plan limits, and manage billing (upgrades, cancellations, renewals) via LemonSqueezy.',
        ],
      },
      {
        type: 'p',
        text: 'We do not use your data for advertising, profiling, or any purpose unrelated to generating your resume or operating your subscription.',
      },
    ],
  },
  {
    id: 'third-party',
    title: 'Third-Party Services',
    body: [
      { type: 'p', text: 'Resumaker relies on the following services to operate:' },
      {
        type: 'ul',
        items: [
          'Firebase (Google) — authentication and database storage. Your profile, resumes, and subscription status are stored in Google Firestore.',
          "Anthropic — your profile and job posting are sent to Anthropic's Claude API to generate the resume. Anthropic does not use API inputs to train models.",
          'Google OAuth / LinkedIn OAuth — used to sign you in. We receive only your name, email, and profile photo from these providers.',
          'LemonSqueezy — our merchant of record for Plus and Pro subscriptions. LemonSqueezy processes your payment and handles billing directly; we receive only your subscription status and renewal date, never your full payment details.',
        ],
      },
    ],
  },
  {
    id: 'security',
    title: 'Data Storage and Security',
    body: [
      {
        type: 'p',
        text: "Your data is stored in Google Firebase (Firestore), protected by Firebase's security rules so only you can access your own profile, resumes, and subscription status. Subscription and usage data can only be written by our backend, never directly by the extension, preventing tampering. Your Anthropic API key and LemonSqueezy API credentials are stored in Google Cloud Secret Manager and are never exposed to the extension or your browser.",
      },
    ],
  },
  {
    id: 'retention',
    title: 'Data Retention and Deletion',
    body: [
      {
        type: 'p',
        text: 'Your profile and resumes remain stored until you delete them or request account deletion. You can delete individual resumes from within the extension. If you have an active subscription, canceling it stops future billing but does not automatically delete your account data — cancel your subscription via the billing portal in the extension, and separately contact us to delete your account. To delete your account and all associated data, contact us at the email below and we will remove it within 30 days. Billing records may be retained longer by LemonSqueezy as required for tax and accounting purposes.',
      },
    ],
  },
  {
    id: 'children',
    title: "Children's Privacy",
    body: [
      {
        type: 'p',
        text: 'Resumaker is not directed at children under 13. We do not knowingly collect personal information from children.',
      },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    body: [
      {
        type: 'p',
        text: 'We may update this policy as the product evolves. We will update the "Last updated" date above when we do. Continued use of the extension after changes constitutes acceptance of the updated policy.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    body: [
      { type: 'p', text: 'Questions or data deletion requests: mannyrosajr@gmail.com' },
    ],
  },
]

function Privacy() {
  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Resumaker home">
          <img className="brand-mark" src={resumakerIcon} alt="" />
          <span>Resumaker</span>
        </a>
        <a className="secondary-button legal-back" href="/">
          Back to site
        </a>
      </header>

      <main id="top">
        <section className="section legal-hero" aria-labelledby="legal-title">
          <p className="eyebrow">Legal</p>
          <h1 id="legal-title">Privacy Policy</h1>
          <p className="legal-updated">Resumaker &middot; Last updated: July 3, 2026</p>
          <p className="legal-intro">
            Resumaker is a Chrome extension that reads job postings on your active
            browser tab and uses your professional profile to generate a tailored
            resume. This policy explains what data we collect, how we use it, and your
            rights.
          </p>
        </section>

        <section className="section split-section legal-section" aria-label="Privacy Policy sections">
          <div className="section-heading sticky-heading">
            <p className="eyebrow">On this page</p>
            <nav className="legal-nav" aria-label="Privacy sections">
              {sections.map((section, i) => (
                <a href={`#${section.id}`} key={section.id}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="legal-doc">
            {sections.map((section, i) => (
              <article className="legal-item" id={section.id} key={section.id}>
                <h2>
                  <span className="legal-number">{String(i + 1).padStart(2, '0')}</span>
                  {section.title}
                </h2>
                {section.body.map((block, blockIndex) =>
                  block.type === 'ul' ? (
                    <ul key={blockIndex}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={blockIndex}>{block.text}</p>
                  ),
                )}
              </article>
            ))}
            <p className="legal-disclaimer">
              Resumaker is an independent product and is not affiliated with Google,
              LinkedIn, Anthropic, LemonSqueezy, or any job board mentioned in the
              extension.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="/" aria-label="Resumaker home">
          <img className="brand-mark" src={resumakerIcon} alt="" />
          <span>Resumaker</span>
        </a>
        <p>Tailored one-page resumes from the job posting you are viewing.</p>
        <div className="footer-links">
          <a href="mailto:contact@resumaker.app">Contact</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </footer>
    </div>
  )
}

export default Privacy
