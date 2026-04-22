import { u as useAuth, a as useNavigate, j as jsxRuntimeExports } from "./index-7NoD-Do3.js";
const s = {
  page: { maxWidth: 700, margin: "0 auto", padding: "32px 16px" },
  topBar: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 28
  },
  h1: { fontSize: 22, fontWeight: 700, marginBottom: 4, color: "#1a1a1a" },
  sub: { fontSize: 14, color: "#666" },
  logoutBtn: {
    padding: "7px 16px",
    background: "#f3f4f6",
    border: "1px solid #ccc",
    borderRadius: 4,
    fontSize: 13,
    cursor: "pointer"
  },
  section: { marginBottom: 28 },
  sectionH: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 10,
    color: "#1a1a1a",
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: 6
  },
  dl: {
    display: "grid",
    gridTemplateColumns: "140px 1fr",
    gap: "8px 16px",
    fontSize: 14
  },
  dt: { fontWeight: 600, color: "#666" },
  dd: { color: "#333", margin: 0 },
  table: { width: "100%", borderCollapse: "collapse", fontSize: 14 },
  th: {
    textAlign: "left",
    padding: "8px 12px",
    background: "#e8e8e8",
    fontWeight: 600,
    borderBottom: "2px solid #ccc"
  },
  td: { padding: "9px 12px", borderBottom: "1px solid #e0e0e0" },
  tdRight: {
    padding: "9px 12px",
    borderBottom: "1px solid #e0e0e0",
    textAlign: "right"
  },
  gradeA: { fontWeight: 700, color: "#15803d" },
  gradeB: { fontWeight: 700, color: "#1d4ed8" },
  gradeC: { fontWeight: 700, color: "#b45309" },
  gradeD: { fontWeight: 700, color: "#b91c1c" }
};
function gradeStyle(grade) {
  if (grade.startsWith("A")) return s.gradeA;
  if (grade.startsWith("B")) return s.gradeB;
  if (grade.startsWith("C")) return s.gradeC;
  return s.gradeD;
}
function PortalPage() {
  const { student, logout } = useAuth();
  const navigate = useNavigate();
  if (!student) return null;
  function handleLogout() {
    logout();
    void navigate({ to: "/login" });
  }
  const avgScore = student.grades.length > 0 ? Math.round(
    student.grades.reduce((sum, g) => sum + Number(g.score), 0) / student.grades.length
  ) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "portal.page", style: s.page, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.topBar, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: s.h1, children: [
          "Welcome, ",
          student.name.split(" ")[0]
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: s.sub, children: [
          "Student ID: ",
          student.studentId,
          "  · ",
          " ",
          student.enrolledCourse
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          style: s.logoutBtn,
          onClick: handleLogout,
          "data-ocid": "portal.logout_button",
          children: "Logout"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.section, "data-ocid": "portal.personal.card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: s.sectionH, children: "Personal Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { style: s.dl, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { style: s.dt, children: "Full Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { style: s.dd, children: student.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { style: s.dt, children: "Student ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { style: s.dd, children: student.studentId }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { style: s.dt, children: "Course" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { style: s.dd, children: student.enrolledCourse }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { style: s.dt, children: "Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { style: s.dd, children: student.personalDetails.address }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { style: s.dt, children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { style: s.dd, children: student.personalDetails.phone })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.section, "data-ocid": "portal.grades.card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: s.sectionH, children: [
        "Academic Grades — Average: ",
        avgScore,
        "%"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { style: s.table, "data-ocid": "portal.grades.table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Module" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: { ...s.th, textAlign: "right" }, children: "Score" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: { ...s.th, textAlign: "right" }, children: "Grade" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: student.grades.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { "data-ocid": `portal.grades.item.${i + 1}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: s.td, children: g.subject }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { style: s.tdRight, children: [
            Number(g.score),
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { ...s.tdRight, ...gradeStyle(g.grade) }, children: g.grade })
        ] }, g.subject)) })
      ] }) })
    ] })
  ] });
}
export {
  PortalPage
};
