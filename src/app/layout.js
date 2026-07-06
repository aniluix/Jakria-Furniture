import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "glightbox/dist/css/glightbox.min.css";
import { Playfair_Display, Mulish, Bebas_Neue } from "next/font/google";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
});


const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mulish",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata = {
  title: "Jakaria Furniture | Premium Home & Office Decor",
  description:
    "Discover expertly crafted, ultra-modern furniture designs to transform your home and office interiors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${mulish.variable} ${bebas.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}