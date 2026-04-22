import { useAuth } from "@/context/AuthContext";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Staff", to: "/staff" },
  { label: "Apply", to: "/apply" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    void navigate({ to: "/" });
    setMobileOpen(false);
  }

  function isActive(to: string) {
    return location.pathname === to;
  }

  return (
    <header style={{ borderBottom: "2px solid #ccc", background: "#fff" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 56,
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            data-ocid="header.logo_link"
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: "#1a1a1a",
              textDecoration: "none",
            }}
          >
            Westbrook College
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex"
            style={{ gap: 4, alignItems: "center" }}
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`header.nav_${link.label.toLowerCase()}_link`}
                style={{
                  padding: "6px 12px",
                  fontSize: 14,
                  color: isActive(link.to) ? "#1d4ed8" : "#333",
                  textDecoration: "none",
                  fontWeight: isActive(link.to) ? 600 : 400,
                  borderBottom: isActive(link.to)
                    ? "2px solid #1d4ed8"
                    : "2px solid transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link
                  to="/portal"
                  data-ocid="header.nav_portal_link"
                  style={{
                    padding: "6px 12px",
                    fontSize: 14,
                    color: isActive("/portal") ? "#1d4ed8" : "#333",
                    textDecoration: "none",
                    fontWeight: isActive("/portal") ? 600 : 400,
                    borderBottom: isActive("/portal")
                      ? "2px solid #1d4ed8"
                      : "2px solid transparent",
                  }}
                >
                  My Portal
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  data-ocid="header.logout_button"
                  style={{
                    marginLeft: 8,
                    padding: "6px 14px",
                    fontSize: 14,
                    background: "#f3f4f6",
                    border: "1px solid #ccc",
                    borderRadius: 4,
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                data-ocid="header.nav_login_link"
                style={{
                  marginLeft: 8,
                  padding: "6px 14px",
                  fontSize: 14,
                  background: "#1d4ed8",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: 4,
                  fontWeight: 600,
                }}
              >
                Login
              </Link>
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            data-ocid="header.mobile_menu_toggle"
            style={{
              padding: "6px 10px",
              fontSize: 20,
              background: "none",
              border: "1px solid #ccc",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          data-ocid="header.mobile_menu"
          style={{ borderTop: "1px solid #ccc", background: "#fff" }}
        >
          <nav style={{ padding: "8px 16px" }} aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                data-ocid={`header.mobile_nav_${link.label.toLowerCase()}_link`}
                style={{
                  display: "block",
                  padding: "8px 0",
                  fontSize: 15,
                  color: isActive(link.to) ? "#1d4ed8" : "#333",
                  textDecoration: "none",
                  fontWeight: isActive(link.to) ? 600 : 400,
                }}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link
                  to="/portal"
                  onClick={() => setMobileOpen(false)}
                  data-ocid="header.mobile_nav_portal_link"
                  style={{
                    display: "block",
                    padding: "8px 0",
                    fontSize: 15,
                    color: "#333",
                    textDecoration: "none",
                  }}
                >
                  My Portal
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  data-ocid="header.mobile_logout_button"
                  style={{
                    display: "block",
                    padding: "8px 0",
                    fontSize: 15,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#b91c1c",
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                data-ocid="header.mobile_nav_login_link"
                style={{
                  display: "block",
                  padding: "8px 0",
                  fontSize: 15,
                  color: "#1d4ed8",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
