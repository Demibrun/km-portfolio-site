"use client";
/**
 * Evangelist Portfolio – Single-File React (JSX) Page
 * - Mobile nav: hamburger → X with slide-down menu
 * - New section: Marriage Counsellor (local image)
 * - Certifications aligned in uniform grid
 * - Floating buttons: WhatsApp, Instagram, LinkedIn
 * - Email: akinsipeadekemi@gmail.com
 */

import { useState, useEffect } from "react";
import Image from "next/image";

// ---------- Design Tokens ----------
const TOKENS = {
  navy: "#0C1B2A",
  gold: "#D4AF37",
  ivory: "#F8F6F2",
  slate: "#2E3A46",
  soft: "#E9EEF3",
  whatsapp: "#25D366",
  instagram: "#E1306C",
  linkedin: "#0A66C2",
  radius: 14,
};

const containerStyle = { maxWidth: 1100, margin: "0 auto", padding: "0 16px" };
const sectionStyle = { padding: "64px 0" };
const h2Style = {
  color: TOKENS.navy,
  fontSize: 28,
  fontWeight: 800,
  margin: 0,
};
const pSubStyle = {
  color: "rgba(46,58,70,0.85)",
  marginTop: 8,
  lineHeight: 1.6,
};
const cardStyle = {
  background: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  borderRadius: TOKENS.radius,
  boxShadow: "0 10px 30px rgba(12,27,42,0.12)",
  padding: 16,
};
const btnBase = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 18px",
  borderRadius: TOKENS.radius,
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
};
const btnGold = { ...btnBase, background: TOKENS.gold, color: TOKENS.navy };
const btnOutlineLight = {
  ...btnBase,
  background: "transparent",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.5)",
};
const btnMuted = {
  ...btnBase,
  background: "rgba(255,255,255,0.85)",
  color: TOKENS.navy,
};

