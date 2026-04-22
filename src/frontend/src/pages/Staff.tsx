const staff = [
  {
    staffId: "WC-001",
    name: "Professor Diana Hartwell",
    role: "Principal",
    email: "d.hartwell@westbrook.ac.uk",
  },
  {
    staffId: "WC-002",
    name: "Dr. Marcus Okafor",
    role: "Head of Computer Science",
    email: "m.okafor@westbrook.ac.uk",
  },
  {
    staffId: "WC-003",
    name: "Dr. Sana Patel",
    role: "Head of Business",
    email: "s.patel@westbrook.ac.uk",
  },
  {
    staffId: "WC-004",
    name: "Dr. Chloe Renard",
    role: "Head of Health Sciences",
    email: "c.renard@westbrook.ac.uk",
  },
  {
    staffId: "WC-005",
    name: "James Whitmore",
    role: "Senior Lecturer, Software Engineering",
    email: "j.whitmore@westbrook.ac.uk",
  },
  {
    staffId: "WC-006",
    name: "Dr. Amara Diallo",
    role: "Senior Lecturer, Marketing",
    email: "a.diallo@westbrook.ac.uk",
  },
  {
    staffId: "WC-007",
    name: "Fiona Clarke",
    role: "Admissions Officer",
    email: "f.clarke@westbrook.ac.uk",
  },
  {
    staffId: "WC-008",
    name: "Tom Ngu",
    role: "IT Support Manager",
    email: "t.ngu@westbrook.ac.uk",
  },
];

const s: Record<string, React.CSSProperties> = {
  page: { maxWidth: 860, margin: "0 auto", padding: "32px 16px" },
  h1: { fontSize: 26, fontWeight: 700, marginBottom: 6, color: "#1a1a1a" },
  lead: { fontSize: 15, color: "#555", marginBottom: 24 },
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 14 },
  th: {
    textAlign: "left" as const,
    padding: "10px 12px",
    background: "#e8e8e8",
    fontWeight: 600,
    borderBottom: "2px solid #ccc",
  },
  td: { padding: "10px 12px", borderBottom: "1px solid #e0e0e0" },
  emailLink: { color: "#1d4ed8", textDecoration: "none" },
  id: { fontFamily: "monospace", fontSize: 12, color: "#888" },
};

export function StaffPage() {
  return (
    <div data-ocid="staff.page" style={s.page}>
      <h1 style={s.h1}>Staff Directory</h1>
      <p style={s.lead}>
        Meet the team at Westbrook College. You can reach any staff member by
        email.
      </p>

      <div data-ocid="staff.list" style={{ overflowX: "auto" }}>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Name</th>
              <th style={s.th}>Role</th>
              <th style={s.th}>Email</th>
              <th style={s.th}>Staff ID</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((member, i) => (
              <tr key={member.staffId} data-ocid={`staff.item.${i + 1}`}>
                <td style={s.td}>{member.name}</td>
                <td style={s.td}>{member.role}</td>
                <td style={s.td}>
                  <a
                    href={`mailto:${member.email}`}
                    style={s.emailLink}
                    data-ocid={`staff.email_link.${i + 1}`}
                  >
                    {member.email}
                  </a>
                </td>
                <td style={{ ...s.td, ...s.id }}>{member.staffId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
