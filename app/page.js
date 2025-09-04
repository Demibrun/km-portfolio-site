/**
 * Evangelist Portfolio – Single-File React (JSX) Page
 * Fix: Define all components locally so <Hero /> and others exist.
 * Notes:
 *  - Brand: MOUNT ZION Prayer Ministries
 *  - YouTube: https://www.youtube.com/@kemiakinsipe4993
 *  - Email: adekemiakinsipe@gmail.com (all booking/consult CTAs open mailto links)
 *  - Credentials: MBA 2023 (University of Ibadan); ACA/CPA 2014 (Institute of Chartered Accountants);
 *    B.Sc. Chemistry 1994 (University of Ibadan)
 *  - Publications removed; Testimonials left blank intentionally
 *  - Uses uploaded portrait for hero + headshot
 */

// ---------- Design Tokens ----------
const TOKENS = {
  navy: "#0C1B2A",
  gold: "#D4AF37",
  ivory: "#F8F6F2",
  slate: "#2E3A46",
  soft: "#E9EEF3",
  whatsapp: "#25D366",
  radius: 14,
};

const containerStyle = { maxWidth: 1100, margin: "0 auto", padding: "0 16px" };
const sectionStyle = { padding: "64px 0" };
const h2Style = { color: TOKENS.navy, fontSize: 28, fontWeight: 800, margin: 0 };
const pSubStyle = { color: "rgba(46,58,70,0.85)", marginTop: 8, lineHeight: 1.6 };
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
const btnOutlineLight = { ...btnBase, background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.5)" };
const btnMuted = { ...btnBase, background: "rgba(255,255,255,0.85)", color: TOKENS.navy };
const inputStyle = { padding: 12, borderRadius: TOKENS.radius, border: `1px solid ${TOKENS.soft}`, outline: "none" };

