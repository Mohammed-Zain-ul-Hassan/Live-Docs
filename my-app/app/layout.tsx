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
  themeColor: '#000000', // Optional: Customize theme color for PWA
  manifest: '/manifest.json', // Ensure the manifest file is linked
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
        <head>
          <meta name="theme-color" content="#000000" /> {/* Optional: Theme color for PWA */}
          <link rel="manifest" href="/manifest.json" /> {/* Link to the PWA manifest */}
        </head>
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
