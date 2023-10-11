import Header from "@/components/header/header";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import MainContent from "@/components/main-content";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ngr Wisnu",
  description:
    "Ngr Wisnu is a web developer, skilled in both front-end and back-end development, with a focus on using JavaScript and its libraries and frameworks to build modern web applications.",
  keywords: [
    "Web Developer",
    "Frontend Developer",
    "Javascript Developer",
    "React Developer",
    "Next Developer",
    "UI Designer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body>
        <Header />
        <MainContent>{children}</MainContent>
        <Footer />
      </body>
    </html>
  );
}
