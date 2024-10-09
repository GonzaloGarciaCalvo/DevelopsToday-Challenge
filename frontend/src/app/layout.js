import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Crountries Info App",
  description: "DevelopsToday Challenge, Next JS 14 app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex-1`}
      >
        <nav className="px-6 py-4">
          <Link href="/" className="text-xl ">Home</Link>
        </nav>
        {children}
        <footer className="text-center"> 
          <p>DevelopsToday Challenge</p>
          <p>Build by Gonzalo Garcia Calvo 2024</p>
        </footer>
      </body>
    </html>
  );
}
