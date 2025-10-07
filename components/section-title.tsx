import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export default function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <h2
            className={cn(
                'bg-linear-to-r from-green-700 to-lime-700 bg-clip-text text-center text-4xl font-semibold text-transparent md:h-14 md:text-5xl dark:from-emerald-500 dark:to-yellow-500',
                className,
            )}
        >
            {children}
        </h2>
    );
}
