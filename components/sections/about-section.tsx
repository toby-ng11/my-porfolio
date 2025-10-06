'use client';

import GlassCard from '@/components/glass-card';
import SectionTitle from '@/components/section-title';
import { fadeUp } from '@/lib/animation';
import devAnimation from '@/public/animations/developer.json';
import Lottie from 'lottie-react';
import * as motion from 'motion/react-client';
import { BsMicrosoft } from 'react-icons/bs';
import { SiGithub, SiInertia, SiLaravel, SiReact, SiShadcnui, SiTailwindcss, SiTypescript } from 'react-icons/si';

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

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-6">
                <GlassCard>
                    <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-center text-lg">
                        Tech enthusiast with a passion for clean architecture, automation, and modern web development.
                    </p>
                </GlassCard>

                <GlassCard className="row-span-2">
                    <p className="mb-6 text-3xl font-bold">Skills & Tech Stack</p>

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
                                className="group bg-muted/20 flex h-24 w-24 items-center justify-center rounded-md border border-lime-700/30 text-lime-700 transition-all duration-300 ease-out hover:border-lime-500/60 hover:shadow-[0_0_25px_-5px_rgba(163,230,53,0.5)] dark:text-lime-500"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon className="size-12 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(163,230,53,0.8)]" />
                            </motion.a>
                        ))}
                    </div>
                </GlassCard>

                <GlassCard className="flex flex-col items-center justify-center text-center">
                    <Lottie animationData={devAnimation} loop className="h-32 w-32 opacity-90" />
                    <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-center text-lg">
                        I enjoy building tools that make work smoother and faster — from backend systems to beautiful UIs.
                    </p>
                </GlassCard>
            </div>
        </motion.section>
    );
}
