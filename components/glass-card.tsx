import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export default function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div
            className={cn(
                'bg-background/50 relative mx-auto overflow-hidden rounded-3xl border border-lime-500/10 p-10 shadow-lg backdrop-blur-md transition hover:border-lime-500/20',
                className,
            )}
        >
            {children}
        </div>
    );
}
