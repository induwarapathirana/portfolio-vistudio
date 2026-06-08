"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

export default function Logos() {
    const [selectedLogo, setSelectedLogo] = useState<typeof portfolioData.logos[number] | null>(null);

    // Escape key listener to close modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedLogo(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (selectedLogo) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedLogo]);

    return (
        <section id="logos" className="py-24 md:py-32 px-6 container mx-auto relative overflow-hidden">
            {/* Background Decorative Gradients */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-stone-200 to-stone-400">
                    Logo & Identity Designs
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Crafting memorable brand identities that convey personality, values, and vision.
                </p>
            </div>

            {/* Grid Showcase */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                {portfolioData.logos.map((logo, index) => (
                    <motion.div
                        key={logo.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        whileHover={{ y: -6 }}
                        onClick={() => setSelectedLogo(logo)}
                        className="group relative bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-72 cursor-pointer hover:border-primary/30 transition-all duration-500 overflow-hidden"
                    >
                        {/* Logo Container */}
                        <div className="relative flex-1 w-full flex items-center justify-center bg-black/20 rounded-xl overflow-hidden p-4">
                            <Image
                                src={logo.image}
                                alt={logo.title}
                                fill
                                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                    <ZoomIn size={20} />
                                </span>
                            </div>
                        </div>

                        {/* Title and Detail */}
                        <div className="mt-4 pt-2 border-t border-white/5">
                            <h3 className="font-bold text-base md:text-lg text-white group-hover:text-primary transition-colors duration-300 line-clamp-1">
                                {logo.title}
                            </h3>
                            <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                                Brand Identity
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Premium Lightbox Modal */}
            <AnimatePresence>
                {selectedLogo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
                        onClick={() => setSelectedLogo(null)}
                    >
                        {/* Modal Content Box */}
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh] md:max-h-[75vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedLogo(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white hover:text-black transition-all"
                            >
                                <X size={18} />
                            </button>

                            {/* Image Showcase Side */}
                            <div className="flex-[5] relative min-h-[300px] md:min-h-0 bg-neutral-900/50 flex items-center justify-center p-8">
                                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                                <div className="relative w-full h-full min-h-[250px] md:min-h-[400px]">
                                    <Image
                                        src={selectedLogo.image}
                                        alt={selectedLogo.title}
                                        fill
                                        className="object-contain p-4"
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Details Side */}
                            <div className="flex-[3] p-8 md:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 bg-black/40 backdrop-blur-sm">
                                <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                                    Brand Identity
                                </span>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                                    {selectedLogo.title}
                                </h3>
                                <div className="h-px w-12 bg-primary mb-6" />
                                <p className="text-stone-300 leading-relaxed text-sm md:text-base">
                                    {selectedLogo.description}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
