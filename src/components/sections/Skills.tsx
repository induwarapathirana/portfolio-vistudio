"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
    return (
        <section id="skills" className="py-24 md:py-32 px-6 container mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A blend of creative design and data-driven marketing.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12">
                {/* Design Skills */}
                <div>
                    <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 bg-primary rounded-full"></span> Design
                    </h3>
                    <div className="space-y-8">
                        {portfolioData.skills.design.map((skill, i) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-lg">{skill.name}</span>
                                    <span className="text-muted-foreground">{skill.value}%</span>
                                </div>
                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.value}%` }}
                                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Marketing Skills */}
                <div>
                    <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 bg-pink-500 rounded-full"></span> Marketing
                    </h3>
                    <div className="space-y-8">
                        {portfolioData.skills.marketing.map((skill, i) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-lg">{skill.name}</span>
                                    <span className="text-muted-foreground">{skill.value}%</span>
                                </div>
                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.value}%` }}
                                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className="h-full bg-gradient-to-r from-pink-500 to-rose-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Development Skills */}
                <div>
                    <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 bg-cyan-500 rounded-full"></span> Development
                    </h3>
                    <div className="space-y-8">
                        {/* @ts-ignore - Dynamic key access */}
                        {portfolioData.skills.development?.map((skill, i) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-lg">{skill.name}</span>
                                    <span className="text-muted-foreground">{skill.value}%</span>
                                </div>
                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.value}%` }}
                                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
