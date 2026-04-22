import { j as jsxRuntimeExports, L as Link } from "./index-7NoD-Do3.js";
const courses = [
  {
    code: "BSC-CS-101",
    name: "BSc Computer Science",
    description: "A three-year programme covering software engineering, algorithms, databases, AI, and systems design. Includes industry placement and a final-year project.",
    entryRequirements: "A-levels: ABB or equivalent (Mathematics required). GCSE English Grade 4+. IELTS 6.5 for international applicants."
  },
  {
    code: "BA-BUS-201",
    name: "BA Business Management",
    description: "Covers strategic thinking, leadership, and analytical skills. Modules include Marketing, Finance, Operations, HR, and Entrepreneurship with optional placement year.",
    entryRequirements: "A-levels: BBB or equivalent. GCSE Mathematics Grade 4+. No specific subject requirement. IELTS 6.0 for international applicants."
  },
  {
    code: "BSC-NUR-301",
    name: "BSc Nursing (Adult)",
    description: "A three-year NMC-approved programme combining theory with clinical placements in NHS trust settings. Graduates can register as qualified adult nurses.",
    entryRequirements: "A-levels: BBC or equivalent (Biology preferred). Evidence of caring experience. Enhanced DBS check required. IELTS 7.0 for international applicants."
  }
];
const s = {
  page: { maxWidth: 860, margin: "0 auto", padding: "32px 16px" },
  h1: { fontSize: 26, fontWeight: 700, marginBottom: 6, color: "#1a1a1a" },
  lead: { fontSize: 15, color: "#555", marginBottom: 28 },
  table: { width: "100%", borderCollapse: "collapse", fontSize: 14 },
  th: {
    textAlign: "left",
    padding: "10px 12px",
    background: "#e8e8e8",
    fontWeight: 600,
    borderBottom: "2px solid #ccc"
  },
  td: {
    padding: "12px 12px",
    borderBottom: "1px solid #e0e0e0",
    verticalAlign: "top"
  },
  code: {
    fontFamily: "monospace",
    fontSize: 12,
    background: "#f3f4f6",
    padding: "2px 6px",
    borderRadius: 3,
    border: "1px solid #ddd"
  },
  req: { color: "#555", marginTop: 4, fontSize: 13 },
  link: { color: "#1d4ed8", textDecoration: "none", fontWeight: 600 },
  footer: {
    marginTop: 28,
    padding: "16px 0",
    borderTop: "1px solid #e0e0e0",
    fontSize: 14,
    color: "#444"
  }
};
function CoursesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "courses.page", style: s.page, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: s.h1, children: "Our Courses" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: s.lead, children: "We offer three full-time undergraduate programmes. Each is designed with industry input so you are ready to work from day one." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "courses.list", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { style: s.table, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Course" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "About" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Entry Requirements" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: { ...s.th, width: 100 }, children: "Apply" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: courses.map((course, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { "data-ocid": `courses.item.${i + 1}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { style: s.td, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { display: "block", marginBottom: 4 }, children: course.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s.code, children: course.code })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: s.td, children: course.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { ...s.td, ...s.req }, children: course.entryRequirements }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: s.td, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/apply",
            "data-ocid": `courses.apply_button.${i + 1}`,
            style: s.link,
            children: "Apply →"
          }
        ) })
      ] }, course.code)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.footer, children: [
      "Not sure which course is right for you?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "courses.contact_button", style: s.link, children: "Contact our admissions team" }),
      " ",
      "and we will help you choose."
    ] })
  ] });
}
export {
  CoursesPage
};
