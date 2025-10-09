import GlassCard from '@/components/glass-card';
import SectionTitle from '@/components/section-title';
import { fadeUp } from '@/lib/animation';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

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
            <SectionTitle>My Projects</SectionTitle>
            <GlassCard>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            name: 'Project to Quote System (P2Q)',
                            desc: 'A CRM-like tool built with Laminas + React for managing projects, quotes, and customer data.',
                            image: '/images/projects/p2q/p2q-2.png',
                            tech: ['Laminas', 'React', 'SQL Server'],
                            link: 'https://github.com/toby-ng11/newquotation1',
                        },
                        {
                            name: 'Portfolio Site',
                            desc: 'My personal portfolio built with Next.js, Tailwind, and shadcn/ui.',
                            image: '/images/projects/porfolio/page.png',
                            tech: ['Next.js', 'TailwindCSS', 'shadcn/ui'],
                            link: 'https://github.com/toby-ng11/my-porfolio',
                        },
                        {
                            name: 'Data Dashboard',
                            desc: 'An admin dashboard visualizing admin role with Laravel + NextJS.',
                            image: '/images/projects/p2q-laravel/lp2q.png',
                            tech: ['Laravel', 'InertiaJS', 'React', 'shadcn/ui', 'NeonDB'],
                            link: 'https://github.com/toby-ng11/example-dev',
                        },
                    ].map((proj) => (
                        <motion.div key={proj.name} whileHover={{ y: -6, scale: 1.02 }} transition={{ type: 'spring', stiffness: 200, damping: 12 }}>
                            <Card className="bg-muted/20 h-full rounded-3xl border border-lime-700/30 p-6 hover:bg-lime-700/10">
                                <Image src={proj.image} alt={proj.name} width={800} height={400} className="h-48 w-full rounded-xl object-cover" />
                                <CardHeader className="p-0">
                                    <CardTitle>{proj.name}</CardTitle>
                                    <CardDescription>{proj.desc}</CardDescription>
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {proj.tech.map((t) => (
                                            <Badge key={t} className="bg-lime-600 text-white dark:bg-lime-700">
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <Link href={proj.link} className="text-lime-700 hover:underline dark:text-lime-500">
                                        View Project →
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </GlassCard>
        </motion.section>
    );
}
