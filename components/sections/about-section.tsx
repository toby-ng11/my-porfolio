'use client';

import GlassCard from '@/components/glass-card';
import SectionTitle from '@/components/section-title';
import { fadeUp } from '@/lib/animation';
import * as motion from 'motion/react-client';
import { BsMicrosoft } from 'react-icons/bs';
import { SiGithub, SiInertia, SiLaravel, SiReact, SiShadcnui, SiTailwindcss, SiTypescript } from 'react-icons/si';
import BackendFrontendShowcase from '../about-showcase';

export default function AboutSection() {
    return (
        <motion.section
            id="about"
            className="relative scroll-mt-28 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
        >
            <SectionTitle className="bg-linear-to-r from-emerald-700 to-lime-700 bg-clip-text text-transparent dark:from-emerald-500 dark:to-yellow-500">
                About Me
            </SectionTitle>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <GlassCard>
                    <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-center text-lg">
                        Tech enthusiast with a passion for clean architecture, automation, and modern web development.
                    </p>
                </GlassCard>

                <BackendFrontendShowcase />
            </div>

            <SectionTitle className="bg-linear-to-r from-emerald-700 to-lime-700 bg-clip-text text-transparent dark:from-emerald-500 dark:to-yellow-500">
                Skills & Tech Stack
            </SectionTitle>

            <GlassCard>
                <div className="flex flex-wrap justify-center gap-8">
                    {[
                        { name: 'React', Icon: SiReact, href: 'https://react.dev/' },
                        { name: 'Laravel', Icon: SiLaravel, href: 'https://laravel.com/' },
                        { name: 'Tailwind CSS', Icon: SiTailwindcss, href: 'https://tailwindcss.com/' },
                        { name: 'SQL Server', Icon: BsMicrosoft, href: 'https://www.microsoft.com/en-us/sql-server' },
                        { name: 'TypeScript', Icon: SiTypescript, href: 'https://www.typescriptlang.org/' },
                        { name: 'shadcn/ui', Icon: SiShadcnui, href: 'https://ui.shadcn.com/' },
                        { name: 'InertiaJS', Icon: SiInertia, href: 'https://inertiajs.com/' },
                        { name: 'GitHub', Icon: SiGithub, href: 'https://github.com/' },
                    ].map(({ name, Icon, href }) => (
                        <motion.a
                            key={name}
                            href={href}
                            target="_blank"
                            title={name}
                            rel="noopener noreferrer"
                            className="group bg-muted/20 flex h-18 w-18 items-center justify-center rounded-md border border-lime-700/30 text-lime-700 transition-all duration-300 ease-out hover:border-lime-500/60 hover:shadow-[0_0_25px_-5px_rgba(163,230,53,0.5)] md:h-24 md:w-24 dark:text-lime-500"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Icon className="size-8 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(163,230,53,0.8)] md:size-12" />
                        </motion.a>
                    ))}
                </div>
            </GlassCard>
        </motion.section>
    );
}
