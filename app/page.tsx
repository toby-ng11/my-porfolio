import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';
import ProfileImage from './my-picture.jpeg';

export default function Page() {
    return (
        <main className="mx-auto max-w-7xl p-4">
            <div className="flex flex-col gap-4 lg:flex-row">
                <div className="flex flex-1 flex-col justify-between rounded-3xl bg-lime-800/50 p-6 md:p-10">
                    <div className="mb-16 flex flex-col gap-8">
                        <p className="text-4xl font-medium md:text-5xl">Hi, I&apos;m Toby Nguyen, a software Engineer with 3 years experiences</p>

                        <p className="max-w-2xl text-lg md:text-xl">
                            I build scalable systems, modern web apps, and smooth user experiences with{' '}
                            <span className="font-semibold">Laravel/Ruby on Rails + React</span>.
                        </p>
                    </div>

                    <div className="flex flex-row gap-4">
                        <Button asChild className="rounded-2xl p-5">
                            <Link href="/contact">Contact Me</Link>
                        </Button>
                        <Button asChild variant="secondary" className="bg-background/30 rounded-full p-5">
                            <a href="https://instagram.com/nmtoby.11" target="_blank" rel="noopener noreferrer" title="Instagram">
                                <SiInstagram />
                            </a>
                        </Button>
                        <Button asChild variant="secondary" className="bg-background/30 rounded-full p-5">
                            <a href="https://www.linkedin.com/in/toby-ng1056" target="_blank" rel="noopener noreferrer" title="Instagram">
                                <SiLinkedin />
                            </a>
                        </Button>
                        <Button asChild variant="secondary" className="bg-background/30 rounded-full p-5">
                            <a href="https://github.com/toby-ng11" target="_blank" rel="noopener noreferrer" title="Instagram">
                                <SiGithub />
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="flex-1 overflow-hidden rounded-3xl">
                    <Image src={ProfileImage} alt="It's me, Toby :)" className="h-auto w-full" />
                </div>
            </div>
        </main>
    );
}
