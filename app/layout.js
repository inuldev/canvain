import { Geist, Geist_Mono } from "next/font/google";

import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CanvaIn",
  description: "Aplikasi untuk menggambar seperti canva tapi versi Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <ConvexClientProvider>{children}</ConvexClientProvider>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
