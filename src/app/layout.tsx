import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  const isDark = theme === 'dark';
                  const html = document.documentElement;
                  if (isDark) {
                    html.classList.add('dark');
                    html.classList.remove('light');
                  } else {
                    html.classList.remove('dark');
                    html.classList.add('light');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
