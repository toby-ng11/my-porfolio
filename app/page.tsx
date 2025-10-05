import AboutSection from '@/components/sections/about-section';
import ContactSection from '@/components/sections/contact-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import HeroSection from '@/components/sections/hero-section';
import ProjectSection from '@/components/sections/project-section';

export default function Page() {
    return (
        <main className="mx-auto max-w-7xl space-y-40 p-4">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ExperienceSection />
            <ContactSection />

            <footer className="text-muted-foreground mt-12 text-center text-sm">
                Built with Next.js, TailwindCSS & shadcn/ui — Deployed on Vercel
            </footer>
        </main>
    );
}
