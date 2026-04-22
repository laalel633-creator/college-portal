import { j as jsxRuntimeExports, L as Link } from "./index-7NoD-Do3.js";
const announcements = [
  {
    id: 1,
    date: "April 18, 2026",
    title: "Enrolment Open for Semester 2",
    body: "Applications for Semester 2 (July intake) are now open. Submit your application by 31 May 2026.",
    tag: "Admissions"
  },
  {
    id: 2,
    date: "April 10, 2026",
    title: "Campus Library Extended Hours",
    body: "The library will be open until 22:00 Monday–Thursday throughout the exam period starting 1 May.",
    tag: "Campus"
  },
  {
    id: 3,
    date: "March 28, 2026",
    title: "Guest Lecture: AI in Healthcare",
    body: "Dr. Priya Nair will deliver a free public lecture on Wednesday 6 May at 18:30 in Lecture Hall B.",
    tag: "Events"
  }
];
const s = {
  page: { maxWidth: 860, margin: "0 auto", padding: "32px 16px" },
  welcome: { marginBottom: 32 },
  h1: { fontSize: 26, fontWeight: 700, marginBottom: 10, color: "#1a1a1a" },
  intro: { fontSize: 15, color: "#444", lineHeight: 1.6, maxWidth: 600 },
  announcementsHeading: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 14,
    color: "#1a1a1a"
  },
  list: { listStyle: "none", padding: 0, margin: 0 },
  item: { borderBottom: "1px solid #e0e0e0", padding: "14px 0" },
  itemTitle: {
    fontWeight: 600,
    fontSize: 15,
    color: "#1a1a1a",
    marginBottom: 4
  },
  itemMeta: { fontSize: 12, color: "#888", marginBottom: 4 },
  itemBody: { fontSize: 14, color: "#555", lineHeight: 1.5 },
  ctaRow: {
    marginTop: 32,
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  },
  btnPrimary: {
    padding: "8px 18px",
    background: "#1d4ed8",
    color: "#fff",
    textDecoration: "none",
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600
  },
  btnOutline: {
    padding: "8px 18px",
    background: "#fff",
    color: "#1d4ed8",
    textDecoration: "none",
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600,
    border: "1px solid #1d4ed8"
  }
};
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", style: s.page, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.welcome, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: s.h1, children: "Welcome to Westbrook College" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: s.intro, children: "Westbrook College is a friendly community college offering undergraduate programmes in Computer Science, Business, and Nursing. We have been helping students build their futures since 1968. Whether you are just starting out or looking to advance your career, there is a place for you here." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.ctaRow, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apply", "data-ocid": "home.apply_button", style: s.btnPrimary, children: "Apply Now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/courses",
            "data-ocid": "home.courses_button",
            style: s.btnOutline,
            children: "View Courses"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.announcements.section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: s.announcementsHeading, children: "Latest Announcements" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: s.list, children: announcements.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          style: s.item,
          "data-ocid": `home.announcements.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: s.itemMeta, children: [
              item.tag,
              " · ",
              item.date
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: s.itemTitle, children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: s.itemBody, children: item.body })
          ]
        },
        item.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          marginTop: 32,
          padding: "20px 0",
          borderTop: "1px solid #e0e0e0"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 14, color: "#444", marginBottom: 12 }, children: "Have questions? Our admissions team is happy to help." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 12, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                "data-ocid": "home.contact_button",
                style: s.btnOutline,
                children: "Contact Us"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/apply",
                "data-ocid": "home.apply_cta_button",
                style: s.btnPrimary,
                children: "Start Application"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
export {
  HomePage
};
