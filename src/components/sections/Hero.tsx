"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />

            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50 animate-pulse" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 max-w-4xl"
            >
                <span className="inline-block py-1 px-3 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide">
                    {portfolioData.yourName}
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 bg-300%">
                    {portfolioData.hero.headline}
                </h1>
                <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                    {portfolioData.hero.subheadline}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#work" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition active:scale-95">
                        View Our Work
                    </a>
                    <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition font-medium backdrop-blur-sm">
                        Get In Touch
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
