import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Component/core/navbar";
import Footer from "@/Component/core/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col ${inter.className}`}>
        <Navbar />
        {children}
        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
