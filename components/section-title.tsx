import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export default function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
    return <h2 className={cn('text-center text-4xl font-semibold md:text-5xl', className)}>{children}</h2>;
}
