import { useState } from "react";

const s: Record<string, React.CSSProperties> = {
  page: { maxWidth: 860, margin: "0 auto", padding: "32px 16px" },
  h1: { fontSize: 26, fontWeight: 700, marginBottom: 6, color: "#1a1a1a" },
  lead: { fontSize: 15, color: "#555", marginBottom: 28 },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 },
  infoBlock: {},
  infoH: { fontSize: 17, fontWeight: 700, marginBottom: 12, color: "#1a1a1a" },
  infoItem: { marginBottom: 14 },
  infoLabel: {
    fontSize: 12,
    fontWeight: 700,
    color: "#888",
    textTransform: "uppercase" as const,
    letterSpacing: 1,
    marginBottom: 2,
  },
  infoValue: { fontSize: 14, color: "#333" },
  noteBox: {
    marginTop: 20,
    padding: "12px 14px",
    background: "#f3f4f6",
    border: "1px solid #e0e0e0",
    borderRadius: 4,
    fontSize: 13,
    color: "#555",
  },
  formH: { fontSize: 17, fontWeight: 700, marginBottom: 14, color: "#1a1a1a" },
  label: {
    display: "block",
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 4,
    color: "#333",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "8px 10px",
    fontSize: 14,
    border: "1px solid #bbb",
    borderRadius: 4,
    boxSizing: "border-box" as const,
    marginBottom: 14,
  },
  textarea: {
    display: "block",
    width: "100%",
    padding: "8px 10px",
    fontSize: 14,
    border: "1px solid #bbb",
    borderRadius: 4,
    boxSizing: "border-box" as const,
    marginBottom: 14,
    resize: "vertical" as const,
    fontFamily: "inherit",
  },
  btn: {
    padding: "9px 20px",
    background: "#1d4ed8",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  btnDisabled: {
    padding: "9px 20px",
    background: "#93c5fd",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600,
    cursor: "not-allowed",
  },
  btnOutline: {
    padding: "7px 16px",
    background: "#fff",
    color: "#1d4ed8",
    border: "1px solid #1d4ed8",
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  success: { padding: "20px 0", textAlign: "center" as const },
  successH: { fontSize: 18, fontWeight: 700, marginBottom: 8 },
  successP: { fontSize: 14, color: "#555", marginBottom: 14 },
};

const contactDetails = [
  {
    label: "Address",
    value:
      "Westbrook College, 1 College Lane, Westbrook, WB1 1AA, United Kingdom",
  },
  { label: "Phone", value: "+44 (0)1234 567 890" },
  { label: "Email", value: "info@westbrook.ac.uk" },
  { label: "Office Hours", value: "Monday–Friday: 08:30–17:00" },
];

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 500);
  }

  return (
    <div data-ocid="contact.page" style={s.page}>
      <h1 style={s.h1}>Contact Us</h1>
      <p style={s.lead}>
        We are happy to answer questions about admissions, courses, or anything
        else. Fill in the form or get in touch directly.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 40,
        }}
      >
        {/* Contact info */}
        <div style={s.infoBlock}>
          <h2 style={s.infoH}>College Information</h2>
          {contactDetails.map(({ label, value }) => (
            <div key={label} style={s.infoItem}>
              <p style={s.infoLabel}>{label}</p>
              <p style={s.infoValue}>{value}</p>
            </div>
          ))}
          <div style={s.noteBox}>
            <strong>Admissions enquiries:</strong>{" "}
            <a
              href="mailto:admissions@westbrook.ac.uk"
              style={{ color: "#1d4ed8" }}
            >
              admissions@westbrook.ac.uk
            </a>{" "}
            or call ext. 2200.
          </div>
        </div>

        {/* Message form */}
        <div>
          {submitted ? (
            <div data-ocid="contact.success_state" style={s.success}>
              <div style={{ fontSize: 40, marginBottom: 10 }}>✉️</div>
              <h3 style={s.successH}>Message Sent!</h3>
              <p style={s.successP}>
                Thanks, {name}. We will reply to <strong>{email}</strong> within
                2 working days.
              </p>
              <button
                type="button"
                style={s.btnOutline}
                onClick={() => {
                  setSubmitted(false);
                  setName("");
                  setEmail("");
                  setMessage("");
                }}
                data-ocid="contact.reset_button"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div>
              <h2 style={s.formH}>Send a Message</h2>
              <form onSubmit={handleSubmit}>
                <label style={s.label} htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  style={s.input}
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  data-ocid="contact.name_input"
                />

                <label style={s.label} htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  style={s.input}
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  data-ocid="contact.email_input"
                />

                <label style={s.label} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  style={s.textarea}
                  placeholder="How can we help?"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  data-ocid="contact.message_textarea"
                />

                <button
                  type="submit"
                  style={loading ? s.btnDisabled : s.btn}
                  disabled={loading}
                  data-ocid="contact.submit_button"
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
