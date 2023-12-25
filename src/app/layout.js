import Navbar from "@/Components/Navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/Components/Footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Poppins({ subsets: ["devanagari"], weight: "500" });

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
          <div className="container">
            <div className="wrapper">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
