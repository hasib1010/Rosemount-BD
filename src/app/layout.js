import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Component/core/navbar";
import Footer from "@/Component/core/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rosemount BD",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-white" lang="en">
      <body className={`min-h-screen   flex flex-col ${inter.className}`}>
        <Navbar />
        <div className="my-10 container mx-auto">
        {children}
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
