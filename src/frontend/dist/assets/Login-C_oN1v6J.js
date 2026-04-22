import { u as useAuth, a as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-7NoD-Do3.js";
const DEMO_ACCOUNTS = {
  S1001: {
    studentId: "WC-S1001",
    name: "Oliver Bennett",
    enrolledCourse: "BSc Computer Science",
    grades: [
      {
        subject: "Algorithms & Data Structures",
        score: BigInt(78),
        grade: "A"
      },
      { subject: "Web Development", score: BigInt(85), grade: "A+" },
      { subject: "Database Systems", score: BigInt(72), grade: "B+" },
      { subject: "Software Engineering", score: BigInt(68), grade: "B" }
    ],
    personalDetails: {
      address: "14 Maple Avenue, Westbrook, WB1 2QX",
      phone: "07712 334 891"
    }
  },
  S1002: {
    studentId: "WC-S1002",
    name: "Amelia Torres",
    enrolledCourse: "BA Business Management",
    grades: [
      { subject: "Principles of Marketing", score: BigInt(91), grade: "A+" },
      { subject: "Financial Accounting", score: BigInt(74), grade: "B+" },
      { subject: "Organisational Behaviour", score: BigInt(82), grade: "A" },
      { subject: "Business Strategy", score: BigInt(88), grade: "A" }
    ],
    personalDetails: {
      address: "6 Birchwood Close, Westbrook, WB3 5LR",
      phone: "07823 112 045"
    }
  }
};
const s = {
  page: { maxWidth: 500, margin: "60px auto", padding: "0 16px" },
  h1: { fontSize: 22, fontWeight: 700, marginBottom: 6, color: "#1a1a1a" },
  sub: { fontSize: 14, color: "#666", marginBottom: 24 },
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
    marginBottom: 16
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
    width: "100%"
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
    width: "100%"
  },
  error: { color: "#b91c1c", fontSize: 13, marginBottom: 12 },
  hint: {
    marginTop: 16,
    padding: "10px 12px",
    background: "#f3f4f6",
    border: "1px solid #e0e0e0",
    borderRadius: 4,
    fontSize: 13,
    color: "#555"
  },
  mono: { fontFamily: "monospace", fontWeight: 700 }
};
function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      const student = DEMO_ACCOUNTS[username];
      if (student && password === "password123") {
        login(student);
        void navigate({ to: "/portal" });
      } else {
        setError("Invalid student ID or password.");
      }
      setLoading(false);
    }, 500);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "login.page", style: s.page, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: s.h1, children: "Student Login" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: s.sub, children: "Enter your student ID and password to access your portal." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: s.label, htmlFor: "username", children: "Student ID" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "username",
          style: s.input,
          placeholder: "e.g. S1001",
          value: username,
          onChange: (e) => setUsername(e.target.value),
          required: true,
          "data-ocid": "login.username_input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: s.label, htmlFor: "password", children: "Password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "password",
          type: "password",
          style: s.input,
          placeholder: "Enter your password",
          value: password,
          onChange: (e) => setPassword(e.target.value),
          required: true,
          "data-ocid": "login.password_input"
        }
      ),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: s.error, "data-ocid": "login.error_state", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          style: loading ? s.btnDisabled : s.btn,
          disabled: loading,
          "data-ocid": "login.submit_button",
          children: loading ? "Signing in…" : "Sign In"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.hint, children: [
      "Demo credentials: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s.mono, children: "S1001" }),
      " or",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s.mono, children: "S1002" }),
      " with password",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s.mono, children: "password123" })
    ] })
  ] });
}
export {
  LoginPage
};
