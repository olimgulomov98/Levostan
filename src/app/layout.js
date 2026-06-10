import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  metadataBase: new URL("https://levostan.uz"),
  title: "ЛЕВОСТАН — Левофлоксацин 5 мг/мл, раствор для инфузий",
  description:
    "ЛЕВОСТАН (Levofloxacin) — антибактериальный препарат группы фторхинолонов в форме раствора для инфузий 5 мг/мл. Применяется для лечения инфекций дыхательных путей, мочевыводящих путей, кожи и мягких тканей.",
  keywords: [
    "левостан",
    "левофлоксацин",
    "levofloxacin",
    "антибиотик",
    "раствор для инфузий",
    "левостан 100 мл",
    "левостан 5 мг мл",
    "инфекции мочевыводящих путей",
    "инфекции дыхательных путей",
    "антибактериальный препарат",
    "SEEM Pharmaceuticals",
    "ЛЕВОСТАН",
    "Levostan",
    "Левофлоксацин 500 мг",
    "infuzion eritma",
    "antibiotik",
    "siydik yo'llari infeksiyasi",
    "nafas yo'llari infeksiyasi",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "EeNrX_Vhd4bMEJnslGv6D89shImpFKT1eTXHeeqUF8I",
  },
  alternates: {
    canonical: "https://levostan.uz",
  },
  openGraph: {
    type: "website",
    url: "https://levostan.uz",
    title: "ЛЕВОСТАН — Левофлоксацин 5 мг/мл",
    description:
      "Антибактериальный препарат ЛЕВОСТАН (Levofloxacin) в форме раствора для инфузий 5 мг/мл. Производитель: SEEM Pharmaceuticals.",
    siteName: "ЛЕВОСТАН",
    images: [
      {
        url: "/levostan.webp",
        width: 900,
        height: 800,
        alt: "ЛЕВОСТАН Левофлоксацин 5 мг/мл",
      },
      {
        url: "/levostan-logo.svg",
        width: 800,
        height: 600,
        alt: "ЛЕВОСТАН логотип",
      },
    ],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "ЛЕВОСТАН — Левофлоксацин 5 мг/мл",
    description:
      "Антибактериальный препарат ЛЕВОСТАН (Levofloxacin) для инфузионной терапии.",
    images: ["/levostan.webp"],
  },
  other: {
    "telegram:channel": "@SEEMPharmaceuticals",
    "instagram:account": "@seem_pharmaceuticals",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