// ---------- Components ----------
function Navbar() {
  const [open, setOpen] = useState(false);
  const [elev, setElev] = useState(false);

  useEffect(() => {
    const onScroll = () => setElev(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wrap = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    background: elev ? "rgba(12,27,42,0.88)" : "rgba(12,27,42,0.6)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    color: "#fff",
    transition: "background .25s ease",
  };
  const row = {
    ...containerStyle,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 0",
  };
  const links = { display: "flex", gap: 16, fontSize: 14 };
  const aStyle = { color: "#fff", textDecoration: "none", opacity: 0.95 };

  return (
    <header style={wrap}>
      <nav style={row} aria-label="Primary">
        <a href="#hero" style={{ ...aStyle, fontWeight: 700 }}>
          Adekemi A.
        </a>

        {/* Desktop links */}
        <div className="nav-links" style={links}>
          <a href="#about" style={aStyle}>
            About
          </a>
          <a href="#ministry" style={aStyle}>
            Ministry
          </a>
          <a href="#consulting" style={aStyle}>
            Consulting
          </a>
          <a href="#marriage" style={aStyle}>
            Marriage
          </a>
          <a href="#music" style={aStyle}>
            Music
          </a>
          <a href="#contact" style={aStyle}>
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a onClick={() => setOpen(false)} href="#about">
          About
        </a>
        <a onClick={() => setOpen(false)} href="#ministry">
          Ministry
        </a>
        <a onClick={() => setOpen(false)} href="#consulting">
          Consulting
        </a>
        <a onClick={() => setOpen(false)} href="#marriage">
          Marriage
        </a>
        <a onClick={() => setOpen(false)} href="#music">
          Music
        </a>
        <a onClick={() => setOpen(false)} href="#contact">
          Contact
        </a>
      </div>

      {/* styled-jsx just for Navbar */}
      <style jsx>{`
        /* Show hamburger only on mobile */
        @media (max-width: 860px) {
          .nav-links {
            display: none !important;
          }
          .hamburger {
            display: inline-flex !important;
          }
        }

        /* Hamburger button (centered bars) */
        .hamburger {
          display: none;
          position: relative;
          width: 36px;
          height: 28px;
          padding: 0;
          margin: 0;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 10px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .hamburger span {
          position: absolute;
          left: 50%;
          width: 22px;
          height: 2px;
          background: #fff;
          transform: translateX(-50%);
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .hamburger span:nth-child(1) {
          top: 6px;
        }
        .hamburger span:nth-child(2) {
          top: 13px;
        }
        .hamburger span:nth-child(3) {
          top: 20px;
        }

        /* Animate to X */
        .hamburger.is-open span:nth-child(1) {
          top: 13px;
          transform: translateX(-50%) rotate(45deg);
        }
        .hamburger.is-open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.is-open span:nth-child(3) {
          top: 13px;
          transform: translateX(-50%) rotate(-45deg);
        }

        /* Mobile menu (full-width under header) */
        .mobile-menu {
          display: none;
          position: absolute;
          top: 56px; /* header height */
          left: 0;
          right: 0;
          background: rgba(12, 27, 42, 0.97);
          backdrop-filter: blur(12px);
          padding: 10px 16px 16px;
          transform-origin: top;
          transform: scaleY(0.9);
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .mobile-menu.open {
          display: grid;
          opacity: 1;
          transform: scaleY(1);
        }
        .mobile-menu a {
          color: #fff;
          text-decoration: none;
          padding: 10px 6px;
          border-radius: 8px;
        }
        .mobile-menu a:hover {
          background: rgba(255, 255, 255, 0.08);
        }
        @media (min-width: 861px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

function Hero() {
  const mail = "mailto:akinsipeadekemi@gmail.com";
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: 560,
        display: "flex",
        alignItems: "center",
        color: "#fff",
        marginTop: 56,
        backgroundImage:
          "linear-gradient(135deg, rgba(12,27,42,0.85) 0%, rgba(12,27,42,0.55) 55%, rgba(12,27,42,0.2) 100%), url(/images/images4.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ ...containerStyle }}>
        <h1
          style={{ fontSize: 44, lineHeight: 1.15, margin: 0, fontWeight: 800 }}
        >
          I was created to make His praise glorious
        </h1>
        <p style={{ maxWidth: 740, marginTop: 12 }}>
          Evangelist and finance professional helping churches and organizations
          grow with integrity — combining Gospel-centered leadership, MBA
          strategy, ACA/CPA expertise, and a passion for worship.
        </p>
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 24 }}
        >
          <a
            href={`${mail}?subject=Invite%20to%20Speak%20%E2%80%94%20MOUNT%20ZION%20Prayer%20Ministries`}
            style={btnGold}
          >
            Invite to Speak
          </a>
          <a
            href={`${mail}?subject=Book%20a%20Finance%20Consult%20%E2%80%94%20MZPM`}
            style={btnOutlineLight}
          >
            Book a Finance Consult
          </a>
          <a
            href="https://www.youtube.com/@kemiakinsipe4993"
            target="_blank"
            rel="noreferrer"
            style={btnMuted}
          >
            ▶ Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={h2Style}>About</h2>
        <p style={pSubStyle}>
          Ministry and consulting brought together with excellence. With an MBA,
          ACA/CPA credentials, and a B.Sc. in Chemistry, I serve churches and
          organizations through preaching, leadership development, and ethical
          financial strategy.
        </p>
        <div
          className="grid-about"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            marginTop: 16,
          }}
        >
          <div
            className="glass"
            style={{
              ...cardStyle,
              display: "grid",
              gridTemplateColumns: "96px 1fr",
              gap: 12,
              alignItems: "center",
            }}
          >
            <Image
              src="/images/images7.jpg"
              alt="Adekemi Akinsipe portrait"
              width={96}
              height={96}
              style={{ borderRadius: 999, objectFit: "cover" }}
            />
            <div>
              <p style={{ margin: 0, color: TOKENS.navy, fontWeight: 700 }}>
                Evangelist Adekemi Akinsipe
              </p>
              <p style={{ marginTop: 6, color: "#56606B" }}>
                Founder, KemmyMuzik International • Finance Consultant
              </p>
              <p style={{ marginTop: 12 }}>
                &ldquo;My mission is to proclaim Christ and equip leaders to
                steward people and resources with integrity.&rdquo;
              </p>
            </div>
          </div>
          <ul
            className="glass"
            style={{ ...cardStyle, listStyle: "none", margin: 0 }}
          >
            <li>• MBA – Business Administration</li>
            <li>• ACA/CPA – Chartered Accountant</li>
            <li>• B.Sc. – Chemistry</li>
            <li>• 10+ years of ministry & consulting</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Ministry() {
  const items = [
    {
      title: "Revival & Teaching",
      text: "Gospel-centered preaching for churches and conferences.",
    },
    {
      title: "Leadership Workshops",
      text: "Practical training for pastors, departments, and volunteers.",
    },
    {
      title: "Worship Ministrations",
      text: "Prayer gatherings that foster unity and devotion.",
    },
  ];
  const mail = "mailto:akinsipeadekemi@gmail.com";
  return (
    <section id="ministry" style={{ ...sectionStyle, background: "#fff" }}>
      <div style={containerStyle}>
        <h2 style={h2Style}>Speaking & Ministry</h2>
        <div
          className="grid-ministry"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 16,
            marginTop: 16,
          }}
        >
          {items.map((it) => (
            <div key={it.title} className="glass card" style={cardStyle}>
              <h3 style={{ margin: 0, color: TOKENS.navy, fontWeight: 700 }}>
                {it.title}
              </h3>
              <p style={{ marginTop: 8, color: "#66717D" }}>{it.text}</p>
              <a
                href={`${mail}?subject=Booking%20Request%20%E2%80%94%20${encodeURIComponent(
                  it.title
                )}`}
                style={{ ...btnGold, marginTop: 12 }}
              >
                Request Booking
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Consulting() {
  const values = [
    {
      title: "Financial Strategy",
      text: "Plans that align mission, sustainability, and compliance.",
    },
    {
      title: "SME Advisory",
      text: "Budgeting, forecasting, and internal controls.",
    },
    {
      title: "Faith-Aligned Stewardship",
      text: "Biblical principles applied to modern finance decisions.",
    },
    {
      title: "Non-profit Finance",
      text: "Transparent reporting and donor confidence.",
    },
  ];
  const mail = "mailto:akinsipeadekemi@gmail.com";
  return (
    <section
      id="consulting"
      style={{ ...sectionStyle, background: TOKENS.soft }}
    >
      <div style={containerStyle}>
        <h2 style={h2Style}>Financial Consulting</h2>
        <div
          className="grid-consulting"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 16,
            marginTop: 16,
          }}
        >
          {values.map((v) => (
            <div key={v.title} className="glass card" style={cardStyle}>
              <h3 style={{ margin: 0, color: TOKENS.navy, fontWeight: 700 }}>
                {v.title}
              </h3>
              <p style={{ marginTop: 8, color: "#66717D" }}>{v.text}</p>
            </div>
          ))}
        </div>
        <div
          className="glass"
          style={{ ...cardStyle, marginTop: 16, display: "grid", gap: 12 }}
        >
          <h3 style={{ margin: 0, color: TOKENS.navy }}>
            Start a Consultation
          </h3>
          <p style={{ margin: 0 }}>
            All requests are handled by email. Click below to start your
            inquiry.
          </p>
          <a
            href={`${mail}?subject=Consultation%20Request%20%E2%80%94%20MZPM&body=Please%20include%20your%20organization%2C%20timeline%2C%20and%20scope.`}
            style={{ ...btnGold, width: 240 }}
          >
            Email Your Request
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------- Marriage Counsellor Section -------- */
function Marriage() {
  const mail = "mailto:akinsipeadekemi@gmail.com";
  return (
    <section id="marriage" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={h2Style}>Marriage Counsellor</h2>
        <p style={pSubStyle}>
          Faith-centered counselling for couples and singles—practical guidance
          rooted in Scripture, empathy, and experience.
        </p>

        <div
          className="marriage-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 16,
            marginTop: 16,
          }}
        >
          <div
            className="glass"
            style={{ ...cardStyle, padding: 0, overflow: "hidden" }}
          >
            {/* Replace this image locally:*/}

            <Image
              src="/images/images10.jpg"
              alt="Marriage counselling session"
              fill
              style={{ objectFit: "cover", borderRadius: 12 }}
              priority
            />
          </div>
          <div
            className="glass"
            style={{
              ...cardStyle,
              display: "grid",
              gap: 10,
              alignContent: "start",
            }}
          >
            <h3 style={{ margin: 0, color: TOKENS.navy }}>Book a Session</h3>
            <ul style={{ paddingLeft: 18, margin: 0, color: "#56606B" }}>
              <li>Pre-marital counselling</li>
              <li>Communication & conflict resolution</li>
              <li>Faith & family alignment</li>
            </ul>
            <a
              href={`${mail}?subject=Marriage%20Counselling%20Session&body=Please%20include%20preferred%20dates%2C%20location%20(online%20or%20in-person)%2C%20and%20any%20notes.`}
              style={{ ...btnGold, width: 220, marginTop: 8 }}
            >
              Book Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- Music / YouTube -------- */
function Music() {
  const liveWorshipLinks = [
    "https://youtu.be/fTmH7vio-gA?si=-TTkKb4dALWvEDpS",
    "https://youtu.be/cHDFcHf75qw?si=oPmxNoMtCNOPD8Xk",
    "https://youtu.be/Ts-zseRtko0?si=U9OdsEi7Zj8Ctxut",
    "https://youtu.be/h7ECZkXLRF0?si=ZSelihcTF1iXkAUG",
  ];
  return (
    <section
      id="music"
      style={{ ...sectionStyle, backgroundColor: "#e9eef3", color: "#fff" }}
    >
      <div style={containerStyle}>
        <h2 style={h2Style}>Music & YouTube</h2>
        <div
          className="grid-music"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: 16,
            marginTop: 16,
          }}
        >
          <div
            className="glass"
            style={{
              ...cardStyle,
              padding: 0,
              overflow: "hidden",
              aspectRatio: "16/9",
            }}
          >
            <iframe
              title="Featured Video"
              src="https://www.youtube.com/embed/Bi1OMY2Uzm4?si=zvFpRj4mJGO830YH"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: 0, width: "100%", height: "100%" }}
            />
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <a
              className="glass"
              href="https://www.youtube.com/@kemiakinsipe4993"
              target="_blank"
              rel="noreferrer"
              style={{
                ...cardStyle,
                textDecoration: "none",
                color: TOKENS.navy,
              }}
            >
              ▶ Songs
            </a>
            <div className="glass" style={{ ...cardStyle }}>
              <strong style={{ color: TOKENS.navy }}>
                ▶ Live Worship Sessions
              </strong>
              <ul style={{ marginTop: 8, paddingLeft: 18 }}>
                {liveWorshipLinks.map((href, i) => (
                  <li key={href} style={{ marginBottom: 6 }}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: TOKENS.slate }}
                    >
                      Session {i + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <a
              className="glass"
              href="https://www.youtube.com/@MountZionPrayerMinistryI-fz9ls/videos"
              target="_blank"
              rel="noreferrer"
              style={{
                ...cardStyle,
                textDecoration: "none",
                color: TOKENS.navy,
              }}
            >
              ▶ Ministry at Church
            </a>
            <a
              className="btn btn-gold"
              href="https://www.youtube.com/@kemiakinsipe4993"
              target="_blank"
              rel="noreferrer"
              style={{ ...btnGold, width: 220 }}
            >
              View Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- Credentials aligned grid -------- */
function Timeline() {
  const items = [
    { year: "2023", title: "MBA", where: "University of Ibadan" },
    {
      year: "2016",
      title: "ACA/CPA",
      where: "Institute of Chartered Accountants",
    },
    { year: "1992", title: "B.Sc. Chemistry", where: "University of Ibadan" },
  ];
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={h2Style}>Credentials & Education</h2>
        <div
          className="timeline-grid"
          style={{
            marginTop: 12,
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0,1fr))",
            gap: 12,
          }}
        >
          {items.map((i) => (
            <div
              key={i.year}
              className="glass credential"
              style={{
                ...cardStyle,
                display: "grid",
                gridTemplateRows: "auto auto 1fr",
                minHeight: 110,
              }}
            >
              <span style={{ color: TOKENS.navy, fontWeight: 800 }}>
                {i.year}
              </span>
              <span style={{ color: "#48535E", fontWeight: 600 }}>
                {i.title}
              </span>
              <span style={{ color: "#7B8794", alignSelf: "end" }}>
                {i.where}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const mail = "mailto:akinsipeadekemi@gmail.com";
  return (
    <section id="contact" style={{ ...sectionStyle, background: "#fff" }}>
      <div style={containerStyle}>
        <h2 style={h2Style}>Contact & Booking</h2>
        <p style={{ ...pSubStyle, marginTop: 6 }}>
          Email:{" "}
          <a href="mailto:akinsipeadekemi@gmail.com">
            akinsipeadekemi@gmail.com
          </a>
        </p>
        <div
          className="grid-contact"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            marginTop: 16,
          }}
        >
          <div
            className="glass"
            style={{ ...cardStyle, display: "grid", gap: 10 }}
          >
            <h3 style={{ margin: 0, color: TOKENS.navy }}>Ministry Booking</h3>
            <p style={{ margin: 0 }}>
              All bookings are handled by email. Include your event date,
              location, and audience size.
            </p>
            <a
              href={`${mail}?subject=Ministry%20Booking%20Request%20%E2%80%94%20MZPM&body=Please%20include%20event%20date%2C%20location%2C%20audience%20size%20and%20details.`}
              style={{ ...btnGold, width: 260 }}
            >
              Email Booking
            </a>
          </div>
          <div
            className="glass"
            style={{ ...cardStyle, display: "grid", gap: 10 }}
          >
            <h3 style={{ margin: 0, color: TOKENS.navy }}>
              Consulting Inquiry
            </h3>
            <p style={{ margin: 0 }}>
              Send your organization name, scope, budget, and timeline.
            </p>
            <a
              href={`${mail}?subject=Consulting%20Inquiry%20%E2%80%94%20Finance%20Advisory&body=Organization%3A%0AScope%3A%0ABudget%3A%0ATimeline%3A`}
              style={{ ...btnGold, width: 260 }}
            >
              Email Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{ background: TOKENS.navy, color: "#fff", padding: "48px 0" }}
    >
      <div
        className="grid-footer"
        style={{
          ...containerStyle,
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 16,
          fontSize: 14,
        }}
      >
        <div>
          <p style={{ margin: 0, fontWeight: 700 }}>Akinsipe Adekemi</p>
          <p style={{ opacity: 0.8 }}>
            Serving churches and organizations with excellence.
          </p>
        </div>
        <div>
          <p style={{ margin: 0, fontWeight: 700, marginBottom: 6 }}>Links</p>
          <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
            <li>
              <a
                href="#about"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#ministry"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Ministry
              </a>
            </li>
            <li>
              <a
                href="#consulting"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Consulting
              </a>
            </li>
            <li>
              <a
                href="#marriage"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Marriage
              </a>
            </li>
            <li>
              <a
                href="#music"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Music
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p style={{ margin: 0, fontWeight: 700, marginBottom: 6 }}>Contact</p>
          <p style={{ margin: 0 }}>
            <a
              href="mailto:akinsipeadekemi@gmail.com"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              akinsipeadekemi@gmail.com
            </a>
          </p>
          <p style={{ margin: 0 }}>Ibadan</p>
        </div>
      </div>
      <div
        style={{ ...containerStyle, marginTop: 16, fontSize: 12, opacity: 0.8 }}
      >
        © {new Date().getFullYear()} Akinsipe Adekemi. All rights reserved.
      </div>
    </footer>
  );
}

/* Floating buttons: WhatsApp, Instagram, LinkedIn */
function FloatingActions() {
  const fab = {
    position: "fixed",
    right: 16,
    bottom: 16,
    display: "grid",
    gap: 10,
    zIndex: 60,
  };
  const base = {
    borderRadius: 999,
    color: "#fff",
    padding: 14,
    display: "inline-flex",
    boxShadow: "0 10px 30px rgba(12,27,42,0.18)",
  };
  return (
    <div style={fab} className="fab-group">
      <a
        href="https://wa.me/2348160368444"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noreferrer"
        style={{ ...base, background: TOKENS.whatsapp }}
      >
        {/* WhatsApp icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="22"
          height="22"
          fill="currentColor"
          aria-hidden
        >
          <path d="M19.11 17.33c-.26-.13-1.53-.76-1.77-.85-.24-.09-.42-.13-.6.13-.18.26-.69.85-.85 1.02-.16.18-.31.2-.57.07-.26-.13-1.09-.4-2.08-1.27-.77-.69-1.29-1.53-1.44-1.79-.15-.26-.02-.4.11-.53.11-.11.26-.29.38-.44.13-.15.17-.26.26-.44.09-.18.04-.33-.02-.46-.07-.13-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.46-.15 0-.33-.02-.51-.02-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.3.95 2.55 1.09 2.73.13.18 1.86 2.84 4.5 3.98.63.27 1.12.43 1.5.55.63.2 1.21.17 1.67.1.51-.08 1.53-.62 1.75-1.23.22-.6.22-1.12.15-1.23-.07-.11-.24-.18-.49-.31z" />
          <path d="M26.6 5.4C24.1 2.9 20.7 1.5 17 1.5 9.4 1.5 3.3 7.6 3.3 15.2c0 2.3.6 4.5 1.8 6.5L3 29l7.5-2c1.9 1 4 1.6 6.5 1.6 7.6 0 13.7-6.2 13.7-13.7.1-3.6-1.3-7-3.7-9.5z" />
        </svg>
      </a>

      <a
        href="https://www.instagram.com/adekemiakinsipe/"
        aria-label="Instagram"
        target="_blank"
        rel="noreferrer"
        style={{ ...base, background: TOKENS.instagram }}
      >
        {/* Instagram icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 12 16.8 2.8 2.8 0 0 0 12 9.2zM18 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/in/adekemi-akinsipe-39b565b3"
        aria-label="LinkedIn"
        target="_blank"
        rel="noreferrer"
        style={{ ...base, background: TOKENS.linkedin }}
      >
        {/* LinkedIn icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.84-2.2 3.79-2.2 4.05 0 4.8 2.66 4.8 6.1V24h-4v-7.2c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.8V24h-4V8z" />
        </svg>
      </a>
      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          .fab-group a {
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }
          .fab-group a:hover {
            transform: translateY(-3px) scale(1.03);
            box-shadow: 0 14px 40px rgba(12, 27, 42, 0.22);
          }
        }
      `}</style>
    </div>
  );
}

// ---------- Page ----------
export default function Home() {
  return (
    <div
      style={{
        background: TOKENS.ivory,
        color: TOKENS.slate,
        fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial",
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Ministry />
      <Consulting />
      <Marriage />
      <Music />
      <Timeline />
      <Contact />
      <Footer />
      <FloatingActions />

      {/* ---------- Global responsive tweaks & effects ---------- */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .grid-consulting {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .grid-ministry {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .grid-footer {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .grid-music {
            grid-template-columns: 1fr !important;
          }
          .marriage-grid {
            grid-template-columns: 1fr !important;
          }
          .timeline-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          #hero h1 {
            font-size: 32px !important;
            line-height: 1.2 !important;
          }
          .grid-about {
            grid-template-columns: 1fr !important;
          }
          .grid-consulting {
            grid-template-columns: 1fr !important;
          }
          .grid-ministry {
            grid-template-columns: 1fr !important;
          }
          .grid-contact {
            grid-template-columns: 1fr !important;
          }
          .grid-footer {
            grid-template-columns: 1fr !important;
          }
          .timeline-grid {
            grid-template-columns: 1fr !important;
          }
          section {
            padding: 40px 0 !important;
          }
        }

        /* Motion-safe hover/focus effects */
        @media (prefers-reduced-motion: no-preference) {
          .glass,
          .btn {
            transition: transform 0.25s ease, box-shadow 0.25s ease,
              background-color 0.25s ease, color 0.25s ease;
          }
          .glass:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 40px rgba(12, 27, 42, 0.18);
          }
          .btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 10px 28px rgba(12, 27, 42, 0.16);
          }
        }
        .btn:focus-visible,
        .glass:focus-within {
          outline: 2px solid ${TOKENS.gold};
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
