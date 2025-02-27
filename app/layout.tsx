import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DogsProvider from "./providers/dogs-provider";
import { fetchDogs } from "./actions";

import Header from "./components/header";
import ThemeProvider from "./providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialDogs = await fetchDogs(); // ✅ Fetch dogs before rendering

  return (
    <html lang="en">
      <body
        className={`bg-[#FED253] text-[#000] flex flex-col items-center h-full ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <DogsProvider initialDogs={initialDogs}>
            <Header />
            {children}
          </DogsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
