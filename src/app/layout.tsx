import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/effects/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "VI Studio | Creative Designers & Marketers",
    description: "VI Studio crafts beautiful brand experiences and drives growth through data-informed marketing strategies.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn("min-h-screen bg-background font-sans text-foreground antialiased", inter.variable)}>
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
