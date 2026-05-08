import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alan Diaz | Decorador de Pasteles Artesanales | Pasteles para Boda y Cumpleaños",
  description:
    "Alan Diaz, maestro decorador de pasteles artesanales con más de 10 años de experiencia. Especialista en pasteles de boda, cumpleaños, quinceañeras y eventos especiales. Diseños únicos 100% personalizados.",
  keywords:
    "decorador de pasteles, pasteles artesanales, pasteles para boda, pasteles de cumpleaños, Alan Diaz pasteles, cake designer Mexico, tortas personalizadas, repostería artesanal, pasteles elegantes, pasteles quinceañera, pastelero profesional, pasteles fondant, pasteles naked cake, pasteles drip cake, pasteles para baby shower, pasteles de XV años, pasteles a domicilio, pasteles temáticos, repostería creativa, wedding cake Mexico, pastelería personalizada, pasteles de 3 pisos, pasteles con flores, mejor decorador de pasteles, pasteles personalizados precio, decorador pasteles cerca de mi, pastelero artesanal, cake decorator, sugar flower cakes, pasteles de autor, pastelería fina",
  authors: [{ name: "Alan Diaz" }],
  creator: "Alan Diaz",
  openGraph: {
    title: "Alan Diaz | Maestro Decorador de Pasteles Artesanales",
    description:
      "Pasteles únicos y artesanales para los momentos más especiales de tu vida. Bodas, cumpleaños, quinceañeras y más.",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alan Diaz | Decorador de Pasteles",
    description:
      "Pasteles artesanales únicos para bodas, cumpleaños y eventos especiales.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-lato antialiased bg-white text-stone-900">
        {children}
      </body>
    </html>
  );
}
