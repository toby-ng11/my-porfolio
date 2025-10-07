'use client';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const options: { value: string; icon: React.FC<React.SVGProps<SVGSVGElement>>; label: string }[] = [
        { value: 'light', icon: Sun, label: 'Light' },
        { value: 'dark', icon: Moon, label: 'Dark' },
        { value: 'system', icon: Monitor, label: 'System' },
    ];

    return (
        <div className="fixed right-4 bottom-4 z-50">
            <div className="relative">
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Button
                            className="group bg-muted/20 flex h-12 w-12 hover:bg-lime-400/20 dark:hover:bg-lime-300/20 items-center justify-center rounded-full border border-lime-700/30 text-lime-700 shadow-lg backdrop-blur-md ease-out hover:border-lime-600/60 hover:text-lime-600 hover:shadow-[0_0_25px_-5px_rgba(163,230,53,0.5)] dark:border-lime-700/30 dark:text-lime-400 dark:hover:border-lime-700/60"
                            aria-label="Toggle theme selector"
                            variant="outline"
                            size="icon"
                        >
                            {isClient && theme === 'light' && <Sun className="h-5 w-5" />}
                            {isClient && theme === 'dark' && <Moon className="h-5 w-5" />}
                            {isClient && theme === 'system' && <Monitor className="h-5 w-5" />}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {options.map(({ value, icon: Icon, label }) => (
                            <DropdownMenuItem
                                key={value}
                                onClick={() => setTheme(value)}
                                className={cn(
                                    'm-1',
                                    theme === value
                                        ? 'bg-neutral-100 font-medium dark:bg-neutral-700'
                                        : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700',
                                )}
                            >
                                <Icon className="h-4 w-4" />
                                {label}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
