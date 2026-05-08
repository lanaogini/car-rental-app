import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "40px",
        paddingBottom: "20px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          textDecoration: "none",
          color: "black",
        }}
      >
        CarRental
      </Link>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link href="/" style={linkStyle}>
          Home
        </Link>

        <Link href="/cars" style={linkStyle}>
          Cars
        </Link>

        <Link href="/dashboard" style={linkStyle}>
          Dashboard
        </Link>

        <Link href="/login" style={linkStyle}>
          Login
        </Link>
        <Link href="/register">Register</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: 500,
};
