import { ReactNode } from 'react';

export function Background({ children }: { children: ReactNode; className?: string }) {
    return (
        <div className="relative bg-gradient-to-b from-white to-white dark:from-gray-950 dark:to-lime-950/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_#e5e7eb_1px,_transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,_#334155_1px,_transparent_0)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(163,230,53,0.12),_transparent_70%)]" />
            {children}
        </div>
    );
}
