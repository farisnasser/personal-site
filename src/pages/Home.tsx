import { ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      {/* About Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">About me</h2>
        
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
            🔐 I'm interested in <span className="text-foreground font-medium">machine learning</span> and{" "}
            <span className="text-foreground font-medium">security of AI systems</span>.
          </p>
          
          <p>
            🌌 My curiosity in <span className="text-foreground font-medium">physics</span> has shaped how I think 
            using first principles. This mindset guides how I reason about technology.
          </p>
        </div>
      </section>

      <Separator />

      {/* Experience Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Experience (selected)</h2>
        
        <div className="space-y-6">
          <div className="group">
            <div className="flex items-start justify-between gap-4 mb-1">
              <div className="flex-1">
                <h3 className="text-foreground font-semibold">Co-founder & COO</h3>
                <p className="text-muted-foreground">
                  <span className="text-accent italic">Speak.ai</span> — real-time voice agents (RAG, Twilio)
                </p>
              </div>
              <time className="text-sm text-muted-foreground whitespace-nowrap">2025–now</time>
            </div>
          </div>

          <div className="group">
            <div className="flex items-start justify-between gap-4 mb-1">
              <div className="flex-1">
                <h3 className="text-foreground font-semibold">Cybersecurity Intern</h3>
                <p className="text-muted-foreground">
                  <span className="text-accent italic">Indigo IT</span> — SIEM, VAPT, network design
                </p>
              </div>
              <time className="text-sm text-muted-foreground whitespace-nowrap">Jul–Aug 2025</time>
            </div>
          </div>

          <div className="group">
            <div className="flex items-start justify-between gap-4 mb-1">
              <div className="flex-1">
                <h3 className="text-foreground font-semibold">Data & E-commerce Intern</h3>
                <p className="text-muted-foreground">
                  <span className="text-accent italic">Nestlé UAE</span> — data analytics
                </p>
              </div>
              <time className="text-sm text-muted-foreground whitespace-nowrap">Aug–Sep 2025</time>
            </div>
          </div>

          <div className="group">
            <div className="flex items-start justify-between gap-4 mb-1">
              <div className="flex-1">
                <h3 className="text-foreground font-semibold">Research Intern</h3>
                <p className="text-muted-foreground">
                  <span className="text-accent italic">EBTIC at Khalifa University</span> — Wi-Fi CSI fall detection
                </p>
              </div>
              <time className="text-sm text-muted-foreground whitespace-nowrap">Jul–Aug 2024</time>
            </div>
          </div>

          <div className="group">
            <div className="flex items-start justify-between gap-4 mb-1">
              <div className="flex-1">
                <h3 className="text-foreground font-semibold">Resident Assistant</h3>
                <p className="text-muted-foreground">
                  <span className="text-accent italic">AUS</span> — community, first-year support; started SRLD Run Club
                </p>
              </div>
              <time className="text-sm text-muted-foreground whitespace-nowrap">2024–now</time>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Publications Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Publications & research</h2>
        
        <div className="space-y-4">
          <div className="group">
            <div className="flex items-start gap-2">
              <div className="flex-1">
                <h3 className="text-foreground font-semibold mb-1">
                  Fall Detection Using Wi-Fi CSI
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  IEEE ICSPIS 2024
                </p>
                <a
                  href="https://doi.org/10.1109/ICSPIS64945.2024.10794589"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                >
                  View publication <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="flex items-start gap-2">
              <div className="flex-1">
                <h3 className="text-foreground font-semibold mb-1">
                  Decentralized honeypot system for IoT environments
                </h3>
                <p className="text-muted-foreground text-sm">
                  Senior thesis, in progress
                </p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="flex items-start gap-2">
              <div className="flex-1">
                <h3 className="text-foreground font-semibold mb-1">
                  Multiverse Privacy Theory
                </h3>
                <p className="text-muted-foreground text-sm">
                  Validation work in progress
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Projects (selected)</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-foreground font-semibold mb-1">
              Custom RAG for site QA
            </h3>
            <p className="text-muted-foreground text-sm">
              embeddings + ChromaDB + scraping
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-1">
              MERN real-estate app
            </h3>
            <p className="text-muted-foreground text-sm">
              JWT / OAuth, CRUD listings
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-1">
              Credit-risk models
            </h3>
            <p className="text-muted-foreground text-sm">
              imbalance handling, semi-supervised search
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Leadership Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Leadership & service</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-foreground font-semibold mb-1">
              Founding VP, Careers Club (AUS)
            </h3>
            <p className="text-muted-foreground text-sm">
              Workshops, early career habits
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-1">
              Events Officer, Society of Cybersecurity
            </h3>
            <p className="text-muted-foreground text-sm">
              Hands-on sessions & bootcamps
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Awards Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Awards</h2>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">INJAZ UAE</span> — Product of the Year (Speak.ai), 2025
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">Sheraa Startup Dojo+</span> — Grant recipient, 2025
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">Dean's & Chancellor's Lists</span> — AUS
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">UAE Golden Visa</span>
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-foreground font-semibold mb-2">Cybersecurity & Networking</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Penetration Testing, Privilege Escalation, SIEM, Network Enumeration
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-2">Programming & Development</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Python, JavaScript/TypeScript, C++, Node.js, React
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-2">Data & Databases</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              PostgreSQL, MongoDB, MySQL
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-2">Systems & Tools</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Git, Postman, n8n, Red Hat Linux
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-foreground font-semibold mb-2">Entrepreneurship & Leadership</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Business Development, Team Management, Product Design, Innovation, Project Pitching
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:nasserfaris788@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Email: nasserfaris788@gmail.com
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://github.com/farisnasser"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors"
            >
              GitHub: @farisnasser <ExternalLink size={14} />
            </a>
          </div>

          <div className="pt-2">
            <a href="/Faris-Nasser-CV.pdf" download>
              <Button variant="secondary" className="gap-2">
                <Download size={16} />
                Download CV (PDF)
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
