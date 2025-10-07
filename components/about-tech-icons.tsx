'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BsMicrosoft } from 'react-icons/bs';
import { SiGithub, SiInertia, SiLaravel, SiReact, SiShadcnui, SiTailwindcss, SiTypescript } from 'react-icons/si';

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

export default function TechIcons() {
    const [index, setIndex] = useState(0);

    // cycle every 2.5s
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % techStack.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const current = techStack[index];

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative h-32 w-32">
                <AnimatePresence mode="wait">
                    <motion.a
                        key={current.name}
                        href={current.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-muted/20 absolute inset-0 flex items-center justify-center rounded-2xl border border-lime-700/30 text-lime-700 transition-all duration-300 hover:border-lime-500/60 hover:shadow-[0_0_25px_-5px_rgba(163,230,53,0.5)] dark:text-lime-500"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                        <current.Icon className="size-16 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(163,230,53,0.8)]" />
                    </motion.a>
                </AnimatePresence>
            </div>

            <motion.p
                key={current.name + '-label'}
                className="text-lg font-medium text-lime-700 dark:text-lime-500"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                    delay: 0.75,
                }}
            >
                {current.name}
            </motion.p>
        </div>
    );
}
