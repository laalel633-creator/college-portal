import { useState } from "react";

const COURSES = [
  "BSc Computer Science (BSC-CS-101)",
  "BA Business Management (BA-BUS-201)",
  "BSc Nursing – Adult (BSC-NUR-301)",
];

const s: Record<string, React.CSSProperties> = {
  page: { maxWidth: 600, margin: "0 auto", padding: "32px 16px" },
  h1: { fontSize: 26, fontWeight: 700, marginBottom: 6, color: "#1a1a1a" },
  lead: { fontSize: 15, color: "#555", marginBottom: 28 },
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
    marginBottom: 18,
  },
  select: {
    display: "block",
    width: "100%",
    padding: "8px 10px",
    fontSize: 14,
    border: "1px solid #bbb",
    borderRadius: 4,
    boxSizing: "border-box" as const,
    marginBottom: 18,
    background: "#fff",
  },
  btn: {
    padding: "9px 24px",
    background: "#1d4ed8",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  btnDisabled: {
    padding: "9px 24px",
    background: "#93c5fd",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600,
    cursor: "not-allowed",
  },
  success: {
    maxWidth: 500,
    margin: "60px auto",
    padding: "32px 16px",
    textAlign: "center" as const,
  },
  successH: {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 10,
    color: "#1a1a1a",
  },
  successP: { fontSize: 15, color: "#555", marginBottom: 20 },
  btnOutline: {
    padding: "8px 18px",
    background: "#fff",
    color: "#1d4ed8",
    border: "1px solid #1d4ed8",
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
};

export function ApplyPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 600);
  }

  if (submitted) {
    return (
      <div data-ocid="apply.success_state" style={s.success}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>🎓</div>
        <h2 style={s.successH}>Application Received!</h2>
        <p style={s.successP}>
          Thanks, <strong>{name}</strong>! We got your application for{" "}
          <strong>{course}</strong>. We will be in touch at{" "}
          <strong>{email}</strong> within 5 working days.
        </p>
        <button
          type="button"
          style={s.btnOutline}
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            setPhone("");
            setCourse("");
          }}
          data-ocid="apply.reset_button"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div data-ocid="apply.page" style={s.page}>
      <h1 style={s.h1}>Apply to Westbrook</h1>
      <p style={s.lead}>
        Fill in the form below and we will be in touch to discuss next steps.
      </p>

      <form onSubmit={handleSubmit}>
        <label style={s.label} htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          style={s.input}
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          data-ocid="apply.name_input"
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
          data-ocid="apply.email_input"
        />

        <label style={s.label} htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          style={s.input}
          placeholder="07700 900 000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          data-ocid="apply.phone_input"
        />

        <label style={s.label} htmlFor="course">
          Course Choice
        </label>
        <select
          id="course"
          style={s.select}
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
          data-ocid="apply.course_select"
        >
          <option value="">Select a course…</option>
          {COURSES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <button
          type="submit"
          style={loading || !course ? s.btnDisabled : s.btn}
          disabled={loading || !course}
          data-ocid="apply.submit_button"
        >
          {loading ? "Submitting…" : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
