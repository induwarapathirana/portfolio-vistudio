"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 px-6 container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-primary/20 -rotate-6 rounded-2xl transition-transform group-hover:-rotate-3" />
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={portfolioData.about.image}
                            alt="About VI Studio"
                            width={600}
                            height={800}
                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </motion.div>

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">About Us</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {portfolioData.about.text}
                    </p>

                    <div className="mt-12 flex gap-8">
                        <div>
                            <h3 className="text-3xl font-bold text-primary">2+</h3>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Years Experience</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-primary">20+</h3>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Projects Done</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
