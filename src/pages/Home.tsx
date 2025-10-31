export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* About Me Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">About me</h2>
        
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            👋 Hello there, I'm <span className="text-foreground font-medium">Faris</span>!
          </p>
          
          <p>
            🎓 I'm a fourth-year <span className="text-foreground font-medium">Computer Engineering student</span> at the 
            American University of Sharjah applying to graduate programs in AI and cybersecurity.
          </p>
          
          <p>
            💻 My work explores intelligent systems and security. I've built real-time voice AI agents, 
            worked on security of IoT systems, and machine learning applications.
          </p>
          
          <p>
            🤔 I'm interested in <span className="text-foreground font-medium">machine learning</span> and{" "}
            <span className="text-foreground font-medium">security of AI systems</span>.
          </p>
          
          <p>
            🔬 My curiosity in <span className="text-foreground font-medium">physics</span> has shaped how I think 
            using first principles. This mindset guides how I reason about technology.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-8">Experience (selected)</h2>
        
        <div className="space-y-6">
          <div className="border-l-2 border-border pl-6">
            <div className="mb-2">
              <span className="text-foreground font-medium">Co-founder & COO</span>,{" "}
              <span className="text-accent italic">Speak.ai</span> — real-time voice agents 
              (RAG, Twilio).
            </div>
            <time className="text-sm text-muted-foreground italic">2025–now</time>
          </div>

          <div className="border-l-2 border-border pl-6">
            <div className="mb-2">
              <span className="text-foreground font-medium">Cybersecurity Intern</span>,{" "}
              <span className="text-accent italic">Indigo IT</span> — SIEM, VAPT, network design.
            </div>
            <time className="text-sm text-muted-foreground italic">Jul–Aug 2025</time>
          </div>

          <div className="border-l-2 border-border pl-6">
            <div className="mb-2">
              <span className="text-foreground font-medium">Data & E-commerce Intern</span>,{" "}
              <span className="text-accent italic">Nestlé UAE</span> — data analytics
            </div>
            <time className="text-sm text-muted-foreground italic">Aug–Sep 2025</time>
          </div>

          <div className="border-l-2 border-border pl-6">
            <div className="mb-2">
              <span className="text-foreground font-medium">Research Intern</span>,{" "}
              <span className="text-accent italic">EBTIC at Khalifa University</span> — Wi-Fi CSI 
              fall detection.
            </div>
            <time className="text-sm text-muted-foreground italic">Jul–Aug 2024</time>
          </div>

          <div className="border-l-2 border-border pl-6">
            <div className="mb-2">
              <span className="text-foreground font-medium">Resident Assistant</span>,{" "}
              <span className="text-accent italic">AUS</span> — community, first-year support; 
              started SRLD Run Club.
            </div>
            <time className="text-sm text-muted-foreground italic">2024–now</time>
          </div>
        </div>
      </section>
    </div>
  );
}
