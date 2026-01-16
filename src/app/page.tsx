import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Work />
            <Contact />
        </main>
    );
}
