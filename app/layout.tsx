
import "./globals.css";

import { Providers } from "./providers";
import { ColorModeScript } from '@chakra-ui/react'
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "900"] });

import { theme } from './theme'

export const metadata: Metadata = {
  title: "RoboLens Booth",
  description: "RoboLens Booth is a web-based robotic arm photo booth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          {/* <nav>
            <Image src="/logo.png" alt="logo" width={190} height={33} />
            <h1>{metadata.title?.toString()}</h1>
          </nav> */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
