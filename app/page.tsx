import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
            {/* Intro */}
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                Hi, I&apos;m <span className="text-blue-600">Toby Nguyen</span>
            </h1>
            <p className="text-muted-foreground mb-8 max-w-2xl text-lg md:text-xl">
                Software Engineer & IT Analyst — I build scalable systems, modern web apps, and smooth user experiences with{' '}
                <span className="font-semibold">Laravel + React</span>.
            </p>

            {/* Call to actions */}
            <div className="flex gap-4">
                <Button asChild>
                    <Link href="/projects">View Projects</Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/contact">Contact Me</Link>
                </Button>
            </div>

            {/* Footer tagline */}
            <p className="text-muted-foreground mt-12 text-sm">Built with Next.js, TailwindCSS & shadcn/ui — Deployed on Vercel</p>
        </main>
    );
}