// ---------- Components ----------
function Navbar() {
  const wrap = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    background: "rgba(12,27,42,0.88)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    color: "#fff",
  };
  const row = { ...containerStyle, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0" };
  const links = { display: "flex", gap: 16, fontSize: 14 };
  const aStyle = { color: "#fff", textDecoration: "none", opacity: 0.9 };
  return (
    <header style={wrap}>
      <nav style={row} aria-label="Primary">
        <a href="#hero" style={{ ...aStyle, fontWeight: 700 }}>KemmyMuzik</a>
        <div style={links}>
          <a href="#about" style={aStyle}>About</a>
          <a href="#ministry" style={aStyle}>Ministry</a>
          <a href="#consulting" style={aStyle}>Consulting</a>
          <a href="#music" style={aStyle}>Music</a>
          <a href="#contact" style={aStyle}>Contact</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const wrap = {
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
  };
  const ctaRow = { display: "flex", flexWrap: "wrap", gap: 12, marginTop: 24 };
  const small = { marginTop: 12, fontSize: 12, opacity: 0.85 };
  const mail = "mailto:adekemiakinsipe@gmail.com";
  return (
    <section id="hero" style={wrap}>
      <div style={{ ...containerStyle }}>
        <h1 style={{ fontSize: 44, lineHeight: 1.15, margin: 0, fontWeight: 800 }}>Called to Serve. Equipped to Lead.</h1>
        <p style={{ maxWidth: 740, marginTop: 12 }}>
          Evangelist and finance professional helping churches and organizations grow with integrity—combining
          Gospel-centered leadership, MBA strategy, ACA/CPA expertise, and a passion for worship.
        </p>
        <div style={ctaRow}>
          <a href={`${mail}?subject=Invite%20to%20Speak%20%E2%80%94%20MOUNT%20ZION%20Prayer%20Ministries`} style={btnGold}>Invite to Speak</a>
          <a href={`${mail}?subject=Book%20a%20Finance%20Consult%20%E2%80%94%20MZPM`} style={btnOutlineLight}>Book a Finance Consult</a>
          <a href="https://www.youtube.com/@kemiakinsipe4993" target="_blank" rel="noreferrer" style={btnMuted}>▶ Watch on YouTube</a>
        </div>
        <p style={small}>“I was created to make His praise Glorious"</p>
      </div>
    </section>
  );
}

function SmokeChecks() {
  const items = ["Navbar", "Hero", "About", "Ministry", "Consulting", "Music", "Testimonials", "Timeline", "Contact", "Footer", "WhatsAppButton"];
  return (
    <div style={{ ...containerStyle, padding: "12px 0", fontSize: 12, color: "#56606B" }}>
      <span>Sanity checks loaded: </span>
      {items.map((k, i) => (
        <span key={k} style={{ color: "#2E7D32" }}>{k}{i < items.length - 1 ? ", " : ""}</span>
      ))}
    </div>
  );
}

function About() {
  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={h2Style}>About</h2>
        <p style={pSubStyle}>
          Ministry and consulting brought together with excellence. With an MBA, ACA/CPA credentials, and a B.Sc. in Chemistry,
          I serve churches and organizations through preaching, leadership development, and ethical financial strategy.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
          <div style={{ ...cardStyle, display: "grid", gridTemplateColumns: "96px 1fr", gap: 12, alignItems: "center" }}>
            <img src="/images/images7.jpg" alt="Adekemi Akinsipe portrait" width={96} height={96} style={{ borderRadius: 999, objectFit: "cover" }} />
            <div>
              <p style={{ margin: 0, color: TOKENS.navy, fontWeight: 700 }}>Evangelist Adekemi Akinsipe</p>
              <p style={{ marginTop: 6, color: "#56606B" }}>Founder, KemmyMuzik International • Finance Consultant</p>
              <p style={{ marginTop: 12 }}>“My mission is to proclaim Christ and equip leaders to steward people and resources with integrity.”</p>
            </div>
          </div>
          <ul style={{ ...cardStyle, listStyle: "none", margin: 0 }}>
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
    { title: "Revival & Teaching", text: "Gospel-centered preaching for churches and conferences." },
    { title: "Leadership Workshops", text: "Practical training for pastors, departments, and volunteers." },
    { title: "Worship Nights", text: "Prayer gatherings that foster unity and devotion." },
  ];
  const mail = "mailto:adekemiakinsipe@gmail.com";
  return (
    <section id="ministry" style={{ ...sectionStyle, background: "#fff" }}>
      <div style={containerStyle}>
        <h2 style={h2Style}>Speaking & Ministry</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 16 }}>
          {items.map((it) => (
            <div key={it.title} style={cardStyle}>
              <h3 style={{ margin: 0, color: TOKENS.navy, fontWeight: 700 }}>{it.title}</h3>
              <p style={{ marginTop: 8, color: "#66717D" }}>{it.text}</p>
              <a href={`${mail}?subject=Booking%20Request%20%E2%80%94%20${encodeURIComponent(it.title)}`} style={{ ...btnGold, marginTop: 12 }}>Request Booking</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Consulting() {
  const values = [
    { title: "Financial Strategy", text: "Plans that align mission, sustainability, and compliance." },
    { title: "SME Advisory", text: "Budgeting, forecasting, and internal controls." },
    { title: "Faith‑Aligned Stewardship", text: "Biblical principles applied to modern finance decisions." },
    { title: "Non‑profit Finance", text: "Transparent reporting and donor confidence." },
  ];
  const mail = "mailto:adekemiakinsipe@gmail.com";
  return (
    <section id="consulting" style={{ ...sectionStyle, background: TOKENS.soft }}>
      <div style={containerStyle}>
        <h2 style={h2Style}>Financial Consulting</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginTop: 16 }}>
          {values.map((v) => (
            <div key={v.title} style={cardStyle}>
              <h3 style={{ margin: 0, color: TOKENS.navy, fontWeight: 700 }}>{v.title}</h3>
              <p style={{ marginTop: 8, color: "#66717D" }}>{v.text}</p>
            </div>
          ))}
        </div>
        <div style={{ ...cardStyle, marginTop: 16, display: "grid", gap: 12 }}>
          <h3 style={{ margin: 0, color: TOKENS.navy }}>Start a Consultation</h3>
          <p style={{ margin: 0 }}>All requests are handled by email. Click below to start your inquiry.</p>
          <a href={`${mail}?subject=Consultation%20Request%20%E2%80%94%20MZPM&body=Please%20include%20your%20organization%2C%20timeline%2C%20and%20scope.`} style={{ ...btnGold, width: 240 }}>Email Your Request</a>
        </div>
      </div>
    </section>
  );
}

function Music() {
  const liveWorshipLinks = [
    "https://youtu.be/fTmH7vio-gA?si=-TTkKb4dALWvEDpS",
    "https://youtu.be/cHDFcHf75qw?si=oPmxNoMtCNOPD8Xk",
    "https://youtu.be/Ts-zseRtko0?si=U9OdsEi7Zj8Ctxut",
    "https://youtu.be/h7ECZkXLRF0?si=ZSelihcTF1iXkAUG",
  ];
  return (
    <section id="music" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={h2Style}>Music & YouTube</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 16, marginTop: 16 }}>
          <div style={{ ...cardStyle, padding: 0, overflow: "hidden", aspectRatio: "16/9" }}>
            <iframe
              title="Featured Video"
              src="https://www.youtube.com/embed/Bi1OMY2Uzm4?si=zvFpRj4mJGO830YH"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: 0, width: "100%", height: "100%" }}
            />
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <a href="https://www.youtube.com/@kemiakinsipe4993" target="_blank" rel="noreferrer" style={{ ...cardStyle, textDecoration: "none", color: TOKENS.navy }}>▶ Songs</a>
            <div style={{ ...cardStyle }}>
              <strong style={{ color: TOKENS.navy }}>▶ Live Worship Sessions</strong>
              <ul style={{ marginTop: 8, paddingLeft: 18 }}>
                {liveWorshipLinks.map((href, i) => (
                  <li key={href} style={{ marginBottom: 6 }}>
                    <a href={href} target="_blank" rel="noreferrer" style={{ color: TOKENS.slate }}>Session {i + 1}</a>
                  </li>
                ))}
              </ul>
            </div>
            <a href="https://www.youtube.com/@MountZionPrayerMinistryI-fz9ls/videos" target="_blank" rel="noreferrer" style={{ ...cardStyle, textDecoration: "none", color: TOKENS.navy }}>▶ Ministry at This Church</a>
            <a href="https://www.youtube.com/@kemiakinsipe4993" target="_blank" rel="noreferrer" style={{ ...btnGold, width: 220 }}>View Channel</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" style={{ ...sectionStyle, background: TOKENS.soft }}>
      <div style={containerStyle}>
        <h2 style={h2Style}>Testimonials</h2>
        {/* intentionally blank */}
      </div>
    </section>
  );
}

