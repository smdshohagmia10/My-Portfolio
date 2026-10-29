"use client";

/* ============================================================
   0) COLORS — screenshot theke neya exact color
   Inline style e deya hoyeche, tai Tailwind ba globals.css
   er karone color kokhono badlabe na
   ============================================================ */
const C = {
  bg: "#0a0a0a",
  accent: "#c27aff", // "Me", DISCOVERY, icon, highlight text
  line: "#ad46ff", // underline
  text: "#d1d5dc", // body text
  white: "#ffffff",
  muted: "#99a1af",
  cardBg: "rgba(255,255,255,0.04)",
  cardBorder: "1px solid rgba(255,255,255,0.09)",
};

/* ============================================================
   1) ABOUT DATA — text ekhane edit koro
   ============================================================ */
const ABOUT = {
  label: "Discovery",
  titleStart: "About",
  titleHighlight: "Me",
  intro: {
    before: "I am a ",
    role: "Full-Stack Web Developer",
    middle: " with around ",
    strong: "1 year of consistent learning and hands-on practice",
    after:
      ". My journey is fueled by a passion for creating seamless digital experiences that combine logic with aesthetics.",
  },
  paragraphs: [
    {
      before: "I have successfully delivered ",
      strong: "10–12 projects",
      after:
        ", ranging from sleek frontend interfaces to complex full-stack applications.",
    },
    {
      before: "Currently, I am pursuing a ",
      highlight: "Diploma in Computer Science & Technology",
      after: ".",
    },
  ],
};

/* ============================================================
   2) INFO CARDS (right side) — icon: code | layers | education | rocket
   ============================================================ */
const INFO_CARDS = [
  { icon: "code", title: "Frontend", text: "Next.js, React, Tailwind" },
  { icon: "layers", title: "Backend", text: "Node.js, Express, Mongo" },
  { icon: "education", title: "Education", text: "Diploma in CST" },
  { icon: "rocket", title: "Goal", text: "Impact-driven Dev" },
];

/* ============================================================
   3) ICONS (inline SVG — kono extra package lagbe na)
   ============================================================ */
const Icon = ({ name }) => {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: C.accent,
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "code":
      return (
        <svg {...props}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "layers":
      return (
        <svg {...props}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "education":
      return (
        <svg {...props}>
          <path d="M22 10 12 5 2 10l10 5 10-5z" />
          <path d="M6 12v5c3 2 9 2 12 0v-5" />
          <line x1="22" y1="10" x2="22" y2="16" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...props}>
          <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z" />
          <path d="M12 15 9 12a22 22 0 0 1 2-4 12.9 12.9 0 0 1 11-6c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z" />
          <path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0" />
          <path d="M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" />
        </svg>
      );
    default:
      return null;
  }
};

/* ============================================================
   4) COMPONENT
   ============================================================ */
const About = () => {
  const { intro } = ABOUT;

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: C.bg, color: C.text }}
    >
      {/* soft glow background */}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(168,85,247,0.12)" }}
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(217,70,239,0.10)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <p
          className="text-xs font-bold uppercase"
          style={{ color: C.accent, letterSpacing: "0.4em" }}
        >
          {ABOUT.label}
        </p>
        <h2
          className="mt-3 text-4xl font-extrabold md:text-5xl"
          style={{ color: C.white }}
        >
          {ABOUT.titleStart}{" "}
          <span style={{ color: C.accent }}>{ABOUT.titleHighlight}</span>
        </h2>
        <div
          className="mt-3 h-1 w-20 rounded-full"
          style={{ backgroundColor: C.line }}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          {/* LEFT — text */}
          <div className="space-y-6">
            <div
              className="rounded-2xl p-6 text-[15px] leading-8"
              style={{
                backgroundColor: C.cardBg,
                border: C.cardBorder,
                color: C.text,
              }}
            >
              {intro.before}
              <span className="font-semibold" style={{ color: C.accent }}>
                {intro.role}
              </span>
              {intro.middle}
              <span className="font-bold" style={{ color: C.white }}>
                {intro.strong}
              </span>
              {intro.after}
            </div>

            <div
              className="space-y-4 px-2 text-[15px] leading-8"
              style={{ color: C.text }}
            >
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i}>
                  {p.before}
                  {p.strong && (
                    <span className="font-bold" style={{ color: C.white }}>
                      {p.strong}
                    </span>
                  )}
                  {p.highlight && (
                    <span style={{ color: C.accent }}>{p.highlight}</span>
                  )}
                  {p.after}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT — info cards */}
          <div className="grid grid-cols-2 gap-4 self-start">
            {INFO_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-6 transition hover:-translate-y-1"
                style={{ backgroundColor: C.cardBg, border: C.cardBorder }}
              >
                <Icon name={card.icon} />
                <h3
                  className="mt-4 text-base font-semibold"
                  style={{ color: C.white }}
                >
                  {card.title}
                </h3>
                <p className="mt-1 text-xs" style={{ color: C.muted }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;