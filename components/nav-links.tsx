'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

export function NavLinks() {
    const pathname = usePathname();
    const navButtons = [
        {
            link: '/',
            label: 'Home',
        },
        {
            link: '/about',
            label: 'About',
        },
        {
            link: '/projects',
            label: 'Works',
        },
        {
            link: '/contact',
            label: 'Contact',
        },
    ];

    return (
        <div className="flex flex-row items-center gap-6">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button type="button" size="icon" variant="ghost" className="sm:hidden" title="Open menu">
                        <Menu />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {navButtons.map((navButton) => (
                        <DropdownMenuItem key={navButton.label}>
                            <Link href={navButton.link} className={cn('font-medium', { 'font-bold': pathname === navButton.link })}>
                                {navButton.label}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            {navButtons.map((navButton) => (
                <div
                    key={navButton.label}
                    className="hover:bg-accent hover:text-accent-foreground hidden items-center justify-center rounded-md px-4 py-1.5 sm:inline-flex"
                >
                    <Link href={navButton.link} className={cn('font-medium', { 'font-bold': pathname === navButton.link })}>
                        {navButton.label}
                    </Link>
                </div>
            ))}
        </div>
    );
}
