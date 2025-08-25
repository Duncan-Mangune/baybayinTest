import "./globals.css";
import "./layout.css";  
import Link from "next/link";

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
      <Link href="/" className="logo"> KMB </Link>
      
          <div>
            <Link href="/">Home</Link>
            <Link href="/promotionalcontents">Promotional Contents</Link>
            <Link href="/about">About</Link>
            {/*<Link href="/baybayinhistory">History</Link>*/}
            {/*<Link href="/learnbaybayin">Learn</Link>*/}
            
          </div>
        </nav>

        <main className="p-8">{children}</main>

        {/* Footer */}
        <footer className="footer">
          © {new Date().getFullYear()} Know More Baybayin.
        </footer>
      </body>
    </html>
  );
}