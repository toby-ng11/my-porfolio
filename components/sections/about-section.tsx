'use client';

import GlassCard from '@/components/glass-card';
import SectionTitle from '@/components/section-title';
import { fadeUp } from '@/lib/animation';
import * as motion from 'motion/react-client';
import BackendFrontendShowcase from '../about-showcase';
import TechIcons from '../about-tech-icons';

export default function AboutSection() {
    return (
        <motion.section
            id="about"
            className="relative scroll-mt-28 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
        >
            <SectionTitle className="bg-linear-to-r from-emerald-700 to-lime-700 bg-clip-text text-transparent dark:from-emerald-500 dark:to-yellow-500">
                About Me
            </SectionTitle>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <GlassCard>
                    <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-center text-lg">
                        Tech enthusiast with a passion for clean architecture, automation, and modern web development.
                    </p>
                </GlassCard>

                <BackendFrontendShowcase />
            </div>

            <SectionTitle className="bg-linear-to-r from-emerald-700 to-lime-700 bg-clip-text text-transparent dark:from-emerald-500 dark:to-yellow-500">
                Skills & Tech Stack
            </SectionTitle>

            <GlassCard>
                <div className="flex flex-col items-center space-y-2">
                    <TechIcons />
                    <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-center text-lg">
                        and still learning more...
                    </p>
                </div>
            </GlassCard>
        </motion.section>
    );
}
