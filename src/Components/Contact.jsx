"use client";

import { useState } from "react";

/* ============================================================
   0) COLORS — screenshot theke neya exact color (inline style,
   tai Tailwind/globals.css e kichu badlabe na)
   ============================================================ */
const C = {
  bg: "#0a0a0a",
  accent: "#c27aff",
  brand: "#9810fa",
  white: "#ffffff",
  text: "#99a1af",
  infoCard: "linear-gradient(135deg,#1b1023 0%,#131113 100%)",
  iconBox: "#29153a",
  formCard: "#100f10",
  input: "#1c1b1d",
  inputBorder: "1px solid #2f2b33",
  border: "1px solid rgba(255,255,255,0.09)",
  button: "linear-gradient(90deg,#9810fa 0%,#c600df 100%)",
  social: "#161617",
};

/* ============================================================
   1) CONTACT INFO — ekhane nijer info boshao
   ============================================================ */
const CONTACT = {
  label: "Contact",
  titleStart: "Get in",
  titleHighlight: "Touch",
  subtitle:
    "Have a project in mind or just want to chat? Let's build something epic together.",
  email: "smsohagmia250@gmail.com", // <-- tomar email
  phone: "+880 1791917625", // <-- tomar phone
  location: "Your City, Bangladesh", // <-- tomar location
};

/* ============================================================
   2) SOCIAL LINKS — notun add korte ekta object add koro
   icon: linkedin | facebook | whatsapp | github
   ============================================================ */
const SOCIALS = [
  { name: "LinkedIn", icon: "linkedin", url: "www.linkedin.com/in/sohag-dev" },
  { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/muhammadsohag0179" },
  { name: "WhatsApp", icon: "whatsapp", url: "https://wa.me/8801791917625" },
  { name: "GitHub", icon: "github", url: "https://github.com/smdshohagmia10" },
];

/* ============================================================
   3) ICONS (inline SVG — kono package lagbe na)
   ============================================================ */
const Svg = ({ size = 20, color = C.accent, children, fill = "none" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={color}
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const Icon = ({ name, size, color }) => {
  switch (name) {
    case "mail":
      return (
        <Svg size={size} color={color}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3 7 12 13 21 7" />
        </Svg>
      );
    case "phone":
      return (
        <Svg size={size} color={color}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
        </Svg>
      );
    case "pin":
      return (
        <Svg size={size} color={color}>
          <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
          <circle cx="12" cy="10" r="3" />
        </Svg>
      );
    case "send":
      return (
        <Svg size={size} color={color}>
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </Svg>
      );
    case "linkedin":
      return (
        <Svg size={size} color={color}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </Svg>
      );
    case "facebook":
      return (
        <Svg size={size} color={color}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </Svg>
      );
    case "whatsapp":
      return (
        <Svg size={size} color={color}>
          <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l1.9-5.4A8.4 8.4 0 1 1 21 11.5z" />
        </Svg>
      );
    case "github":
      return (
        <Svg size={size} color={color}>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3.1-.3 6.4-1.5 6.4-7a5.4 5.4 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.3 1.9 5.1 2.3 5.1 2.3a5 5 0 0 0-.1 3.8A5.4 5.4 0 0 0 3.5 9.9c0 5.4 3.3 6.6 6.4 7a3.4 3.4 0 0 0-1 2.6V22" />
        </Svg>
      );
    default:
      return null;
  }
};

/* ============================================================
   4) COMPONENT
   ============================================================ */
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", text: "Sending..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus({ type: "success", text: "Message sent! I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", text: err.message });
    }
  };

  const infoItems = [
    { icon: "mail", label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: "phone", label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
    { icon: "pin", label: "Location", value: CONTACT.location },
  ];

  const inputStyle = {
    backgroundColor: C.input,
    border: C.inputBorder,
    color: C.white,
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: C.bg }}
    >
      {/* glow */}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(152,16,250,0.12)" }}
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(217,70,239,0.08)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <p
          className="text-xs font-bold uppercase"
          style={{ color: C.accent, letterSpacing: "0.4em" }}
        >
          {CONTACT.label}
        </p>
        <h2
          className="mt-3 text-5xl font-black uppercase md:text-6xl"
          style={{ color: C.white }}
        >
          {CONTACT.titleStart}{" "}
          <span style={{ color: C.brand }}>{CONTACT.titleHighlight}</span>
        </h2>
        <div
          className="mt-3 h-1 w-20 rounded-full"
          style={{ backgroundColor: C.brand }}
        />
        <p className="mt-6 max-w-lg text-sm leading-7" style={{ color: C.text }}>
          {CONTACT.subtitle}
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* LEFT — info */}
          <div>
            <div className="space-y-6">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-5 rounded-2xl p-6"
                  style={{ background: C.infoCard, border: C.border }}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: C.iconBox }}
                  >
                    <Icon name={item.icon} />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-[11px] uppercase"
                      style={{ color: C.text, letterSpacing: "0.15em" }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block truncate text-base font-medium"
                        style={{ color: C.white }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="mt-1 text-base font-medium"
                        style={{ color: C.white }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p
              className="mt-10 text-xs font-semibold uppercase"
              style={{ color: C.text, letterSpacing: "0.15em" }}
            >
              Connect with me
            </p>
            <div className="mt-4 flex gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-12 w-12 items-center justify-center rounded-xl transition hover:-translate-y-1"
                  style={{ backgroundColor: C.social, border: C.border }}
                >
                  <Icon name={s.icon} color="#d1d5dc" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl p-8"
            style={{ backgroundColor: C.formCard, border: C.border }}
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full rounded-xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-purple-500/60"
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full rounded-xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-purple-500/60"
              style={inputStyle}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="w-full resize-none rounded-xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-purple-500/60"
              style={inputStyle}
            />

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="flex w-full items-center justify-center gap-3 rounded-xl py-4 text-base font-bold transition hover:opacity-90 disabled:opacity-60"
              style={{
                background: C.button,
                color: C.white,
                boxShadow: "0 8px 30px rgba(152,16,250,0.35)",
              }}
            >
              <Icon name="send" color="#ffffff" />
              {status.type === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status.type === "success" && (
              <p className="text-center text-sm" style={{ color: "#4ade80" }}>
                {status.text}
              </p>
            )}
            {status.type === "error" && (
              <p className="text-center text-sm" style={{ color: "#f87171" }}>
                {status.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;