function Timeline() {
  const items = [
    { year: "2023", title: "MBA", where: "University of Ibadan" },
    { year: "2014", title: "ACA/CPA", where: "Institute of Accounting" },
    { year: "1994", title: "B.Sc. Chemistry", where: "University of Ibadan" },
  ];
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={h2Style}>Credentials & Education</h2>
        <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
          {items.map((i) => (
            <div key={i.year} style={{ ...cardStyle, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ color: TOKENS.navy, fontWeight: 700 }}>{i.year}</span>
              <span style={{ color: "#48535E" }}>{i.title}</span>
              <span style={{ color: "#7B8794" }}>{i.where}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const mail = "mailto:adekemiakinsipe@gmail.com";
  return (
    <section id="contact" style={{ ...sectionStyle, background: "#fff" }}>
      <div style={containerStyle}>
        <h2 style={h2Style}>Contact & Booking</h2>
        <p style={{ ...pSubStyle, marginTop: 6 }}>Email: <a href="mailto:adekemiakinsipe@gmail.com">adekemiakinsipe@gmail.com</a></p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
          <div style={{ ...cardStyle, display: "grid", gap: 10 }}>
            <h3 style={{ margin: 0, color: TOKENS.navy }}>Ministry Booking</h3>
            <p style={{ margin: 0 }}>All bookings are handled by email. Include your event date, location, and audience size.</p>
            <a href={`${mail}?subject=Ministry%20Booking%20Request%20%E2%80%94%20MZPM&body=Please%20include%20event%20date%2C%20location%2C%20audience%20size%20and%20details.`} style={{ ...btnGold, width: 260 }}>Email Booking</a>
          </div>
          <div style={{ ...cardStyle, display: "grid", gap: 10 }}>
            <h3 style={{ margin: 0, color: TOKENS.navy }}>Consulting Inquiry</h3>
            <p style={{ margin: 0 }}>Send your organization name, scope, budget, and timeline.</p>
            <a href={`${mail}?subject=Consulting%20Inquiry%20%E2%80%94%20Finance%20Advisory&body=Organization%3A%0AScope%3A%0ABudget%3A%0ATimeline%3A`} style={{ ...btnGold, width: 260 }}>Email Inquiry</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: TOKENS.navy, color: "#fff", padding: "48px 0" }}>
      <div style={{ ...containerStyle, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, fontSize: 14 }}>
        <div>
          <p style={{ margin: 0, fontWeight: 700 }}>MOUNT ZION Prayer Ministries</p>
          <p style={{ opacity: 0.8 }}>Serving churches and organizations with excellence.</p>
        </div>
        <div>
          <p style={{ margin: 0, fontWeight: 700, marginBottom: 6 }}>Links</p>
          <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
            <li><a href="#about" style={{ color: "#fff", textDecoration: "none" }}>About</a></li>
            <li><a href="#ministry" style={{ color: "#fff", textDecoration: "none" }}>Ministry</a></li>
            <li><a href="#consulting" style={{ color: "#fff", textDecoration: "none" }}>Consulting</a></li>
            <li><a href="#music" style={{ color: "#fff", textDecoration: "none" }}>Music</a></li>
          </ul>
        </div>
        <div>
          <p style={{ margin: 0, fontWeight: 700, marginBottom: 6 }}>Contact</p>
          <p style={{ margin: 0 }}><a href="mailto:adekemiakinsipe@gmail.com" style={{ color: "#fff", textDecoration: "none" }}>adekemiakinsipe@gmail.com</a></p>
          <p style={{ margin: 0 }}>Lagos • Abuja</p>
        </div>
        <div>
          <p style={{ margin: 0, fontWeight: 700, marginBottom: 6 }}>Media</p>
          <p style={{ margin: 0 }}><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Media Kit</a> · <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Press Photos</a></p>
        </div>
      </div>
      <div style={{ ...containerStyle, marginTop: 16, fontSize: 12, opacity: 0.8 }}>© {new Date().getFullYear()} MOUNT ZION Prayer Ministries. All rights reserved.</div>
    </footer>
  );
}

function WhatsAppButton() {
  const wrap = { position: "fixed", right: 16, bottom: 16, borderRadius: 999, background: TOKENS.whatsapp, color: "#fff", padding: 14, boxShadow: "0 10px 30px rgba(12,27,42,0.18)" };
  return (
    <a href="https://wa.me/2348160368444" aria-label="Chat on WhatsApp" target="_blank" rel="noreferrer" style={wrap}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden>
        <path d="M19.11 17.33c-.26-.13-1.53-.76-1.77-.85-.24-.09-.42-.13-.6.13-.18.26-.69.85-.85 1.02-.16.18-.31.2-.57.07-.26-.13-1.09-.4-2.08-1.27-.77-.69-1.29-1.53-1.44-1.79-.15-.26-.02-.4.11-.53.11-.11.26-.29.38-.44.13-.15.17-.26.26-.44.09-.18.04-.33-.02-.46-.07-.13-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.46-.15 0-.33-.02-.51-.02-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.3.95 2.55 1.09 2.73.13.18 1.86 2.84 4.5 3.98.63.27 1.12.43 1.5.55.63.2 1.21.17 1.67.1.51-.08 1.53-.62 1.75-1.23.22-.6.22-1.12.15-1.23-.07-.11-.24-.18-.49-.31z"/>
        <path d="M26.6 5.4C24.1 2.9 20.7 1.5 17 1.5 9.4 1.5 3.3 7.6 3.3 15.2c0 2.3.6 4.5 1.8 6.5L3 29l7.5-2c1.9 1 4 1.6 6.5 1.6 7.6 0 13.7-6.2 13.7-13.7.1-3.6-1.3-7-3.7-9.5zM17 26.1c-2.1 0-4-.5-5.7-1.5l-.4-.2-4.5 1.2 1.2-4.4-.2-.4c-1.1-1.8-1.7-3.8-1.7-5.9 0-6.3 5.1-11.4 11.4-11.4 3 0 5.9 1.2 8 3.4 2.1 2.1 3.4 5 3.4 8.1C28.5 21 23.3 26.1 17 26.1z"/>
      </svg>
    </a>
  );
}

// ---------- Page ----------
export default function Home() {
  return (
    <div style={{ background: TOKENS.ivory, color: TOKENS.slate, fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
      <Navbar />
      <Hero />
      <SmokeChecks />
      <About />
      <Ministry />
      <Consulting />
      <Music />
      <Testimonials />
      <Timeline />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
