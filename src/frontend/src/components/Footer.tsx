export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      style={{
        borderTop: "1px solid #ccc",
        background: "#f3f4f6",
        marginTop: "auto",
        padding: "20px 16px",
        textAlign: "center",
        fontSize: 13,
        color: "#555",
      }}
    >
      <p>
        Westbrook College &nbsp;|&nbsp; 12 College Drive, Westbrook, WB1 4RT
        &nbsp;|&nbsp; +44 1234 567 890 &nbsp;|&nbsp; info@westbrook.ac.uk
      </p>
      <p style={{ marginTop: 6 }}>
        &copy; {year}. Built with love using{" "}
        <a
          href={caffeineUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1d4ed8" }}
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}
