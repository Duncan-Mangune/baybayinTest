import "./globals.css";
import "./layout.css";  
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Know More Baybayin",
  description: "Learn Baybayin - History, Lessons, and More",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <nav className="navbar">
          <Link href="/" className="logo">
            <Image 
              src="/images/TinyTitle.png"
              alt="KMB Logo"
              width={120}
              height={60}
              priority
            />
          </Link>
      
          <div>
            <Link href="/">Home</Link>
            <Link href="/promotionalcontents">Promotional Contents</Link>
            <Link href="/about">About</Link>
          </div>
        </nav>

        {/* Main content with automatic top padding */}
        <main className="mainContent">{children}</main>

        {/* Footer */}
        <footer className="footer">
          © {new Date().getFullYear()} Know More Baybayin.
        </footer>
      </body>
    </html>
  );
}
