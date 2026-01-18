"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Work", href: "#work" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-background/80 backdrop-blur-md border-border py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center">
                    <Image
                        src="/Heading.png"
                        alt={portfolioData.yourName}
                        width={150}
                        height={40}
                        className="h-10 w-auto object-contain"
                        priority
                    />
                </a>

                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    className={cn(
                        "px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105",
                        scrolled ? "bg-primary text-primary-foreground" : "bg-white text-black"
                    )}
                >
                    Let's Talk
                </a>
            </div>
        </header>
    );
}
