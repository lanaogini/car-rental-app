import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "Arial",
          padding: "40px",
          background: "#fafafa",
        }}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
