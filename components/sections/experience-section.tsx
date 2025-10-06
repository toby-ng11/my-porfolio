import GlassCard from '@/components/glass-card';
import SectionTitle from '@/components/section-title';
import { fadeUp } from '@/lib/animation';
import * as motion from 'motion/react-client';

export function ExperienceSection() {
    return (
        <motion.section
            id="experience"
            className="relative scroll-mt-28 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
        >
            <SectionTitle>Experience</SectionTitle>
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
    );
}
