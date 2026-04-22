import { Link } from "@tanstack/react-router";

const announcements = [
  {
    id: 1,
    date: "April 18, 2026",
    title: "Enrolment Open for Semester 2",
    body: "Applications for Semester 2 (July intake) are now open. Submit your application by 31 May 2026.",
    tag: "Admissions",
  },
  {
    id: 2,
    date: "April 10, 2026",
    title: "Campus Library Extended Hours",
    body: "The library will be open until 22:00 Monday–Thursday throughout the exam period starting 1 May.",
    tag: "Campus",
  },
  {
    id: 3,
    date: "March 28, 2026",
    title: "Guest Lecture: AI in Healthcare",
    body: "Dr. Priya Nair will deliver a free public lecture on Wednesday 6 May at 18:30 in Lecture Hall B.",
    tag: "Events",
  },
];

const s: Record<string, React.CSSProperties> = {
  page: { maxWidth: 860, margin: "0 auto", padding: "32px 16px" },
  welcome: { marginBottom: 32 },
  h1: { fontSize: 26, fontWeight: 700, marginBottom: 10, color: "#1a1a1a" },
  intro: { fontSize: 15, color: "#444", lineHeight: 1.6, maxWidth: 600 },
  announcementsHeading: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 14,
    color: "#1a1a1a",
  },
  list: { listStyle: "none", padding: 0, margin: 0 },
  item: { borderBottom: "1px solid #e0e0e0", padding: "14px 0" },
  itemTitle: {
    fontWeight: 600,
    fontSize: 15,
    color: "#1a1a1a",
    marginBottom: 4,
  },
  itemMeta: { fontSize: 12, color: "#888", marginBottom: 4 },
  itemBody: { fontSize: 14, color: "#555", lineHeight: 1.5 },
  ctaRow: {
    marginTop: 32,
    display: "flex",
    gap: 12,
    flexWrap: "wrap" as const,
  },
  btnPrimary: {
    padding: "8px 18px",
    background: "#1d4ed8",
    color: "#fff",
    textDecoration: "none",
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600,
  },
  btnOutline: {
    padding: "8px 18px",
    background: "#fff",
    color: "#1d4ed8",
    textDecoration: "none",
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600,
    border: "1px solid #1d4ed8",
  },
};

export function HomePage() {
  return (
    <div data-ocid="home.page" style={s.page}>
      <div style={s.welcome}>
        <h1 style={s.h1}>Welcome to Westbrook College</h1>
        <p style={s.intro}>
          Westbrook College is a friendly community college offering
          undergraduate programmes in Computer Science, Business, and Nursing.
          We have been helping students build their futures since 1968. Whether
          you are just starting out or looking to advance your career, there is
          a place for you here.
        </p>
        <div style={s.ctaRow}>
          <Link to="/apply" data-ocid="home.apply_button" style={s.btnPrimary}>
            Apply Now
          </Link>
          <Link
            to="/courses"
            data-ocid="home.courses_button"
            style={s.btnOutline}
          >
            View Courses
          </Link>
        </div>
      </div>

      <div data-ocid="home.announcements.section">
        <h2 style={s.announcementsHeading}>Latest Announcements</h2>
        <ul style={s.list}>
          {announcements.map((item, i) => (
            <li
              key={item.id}
              style={s.item}
              data-ocid={`home.announcements.item.${i + 1}`}
            >
              <p style={s.itemMeta}>
                {item.tag} &middot; {item.date}
              </p>
              <p style={s.itemTitle}>{item.title}</p>
              <p style={s.itemBody}>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          marginTop: 32,
          padding: "20px 0",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <p style={{ fontSize: 14, color: "#444", marginBottom: 12 }}>
          Have questions? Our admissions team is happy to help.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link
            to="/contact"
            data-ocid="home.contact_button"
            style={s.btnOutline}
          >
            Contact Us
          </Link>
          <Link
            to="/apply"
            data-ocid="home.apply_cta_button"
            style={s.btnPrimary}
          >
            Start Application
          </Link>
        </div>
      </div>
    </div>
  );
}
