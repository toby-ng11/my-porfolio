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
                <div className="flex max-w-3xl flex-col gap-8">
                    {[
                        {
                            title: 'Full-stack Web Developer - Centura',
                            time: 'Sep 2023 - Sep 2025',
                            desc: 'Building and maintaining enterprise systems (P2Q), implementing new features, and optimizing database performance.',
                        },
                        {
                            title: 'Junior Web Developer - Humber College',
                            time: 'April 2022 - Sep 2023',
                            desc: 'Maintained and extended internal applications such as the student information portal and faculty scheduling system, ensuring stability and adding requested features using PHP, JavaScript, and SQL Server.',
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
