import SubscribeForm from "@/components/SubscribeForm";

const coverage = [
  {
    label: "01",
    title: "Agents and tools",
    body: "How to sit on the stack you already have, when to change it, and how to keep humans in the send path.",
  },
  {
    label: "02",
    title: "Building and shipping",
    body: "From a working idea to something in the world — without the ceremony that slows a small team down.",
  },
  {
    label: "03",
    title: "Distribution",
    body: "Audience, creating in public, and getting the work seen. Attention is a system, not a mood.",
  },
  {
    label: "04",
    title: "Operating",
    body: "Decisions, leverage, and running a company or a practice without drowning in process.",
  },
];

const readers = [
  {
    title: "Founders",
    body: "Strategy you can use the same week — product, tools, and the calls that compound.",
  },
  {
    title: "Developers",
    body: "How the stack is actually changing, and what that means for the work you ship.",
  },
  {
    title: "Creators",
    body: "Distribution, craft, and building an audience without turning the work into content sludge.",
  },
];

export default function Home() {
  return (
    <div className="shell">
      <div className="atmosphere" aria-hidden="true">
        <span className="wash" />
        <div className="scope">
          <span className="ring r1" />
          <span className="ring r2" />
          <span className="ring r3" />
          <span className="sweep" />
          <span className="pip" />
        </div>
      </div>

      <header className="mast">
        <div className="brand">
          <span className="mark" aria-hidden="true" />
          <span className="word">AION</span>
        </div>
        <p className="issue">
          Radar <span className="dot">·</span> Friday letter
        </p>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="kicker">Weekly strategic input</p>
            <h1>
              For founders,
              <br />
              developers,
              <br />
              and creators.
            </h1>
            <p className="lede">
              AION Radar is a Friday letter on agents, tools, distribution, and
              the decisions that compound. Signal you can use the same week —
              not a digest, not a single-topic blog.
            </p>
          </div>
          <div className="hero-join">
            <p className="join-kicker">Get the letter</p>
            <p className="join-line">
              One email on Friday. Strategic input for people who ship.
            </p>
            <SubscribeForm />
          </div>
        </section>

        <section className="coverage" aria-labelledby="coverage-heading">
          <div className="section-head">
            <p className="section-kicker">What Radar covers</p>
            <h2 id="coverage-heading">What the letter returns to</h2>
          </div>
          <ul className="coverage-grid">
            {coverage.map((item) => (
              <li key={item.title} className="tile">
                <span className="tile-num">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="readers" aria-labelledby="readers-heading">
          <div className="section-head">
            <p className="section-kicker">Written for</p>
            <h2 id="readers-heading">People building in public and in product</h2>
          </div>
          <ul className="reader-grid">
            {readers.map((item) => (
              <li key={item.title} className="reader">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <div className="foot-brand">
          <p>AION Radar. Sit on the tools you already have.</p>
          <p className="cadence">Friday. Unsubscribe anytime. We will not sell the list.</p>
        </div>
        <nav className="social" aria-label="AION elsewhere">
          <a
            href="https://x.com/aion_sys"
            rel="noopener noreferrer"
            target="_blank"
          >
            @aion_sys
          </a>
        </nav>
      </footer>
    </div>
  );
}
