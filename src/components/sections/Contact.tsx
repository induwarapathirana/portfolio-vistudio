"use client";

import { portfolioData } from "@/data/portfolio";
import { Mail, MessageCircle, Linkedin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 px-6 container mx-auto">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-secondary/50 to-background border border-border rounded-3xl p-8 md:p-16 text-center overflow-hidden relative">
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start a project?</h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        {portfolioData.contact.text}
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {portfolioData.contact.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-colors"
                            >
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    {social.name === "Email" && <Mail className="w-5 h-5" />}
                                    {social.name === "WhatsApp" && <MessageCircle className="w-5 h-5" />}
                                    {social.name === "LinkedIn" && <Linkedin className="w-5 h-5" />}
                                    {social.name === "Behance" && <ArrowRight className="w-5 h-5 -rotate-45" />}
                                </div>
                                <span className="font-semibold mb-1">{social.name}</span>
                                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{social.label}</span>
                            </a>
                        ))}
                    </div>

                    <p className="text-sm text-muted-foreground opacity-50">
                        © {new Date().getFullYear()} {portfolioData.yourName}. All Rights Reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
