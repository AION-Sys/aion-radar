import SubscribeForm from "@/components/SubscribeForm";

export default function Home() {
  return (
    <div className="shell">
      <div className="scope" aria-hidden="true">
        <span className="ring r1" />
        <span className="ring r2" />
        <span className="ring r3" />
        <span className="sweep" />
        <span className="pip" />
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
        <p className="kicker">Issue 01 · operators only</p>
        <h1>
          The IDE is not
          <br />
          your vendor
        </h1>
        <p className="lede">
          AION Radar. A Friday letter on agents, tools, and the missed-call
          leak. Agents draft. Humans send.
        </p>
        <SubscribeForm />
        <nav className="posted" aria-label="Also posted">
          <span>Also posted</span>
          <a
            href="https://x.com/aion_sys/status/2093558584395317364"
            rel="noopener noreferrer"
            target="_blank"
          >
            X
          </a>
          <span className="dot">·</span>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:share:7499324143755177984"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </nav>
      </main>

      <footer>
        <p>AION. Sit on the tools you already have.</p>
        <p className="handle">@aion_sys</p>
      </footer>
    </div>
  );
}
