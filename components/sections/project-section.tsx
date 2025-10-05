import GlassCard from '@/components/glass-card';
import { fadeUp } from '@/lib/animation';
import * as motion from 'motion/react-client';
import Link from 'next/link';

export default function ProjectSection() {
    return (
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
    );
}
