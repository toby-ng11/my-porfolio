'use client';

import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
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

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % techStack.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const current = techStack[index];

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative size-36 md:size-40">
                <AnimatePresence mode="popLayout">
                    <motion.a
                        key={current.name}
                        href={current.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl border border-lime-700/30 bg-lime-500/10 p-4 text-lime-700 duration-300 hover:border-lime-500/60 hover:shadow-[0_0_25px_-5px_rgba(163,230,53,0.5)] dark:text-lime-500"
                        initial={{ x: -100, opacity: 0, scale: 0.9 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        exit={{ x: 200, opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                        <current.Icon className="size-12 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(163,230,53,0.8)] md:size-16" />
                        {current.name}
                    </motion.a>
                </AnimatePresence>
            </div>
        </div>
    );
}
