"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const allCategories = ["All", ...Array.from(new Set(portfolioData.projects.map((p) => p.category)))];

export default function Work() {
    const [filter, setFilter] = useState("All");

    const filteredProjects =
        filter === "All"
            ? portfolioData.projects
            : portfolioData.projects.filter((p) => p.category === filter);

    return (
        <section id="work" className="py-24 md:py-32 px-6 container mx-auto bg-secondary/10">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Explore some of our recent projects that combine creativity with strategy.
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {allCategories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                                : "bg-background border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid cursor-pointer md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.article
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.title}
                            className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                    >
                                        View Project <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
                                </div>
                                <span className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-medium mb-3 text-secondary-foreground uppercase tracking-wider">
                                    {project.category}
                                </span>
                                <p className="text-muted-foreground text-sm line-clamp-3">
                                    {project.description}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
