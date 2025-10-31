import { NavLink } from "react-router-dom";
import { Mail, Github, Linkedin } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-background border-r border-border p-8 flex flex-col">
      <div className="flex-1">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif mb-1">Faris Nasser</h1>
          <p className="text-muted-foreground text-sm">فارس</p>
        </div>

        {/* Profile Image */}
        <div className="mb-6">
          <div className="w-32 h-32 rounded-full bg-muted overflow-hidden mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="font-semibold text-foreground">Computer Engineering</h2>
          <p className="text-sm text-muted-foreground">Abu Dhabi / Sharjah, UAE</p>
        </div>

        {/* Navigation */}
        <nav className="mb-8 space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 px-4 rounded transition-colors ${
                isActive
                  ? "bg-secondary text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              `block py-2 px-4 rounded transition-colors ${
                isActive
                  ? "bg-secondary text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`
            }
          >
            News
          </NavLink>
          <NavLink
            to="/cv"
            className={({ isActive }) =>
              `block py-2 px-4 rounded transition-colors ${
                isActive
                  ? "bg-secondary text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`
            }
          >
            CV
          </NavLink>
        </nav>

        {/* Social Links */}
        <div className="flex gap-4 justify-center">
          <a
            href="mailto:your.email@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </aside>
  );
};
