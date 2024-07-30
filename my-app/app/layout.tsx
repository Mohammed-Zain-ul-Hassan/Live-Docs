import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";
import './globals.css';
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Provider from "./Provider";

// Font configuration
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Metadata for the application
export const metadata: Metadata = {
  title: 'LiveDocs',
  description: 'Your go-to collaborative editor',
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'LiveDocs',
    statusBarStyle: 'default',
    capable: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export const viewport = {
  themeColor: '#f69435',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { 
          colorPrimary: "#3371FF",
          fontSize: '16px',
        }
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}