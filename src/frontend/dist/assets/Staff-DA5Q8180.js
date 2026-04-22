import { j as jsxRuntimeExports } from "./index-7NoD-Do3.js";
const staff = [
  {
    staffId: "WC-001",
    name: "Professor Diana Hartwell",
    role: "Principal",
    email: "d.hartwell@westbrook.ac.uk"
  },
  {
    staffId: "WC-002",
    name: "Dr. Marcus Okafor",
    role: "Head of Computer Science",
    email: "m.okafor@westbrook.ac.uk"
  },
  {
    staffId: "WC-003",
    name: "Dr. Sana Patel",
    role: "Head of Business",
    email: "s.patel@westbrook.ac.uk"
  },
  {
    staffId: "WC-004",
    name: "Dr. Chloe Renard",
    role: "Head of Health Sciences",
    email: "c.renard@westbrook.ac.uk"
  },
  {
    staffId: "WC-005",
    name: "James Whitmore",
    role: "Senior Lecturer, Software Engineering",
    email: "j.whitmore@westbrook.ac.uk"
  },
  {
    staffId: "WC-006",
    name: "Dr. Amara Diallo",
    role: "Senior Lecturer, Marketing",
    email: "a.diallo@westbrook.ac.uk"
  },
  {
    staffId: "WC-007",
    name: "Fiona Clarke",
    role: "Admissions Officer",
    email: "f.clarke@westbrook.ac.uk"
  },
  {
    staffId: "WC-008",
    name: "Tom Ngu",
    role: "IT Support Manager",
    email: "t.ngu@westbrook.ac.uk"
  }
];
const s = {
  page: { maxWidth: 860, margin: "0 auto", padding: "32px 16px" },
  h1: { fontSize: 26, fontWeight: 700, marginBottom: 6, color: "#1a1a1a" },
  lead: { fontSize: 15, color: "#555", marginBottom: 24 },
  table: { width: "100%", borderCollapse: "collapse", fontSize: 14 },
  th: {
    textAlign: "left",
    padding: "10px 12px",
    background: "#e8e8e8",
    fontWeight: 600,
    borderBottom: "2px solid #ccc"
  },
  td: { padding: "10px 12px", borderBottom: "1px solid #e0e0e0" },
  emailLink: { color: "#1d4ed8", textDecoration: "none" },
  id: { fontFamily: "monospace", fontSize: 12, color: "#888" }
};
function StaffPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "staff.page", style: s.page, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: s.h1, children: "Staff Directory" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: s.lead, children: "Meet the team at Westbrook College. You can reach any staff member by email." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "staff.list", style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { style: s.table, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Staff ID" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: staff.map((member, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { "data-ocid": `staff.item.${i + 1}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: s.td, children: member.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: s.td, children: member.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: s.td, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `mailto:${member.email}`,
            style: s.emailLink,
            "data-ocid": `staff.email_link.${i + 1}`,
            children: member.email
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { ...s.td, ...s.id }, children: member.staffId })
      ] }, member.staffId)) })
    ] }) })
  ] });
}
export {
  StaffPage
};
