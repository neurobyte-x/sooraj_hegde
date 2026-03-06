import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sooraj Hegde — AI & Web Dev · CP Grinder",
  description:
    "Portfolio of Sooraj Hegde — Engineering Student at REVA University. AI & Web Dev enthusiast, DSA & Competitive Programming grinder. 400+ DSA problems solved, 2★ CodeChef.",
  keywords: [
    "Sooraj Hegde",
    "competitive programming",
    "AI engineer",
    "full stack developer",
    "LangChain",
    "FastAPI",
    "React",
    "portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
