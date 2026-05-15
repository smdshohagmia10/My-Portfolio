"use client";

import { Link } from "@heroui/react";

const footerLinks = {
  Navigate: [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  Connect: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },

  ],
//   Contact: [
//     { label: "hello@Sohag.dev", href: "mailto:hello@shams.dev" },
//     { label: "Dhaka, Bangladesh", href: "#" },
//   ],
};

const Footer = () => {
  return (
    <footer
      className="w-full border-t"
      style={{
        background: "rgba(10, 4, 28, 0.95)",
        borderColor: "rgba(124, 58, 237, 0.2)",
      }}
    >
      {/* Top Section */}
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* Brand Column */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <div
              className="text-2xl cursor-pointer"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                background: "linear-gradient(90deg, #c026d3, #a855f7, #7c3aed)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SOHAG
            </div>

            <p
              className="text-[13px] leading-relaxed max-w-[200px]"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "rgba(157, 142, 192, 0.8)",
              }}
            >
              Building fast, scalable web apps with clean architecture.
            </p>

            {/* Status badge */}
            <div
              className="flex items-center gap-2 w-fit rounded-full px-3 py-1.5"
              style={{
                background: "rgba(124, 58, 237, 0.12)",
                border: "0.5px solid rgba(124, 58, 237, 0.25)",
              }}
            >
              <span
                className="h-[7px] w-[7px] rounded-full bg-green-400"
                style={{ animation: "pulse 2s infinite" }}
              />
              <span
                className="text-[10px]"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: "rgba(196, 181, 253, 0.8)",
                  letterSpacing: "0.1em",
                }}
              >
                Available for hire
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section} className="flex flex-col gap-4">
              <h4
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: "rgba(124, 58, 237, 0.9)",
                }}
              >
                {section}
              </h4>

              {/* Divider */}
              <div
                className="h-[0.5px] w-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(124,58,237,0.5), transparent)",
                }}
              />

              <ul className="flex flex-col gap-2.5">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[12px] transition-all duration-200 no-underline"
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        color: "rgba(157, 142, 192, 0.7)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#22d3ee";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(157, 142, 192, 0.7)";
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(124, 58, 237, 0.15)" }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 md:flex-row">
          <p
            className="text-[11px]"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "rgba(92, 79, 122, 0.9)",
            }}
          >
            © {new Date().getFullYear()} Sohag. All rights reserved.
          </p>

          {/* Gradient divider line center — decorative */}
          <div
            className="hidden h-[0.5px] w-24 md:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(34,211,238,0.5), transparent)",
            }}
          />

          <p
            className="text-[11px]"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "rgba(92, 79, 122, 0.9)",
            }}
          >
            Designed & built with{" "}
            <span style={{ color: "#7c3aed" }}>♥</span>{" "}
            by Shohag
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;