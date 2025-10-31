import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Mail, Github, Linkedin, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-background border-b border-border px-4 flex items-center justify-between z-50">
        <h1 className="text-xl font-serif">Faris Nasser</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-40 pt-16"
          onClick={() => setIsOpen(false)}
        >
          <div className="p-8">
            {/* Profile Image */}
            <div className="mb-6">
              <div className="w-24 h-24 rounded-full bg-muted overflow-hidden mx-auto">
                <img 
                  src="/images/my-photo.JPG" 
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
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded transition-colors text-center ${
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
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded transition-colors text-center ${
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
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded transition-colors text-center ${
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
            <div className="flex gap-6 justify-center">
              <a
                href="mailto:your.email@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com/farisnasser"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/faris-nasser-089808255/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
