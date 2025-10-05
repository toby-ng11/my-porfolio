import { Button } from '@/components/ui/button';
import { fadeIn, fadeUp } from '@/lib/animation';
import ProfileImage from '@/public/my-picture.jpeg';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';

export default function HeroSection() {
    return (
        <motion.section
            id="hero"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative mx-auto grid grid-cols-1 items-center gap-8 px-4 pt-20 lg:grid-cols-2 lg:gap-12"
        >
            <div className="flex flex-col justify-center space-y-8">
                <motion.h1 variants={fadeUp} className="text-center text-5xl leading-tight font-bold tracking-tight md:text-6xl lg:text-left">
                    Hi, I&apos;m <span className="text-lime-600">Toby Nguyen</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="text-muted-foreground mx-auto max-w-2xl text-center text-lg md:text-xl lg:text-left">
                    A <span className="text-foreground font-semibold">Software Engineer</span> with 3 years of experience building scalable systems,
                    modern web apps, and smooth user experiences using <span className="font-semibold text-lime-600">Laravel + React</span>.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 lg:justify-start">
                    <Button asChild className="rounded-2xl px-6 py-5 text-base font-semibold">
                        <Link href="/contact">Contact Me</Link>
                    </Button>
                    {[
                        { href: 'https://instagram.com/nmtoby.11', Icon: SiInstagram, title: 'Instagram' },
                        { href: 'https://www.linkedin.com/in/toby-ng1056', Icon: SiLinkedin, title: 'LinkedIn' },
                        { href: 'https://github.com/toby-ng11', Icon: SiGithub, title: 'GitHub' },
                    ].map(({ href, Icon, title }) => (
                        <Button
                            key={title}
                            asChild
                            variant="secondary"
                            className="bg-background/30 rounded-full p-5 transition hover:scale-110 hover:bg-lime-500/20 hover:text-lime-300"
                        >
                            <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
                                <Icon className="h-6 w-6" />
                            </a>
                        </Button>
                    ))}
                </motion.div>
            </div>

            <motion.div variants={fadeIn} className="relative flex justify-center lg:justify-end">
                <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-lime-500/30">
                    <Image
                        src={ProfileImage}
                        alt="It's me, Toby :)"
                        className="h-auto w-full max-w-md object-cover brightness-105 transition hover:scale-105"
                        priority
                    />
                </div>
            </motion.div>
        </motion.section>
    );
}
