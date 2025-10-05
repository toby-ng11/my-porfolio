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
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
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
