"use client";
import { useState } from "react";
import { Link, Button } from "@heroui/react";

const links = [
  {
    label: "Home",
    href: "#home",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Skills",
    href: "#skills",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "#projects",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "About",
    href: "#about",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-purple-900/30 bg-[rgba(15,8,40,0.85)] backdrop-blur-lg">
      <header className="flex h-[58px] items-center justify-between px-6">

        {/* Logo */}
        <div
          className="font-bold text-xl tracking-tight cursor-pointer"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            background: "linear-gradient(90deg, #c026d3, #a855f7, #7c3aed)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SM SOHAG
        </div>

        {/* Desktop Nav Links */}
        <ul
          className="hidden md:flex items-center gap-[2px] rounded-full p-1"
          style={{
            background: "rgba(124, 58, 237, 0.12)",
            border: "0.5px solid rgba(124, 58, 237, 0.25)",
          }}
        >
          {links.map(({ label, href, icon }) => (
            <li key={label}>
              <Link
                href={href}
                className="flex items-center gap-[6px] rounded-full px-[14px] py-[6px] text-[12px] transition-all duration-200 no-underline"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: active === label ? "#f0e6ff" : "rgba(196, 181, 253, 0.7)",
                  background: active === label ? "rgba(124, 58, 237, 0.35)" : "transparent",
                  border: active === label ? "0.5px solid rgba(124, 58, 237, 0.5)" : "0.5px solid transparent",
                }}
                onClick={() => setActive(label)}
              >
                {icon}
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: Hire Me + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Button
            className="hidden md:flex rounded-full text-[12px] font-normal px-[22px]"
            style={{
              fontFamily: "'DM Mono', monospace",
              background: "#f0e6ff",
              color: "#080414",
              letterSpacing: "0.05em",
              height: "36px",
              minWidth: "auto",
            }}
          >
            HIRE ME
          </Button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-purple-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div
          className="border-t md:hidden"
          style={{ borderColor: "rgba(124, 58, 237, 0.2)" }}
        >
          <ul className="flex flex-col gap-1 p-3">
            {links.map(({ label, href, icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-[13px] transition-all duration-200 no-underline"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: active === label ? "#f0e6ff" : "rgba(196, 181, 253, 0.7)",
                    background: active === label ? "rgba(124, 58, 237, 0.25)" : "transparent",
                  }}
                  onClick={() => {
                    setActive(label);
                    setIsMenuOpen(false);
                  }}
                >
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button
                className="w-full rounded-full text-[12px]"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  background: "#f0e6ff",
                  color: "#080414",
                  letterSpacing: "0.05em",
                }}
              >
                HIRE ME
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default App;