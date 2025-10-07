'use client';

import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { useState } from 'react';
import { BsMicrosoft } from 'react-icons/bs';
import { SiGithub, SiInertia, SiLaravel, SiReact, SiShadcnui, SiTailwindcss, SiTypescript } from 'react-icons/si';
import GlassCard from './glass-card';

const techStack = [
    { name: 'React', Icon: SiReact, href: 'https://react.dev/' },
    { name: 'Laravel', Icon: SiLaravel, href: 'https://laravel.com/' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, href: 'https://tailwindcss.com/' },
    { name: 'SQL Server', Icon: BsMicrosoft, href: 'https://www.microsoft.com/en-us/sql-server' },
    { name: 'TypeScript', Icon: SiTypescript, href: 'https://www.typescriptlang.org/' },
    { name: 'shadcn/ui', Icon: SiShadcnui, href: 'https://ui.shadcn.com/' },
    { name: 'InertiaJS', Icon: SiInertia, href: 'https://inertiajs.com/' },
    { name: 'GitHub', Icon: SiGithub, href: 'https://github.com/' },
];

export default function TechStackCard() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <GlassCard className="w-full space-y-4">
            <div className="relative h-10">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={hovered || 'default'}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="absolute left-1/2 w-full -translate-x-1/2 text-center text-3xl font-medium"
                    >
                        {hovered || 'Skills & Tech Stack'}
                    </motion.p>
                </AnimatePresence>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
                {techStack.map(({ name, Icon, href }) => (
                    <motion.a
                        key={name}
                        href={href}
                        target="_blank"
                        title={name}
                        rel="noopener noreferrer"
                        className="group bg-muted/20 flex size-20 items-center justify-center rounded-md border border-lime-700/30 text-lime-700 duration-300 ease-out hover:border-lime-600/60 hover:text-lime-600 hover:shadow-[0_0_25px_-5px_rgba(163,230,53,0.5)] dark:text-lime-400 dark:hover:border-lime-700/60"
                        onHoverStart={() => setHovered(name)}
                        onHoverEnd={() => setHovered(null)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Icon className="size-10 drop-shadow-[0_0_12px_rgba(163,230,53,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(163,230,53,0.8)]" />
                    </motion.a>
                ))}
            </div>
            <p className="text-muted-foreground mx-auto max-w-3xl text-center text-lg">and still learning more...</p>
        </GlassCard>
    );
}
