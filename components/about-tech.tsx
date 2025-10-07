'use client';

import { useEffect, useState } from 'react';
import GlassCard from './glass-card';

const traits = ['clean architecture', 'automation', 'modern web development', 'scalable systems', 'developer experience'];

export default function AboutCard() {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = traits[index];
        const speed = isDeleting ? 60 : 150; // typing vs deleting speed

        const timeout = setTimeout(() => {
            setText((prev) => (isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)));

            if (!isDeleting && text === current) {
                setTimeout(() => setIsDeleting(true), 2000); // pause before deleting
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % traits.length);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index]);

    return (
        <GlassCard className="flex min-h-[250px] w-full items-center justify-center p-14">
            <p className="mx-auto text-2xl md:text-3xl">
                Tech enthusiast with a passion for{' '}
                <span className="font-mono font-semibold text-lime-700 dark:text-lime-400">
                    {text}
                    <span className="animate-pulse">|</span>
                </span>
                .
            </p>
        </GlassCard>
    );
}
