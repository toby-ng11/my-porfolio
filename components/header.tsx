'use client';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
    const pathname = usePathname();

    const navButtons = [
        {
            link: '#about',
            label: 'About',
        },
        {
            link: '#projects',
            label: 'Projects',
        },
        {
            link: '#experience',
            label: 'Experience',
        },
        {
            link: '#contact',
            label: 'Contact',
        },
    ];

    return (
        <nav className="bg-background/70 border-border/40 fixed top-0 z-50 w-full border-b backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                {/* Logo or name */}
                <Link href="#hero" className="text-xl font-semibold tracking-tight transition-colors hover:text-lime-500">
                    Toby Nguyen
                </Link>

                {/* Mobile Dropdown */}
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Button type="button" size="icon" variant="ghost" className="sm:hidden" title="Open menu">
                            <Menu />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-md">
                        {navButtons.map((navButton) => (
                            <DropdownMenuItem key={navButton.label} asChild>
                                <Link href={navButton.link} className="w-full font-medium transition-colors hover:text-lime-500">
                                    {navButton.label}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Desktop Links */}
                <div className="hidden items-center gap-8 sm:flex">
                    {navButtons.map((navButton) => (
                        <Link
                            key={navButton.label}
                            href={navButton.link}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-lime-500',
                                pathname === navButton.link ? 'font-semibold text-lime-500' : 'text-foreground/80',
                            )}
                        >
                            {navButton.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
