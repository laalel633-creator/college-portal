import { r as reactExports, j as jsxRuntimeExports } from "./index-7NoD-Do3.js";
const COURSES = [
  "BSc Computer Science (BSC-CS-101)",
  "BA Business Management (BA-BUS-201)",
  "BSc Nursing – Adult (BSC-NUR-301)"
];
const s = {
  page: { maxWidth: 600, margin: "0 auto", padding: "32px 16px" },
  h1: { fontSize: 26, fontWeight: 700, marginBottom: 6, color: "#1a1a1a" },
  lead: { fontSize: 15, color: "#555", marginBottom: 28 },
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
    marginBottom: 18
  },
  select: {
    display: "block",
    width: "100%",
    padding: "8px 10px",
    fontSize: 14,
    border: "1px solid #bbb",
    borderRadius: 4,
    boxSizing: "border-box",
    marginBottom: 18,
    background: "#fff"
  },
  btn: {
    padding: "9px 24px",
    background: "#1d4ed8",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer"
  },
  btnDisabled: {
    padding: "9px 24px",
    background: "#93c5fd",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600,
    cursor: "not-allowed"
  },
  success: {
    maxWidth: 500,
    margin: "60px auto",
    padding: "32px 16px",
    textAlign: "center"
  },
  successH: {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 10,
    color: "#1a1a1a"
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
    cursor: "pointer"
  }
};
function ApplyPage() {
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [course, setCourse] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 600);
  }
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "apply.success_state", style: s.success, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 48, marginBottom: 12 }, children: "🎓" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: s.successH, children: "Application Received!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: s.successP, children: [
        "Thanks, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: name }),
        "! We got your application for",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: course }),
        ". We will be in touch at",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: email }),
        " within 5 working days."
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
            setPhone("");
            setCourse("");
          },
          "data-ocid": "apply.reset_button",
          children: "Submit Another Application"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "apply.page", style: s.page, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: s.h1, children: "Apply to Westbrook" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: s.lead, children: "Fill in the form below and we will be in touch to discuss next steps." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: s.label, htmlFor: "name", children: "Full Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "name",
          style: s.input,
          placeholder: "Your full name",
          value: name,
          onChange: (e) => setName(e.target.value),
          required: true,
          "data-ocid": "apply.name_input"
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
          "data-ocid": "apply.email_input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: s.label, htmlFor: "phone", children: "Phone Number" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "phone",
          type: "tel",
          style: s.input,
          placeholder: "07700 900 000",
          value: phone,
          onChange: (e) => setPhone(e.target.value),
          required: true,
          "data-ocid": "apply.phone_input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: s.label, htmlFor: "course", children: "Course Choice" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          id: "course",
          style: s.select,
          value: course,
          onChange: (e) => setCourse(e.target.value),
          required: true,
          "data-ocid": "apply.course_select",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a course…" }),
            COURSES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          style: loading || !course ? s.btnDisabled : s.btn,
          disabled: loading || !course,
          "data-ocid": "apply.submit_button",
          children: loading ? "Submitting…" : "Submit Application"
        }
      )
    ] })
  ] });
}
export {
  ApplyPage
};
