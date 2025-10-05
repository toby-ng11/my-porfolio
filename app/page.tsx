'use client';

import GlassCard from '@/components/glass-card';
import { Button } from '@/components/ui/button';
import { easeOut, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';
import ProfileImage from './my-picture.jpeg';

export default function Page() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, ease: easeOut } },
    };

    return (
        <main className="mx-auto max-w-7xl space-y-40 p-4">
            <motion.section
                id="hero"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative mx-auto grid grid-cols-1 items-center gap-8 px-4 pt-20 lg:grid-cols-2 lg:gap-12"
            >
                <div className="flex flex-col justify-center space-y-8">
                    <motion.h1 variants={fadeUp} className="text-center text-5xl leading-tight font-bold tracking-tight md:text-left md:text-6xl">
                        Hi, I&apos;m <span className="text-lime-600">Toby Nguyen</span>
                    </motion.h1>

                    <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl text-center text-lg md:text-left md:text-xl">
                        A <span className="text-foreground font-semibold">Software Engineer</span> with 3 years of experience building scalable
                        systems, modern web apps, and smooth user experiences using{' '}
                        <span className="font-semibold text-lime-600">Laravel + React</span>.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 md:justify-start">
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

            <motion.section
                id="about"
                className="relative scroll-mt-28 space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <h2 className="text-center text-4xl font-semibold lg:text-5xl">About Me</h2>
                <GlassCard>
                    <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-center text-lg">
                        Tech enthusiast with a passion for clean architecture, automation, and modern web development. I enjoy building tools that
                        make work smoother and faster — from backend systems to beautiful UIs.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        {['React', 'Laravel', 'Tailwind', 'SQL Server', 'TypeScript', 'AWS'].map((tech) => (
                            <motion.span
                                key={tech}
                                className="rounded-full border border-lime-600/40 bg-lime-500/5 px-4 py-2 text-sm text-lime-400/90"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </GlassCard>
            </motion.section>

            <motion.section
                id="projects"
                className="relative scroll-mt-28 space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <h2 className="text-center text-4xl font-semibold lg:text-5xl">Projects</h2>
                <GlassCard>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                name: 'Project to Quote System',
                                desc: 'A CRM-like tool built with Laminas + React for managing projects, quotes, and customer data.',
                                tech: 'Laminas, React, SQL Server',
                                link: '#',
                            },
                            {
                                name: 'Portfolio Site',
                                desc: 'My personal portfolio built with Next.js, Tailwind, and shadcn/ui.',
                                tech: 'Next.js, TailwindCSS, shadcn/ui',
                                link: '#',
                            },
                            {
                                name: 'Data Dashboard',
                                desc: 'An analytics dashboard visualizing business KPIs with Laravel + Chart.js.',
                                tech: 'Laravel, Chart.js, MySQL',
                                link: '#',
                            },
                        ].map((proj) => (
                            <motion.div
                                key={proj.name}
                                className="bg-muted/10 border-muted/20 hover:bg-muted/20 rounded-3xl border p-6"
                                whileHover={{ y: -6, scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                            >
                                <h3 className="text-xl font-semibold">{proj.name}</h3>
                                <p className="text-muted-foreground mt-2">{proj.desc}</p>
                                <p className="mt-3 text-sm text-lime-500">{proj.tech}</p>
                                <Link href={proj.link} className="mt-4 inline-block text-lime-700 hover:underline">
                                    View Project →
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </GlassCard>
            </motion.section>

            <motion.section
                id="experience"
                className="relative scroll-mt-28 space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <h2 className="text-center text-4xl font-semibold lg:text-5xl">Experience</h2>
                <GlassCard>
                    <div className="mx-auto flex max-w-3xl flex-col gap-6">
                        {[
                            {
                                title: 'IT Analyst - Current Company',
                                time: '2022 - Present',
                                desc: 'Building and maintaining enterprise systems, implementing new features, and optimizing database performance.',
                            },
                            {
                                title: 'Software Developer - Freelance',
                                time: '2020 - 2022',
                                desc: 'Delivered full-stack web apps using Laravel and React for small business clients.',
                            },
                        ].map((exp) => (
                            <motion.div
                                key={exp.title}
                                className="border-l-4 border-lime-500 pl-6"
                                whileHover={{ scale: 1.01, x: 4 }}
                                transition={{ type: 'spring', stiffness: 180, damping: 14 }}
                            >
                                <h3 className="text-xl font-semibold">{exp.title}</h3>
                                <p className="text-muted-foreground text-sm">{exp.time}</p>
                                <p className="text-muted-foreground mt-2">{exp.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </GlassCard>
            </motion.section>

            <motion.section
                id="contact"
                className="relative scroll-mt-28 space-y-6 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <h2 className="text-4xl font-semibold lg:text-5xl">Get In Touch</h2>
                <GlassCard>
                    <p className="text-muted-foreground text-lg">
                        I&apos;m always open to discussing new opportunities, collaborations, or side projects.
                    </p>
                    <Button asChild size="lg" className="rounded-2xl px-8 py-5">
                        <Link href="mailto:tobynguyen.dev@gmail.com">Say Hello 👋</Link>
                    </Button>
                </GlassCard>
            </motion.section>

            <footer className="text-muted-foreground mt-12 text-center text-sm">
                Built with Next.js, TailwindCSS & shadcn/ui — Deployed on Vercel
            </footer>
        </main>
    );
}
