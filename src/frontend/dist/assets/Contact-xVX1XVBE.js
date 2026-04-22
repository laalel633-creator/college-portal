import { r as reactExports, j as jsxRuntimeExports } from "./index-7NoD-Do3.js";
const s = {
  page: { maxWidth: 860, margin: "0 auto", padding: "32px 16px" },
  h1: { fontSize: 26, fontWeight: 700, marginBottom: 6, color: "#1a1a1a" },
  lead: { fontSize: 15, color: "#555", marginBottom: 28 },
  infoBlock: {},
  infoH: { fontSize: 17, fontWeight: 700, marginBottom: 12, color: "#1a1a1a" },
  infoItem: { marginBottom: 14 },
  infoLabel: {
    fontSize: 12,
    fontWeight: 700,
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 2
  },
  infoValue: { fontSize: 14, color: "#333" },
  noteBox: {
    marginTop: 20,
    padding: "12px 14px",
    background: "#f3f4f6",
    border: "1px solid #e0e0e0",
    borderRadius: 4,
    fontSize: 13,
    color: "#555"
  },
  formH: { fontSize: 17, fontWeight: 700, marginBottom: 14, color: "#1a1a1a" },
  label: {
    display: "block",
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 4,
    color: "#333"
  },
  input: {
    display: "block",
    width: "100%",
    padding: "8px 10px",
    fontSize: 14,
    border: "1px solid #bbb",
    borderRadius: 4,
    boxSizing: "border-box",
    marginBottom: 14
  },
  textarea: {
    display: "block",
    width: "100%",
    padding: "8px 10px",
    fontSize: 14,
    border: "1px solid #bbb",
    borderRadius: 4,
    boxSizing: "border-box",
    marginBottom: 14,
    resize: "vertical",
    fontFamily: "inherit"
  },
  btn: {
    padding: "9px 20px",
    background: "#1d4ed8",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer"
  },
  btnDisabled: {
    padding: "9px 20px",
    background: "#93c5fd",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600,
    cursor: "not-allowed"
  },
  btnOutline: {
    padding: "7px 16px",
    background: "#fff",
    color: "#1d4ed8",
    border: "1px solid #1d4ed8",
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer"
  },
  success: { padding: "20px 0", textAlign: "center" },
  successH: { fontSize: 18, fontWeight: 700, marginBottom: 8 },
  successP: { fontSize: 14, color: "#555", marginBottom: 14 }
};
const contactDetails = [
  {
    label: "Address",
    value: "Westbrook College, 1 College Lane, Westbrook, WB1 1AA, United Kingdom"
  },
  { label: "Phone", value: "+44 (0)1234 567 890" },
  { label: "Email", value: "info@westbrook.ac.uk" },
  { label: "Office Hours", value: "Monday–Friday: 08:30–17:00" }
];
function ContactPage() {
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 500);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "contact.page", style: s.page, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: s.h1, children: "Contact Us" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: s.lead, children: "We are happy to answer questions about admissions, courses, or anything else. Fill in the form or get in touch directly." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 40
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.infoBlock, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: s.infoH, children: "College Information" }),
            contactDetails.map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.infoItem, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: s.infoLabel, children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: s.infoValue, children: value })
            ] }, label)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.noteBox, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Admissions enquiries:" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "mailto:admissions@westbrook.ac.uk",
                  style: { color: "#1d4ed8" },
                  children: "admissions@westbrook.ac.uk"
                }
              ),
              " ",
              "or call ext. 2200."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "contact.success_state", style: s.success, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 40, marginBottom: 10 }, children: "✉️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: s.successH, children: "Message Sent!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: s.successP, children: [
              "Thanks, ",
              name,
              ". We will reply to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: email }),
              " within 2 working days."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                style: s.btnOutline,
                onClick: () => {
                  setSubmitted(false);
                  setName("");
                  setEmail("");
                  setMessage("");
                },
                "data-ocid": "contact.reset_button",
                children: "Send Another Message"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: s.formH, children: "Send a Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: s.label, htmlFor: "name", children: "Your Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "name",
                  style: s.input,
                  placeholder: "Full name",
                  value: name,
                  onChange: (e) => setName(e.target.value),
                  required: true,
                  "data-ocid": "contact.name_input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: s.label, htmlFor: "email", children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "email",
                  type: "email",
                  style: s.input,
                  placeholder: "you@example.com",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  required: true,
                  "data-ocid": "contact.email_input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: s.label, htmlFor: "message", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "message",
                  style: s.textarea,
                  placeholder: "How can we help?",
                  rows: 5,
                  value: message,
                  onChange: (e) => setMessage(e.target.value),
                  required: true,
                  "data-ocid": "contact.message_textarea"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  style: loading ? s.btnDisabled : s.btn,
                  disabled: loading,
                  "data-ocid": "contact.submit_button",
                  children: loading ? "Sending…" : "Send Message"
                }
              )
            ] })
          ] }) })
        ]
      }
    )
  ] });
}
export {
  ContactPage
};
