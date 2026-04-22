import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "@tanstack/react-router";

const s: Record<string, React.CSSProperties> = {
  page: { maxWidth: 700, margin: "0 auto", padding: "32px 16px" },
  topBar: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap" as const,
    gap: 12,
    marginBottom: 28,
  },
  h1: { fontSize: 22, fontWeight: 700, marginBottom: 4, color: "#1a1a1a" },
  sub: { fontSize: 14, color: "#666" },
  logoutBtn: {
    padding: "7px 16px",
    background: "#f3f4f6",
    border: "1px solid #ccc",
    borderRadius: 4,
    fontSize: 13,
    cursor: "pointer",
  },
  section: { marginBottom: 28 },
  sectionH: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 10,
    color: "#1a1a1a",
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: 6,
  },
  dl: {
    display: "grid",
    gridTemplateColumns: "140px 1fr",
    gap: "8px 16px",
    fontSize: 14,
  },
  dt: { fontWeight: 600, color: "#666" },
  dd: { color: "#333", margin: 0 },
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 14 },
  th: {
    textAlign: "left" as const,
    padding: "8px 12px",
    background: "#e8e8e8",
    fontWeight: 600,
    borderBottom: "2px solid #ccc",
  },
  td: { padding: "9px 12px", borderBottom: "1px solid #e0e0e0" },
  tdRight: {
    padding: "9px 12px",
    borderBottom: "1px solid #e0e0e0",
    textAlign: "right" as const,
  },
  gradeA: { fontWeight: 700, color: "#15803d" },
  gradeB: { fontWeight: 700, color: "#1d4ed8" },
  gradeC: { fontWeight: 700, color: "#b45309" },
  gradeD: { fontWeight: 700, color: "#b91c1c" },
};

function gradeStyle(grade: string) {
  if (grade.startsWith("A")) return s.gradeA;
  if (grade.startsWith("B")) return s.gradeB;
  if (grade.startsWith("C")) return s.gradeC;
  return s.gradeD;
}

export function PortalPage() {
  const { student, logout } = useAuth();
  const navigate = useNavigate();

  if (!student) return null;

  function handleLogout() {
    logout();
    void navigate({ to: "/login" });
  }

  const avgScore =
    student.grades.length > 0
      ? Math.round(
          student.grades.reduce((sum, g) => sum + Number(g.score), 0) /
            student.grades.length,
        )
      : 0;

  return (
    <div data-ocid="portal.page" style={s.page}>
      <div style={s.topBar}>
        <div>
          <h1 style={s.h1}>Welcome, {student.name.split(" ")[0]}</h1>
          <p style={s.sub}>
            Student ID: {student.studentId} &nbsp;&middot;&nbsp;{" "}
            {student.enrolledCourse}
          </p>
        </div>
        <button
          type="button"
          style={s.logoutBtn}
          onClick={handleLogout}
          data-ocid="portal.logout_button"
        >
          Logout
        </button>
      </div>

      {/* Personal details */}
      <div style={s.section} data-ocid="portal.personal.card">
        <h2 style={s.sectionH}>Personal Details</h2>
        <dl style={s.dl}>
          <dt style={s.dt}>Full Name</dt>
          <dd style={s.dd}>{student.name}</dd>
          <dt style={s.dt}>Student ID</dt>
          <dd style={s.dd}>{student.studentId}</dd>
          <dt style={s.dt}>Course</dt>
          <dd style={s.dd}>{student.enrolledCourse}</dd>
          <dt style={s.dt}>Address</dt>
          <dd style={s.dd}>{student.personalDetails.address}</dd>
          <dt style={s.dt}>Phone</dt>
          <dd style={s.dd}>{student.personalDetails.phone}</dd>
        </dl>
      </div>

      {/* Grades */}
      <div style={s.section} data-ocid="portal.grades.card">
        <h2 style={s.sectionH}>Academic Grades &mdash; Average: {avgScore}%</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={s.table} data-ocid="portal.grades.table">
            <thead>
              <tr>
                <th style={s.th}>Module</th>
                <th style={{ ...s.th, textAlign: "right" }}>Score</th>
                <th style={{ ...s.th, textAlign: "right" }}>Grade</th>
              </tr>
            </thead>
            <tbody>
              {student.grades.map((g, i) => (
                <tr key={g.subject} data-ocid={`portal.grades.item.${i + 1}`}>
                  <td style={s.td}>{g.subject}</td>
                  <td style={s.tdRight}>{Number(g.score)}%</td>
                  <td style={{ ...s.tdRight, ...gradeStyle(g.grade) }}>
                    {g.grade}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
