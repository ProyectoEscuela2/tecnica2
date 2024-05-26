import { Inter } from "next/font/google";
import "./globals.css";
import { Navbarr } from '../components/navbar/Navbar.jsx'
import { Footer } from "../components/footer/Footer"
import 'mapbox-gl/dist/mapbox-gl.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EEST Nº2",
  description: "Escuela de Educacion Secundaria Tecnica Nº 2, Gral. Ing. Manuel N. Savio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        
        <Navbarr />
        
        {children}

        <Footer />
      </body>
    </html>
  );
}
