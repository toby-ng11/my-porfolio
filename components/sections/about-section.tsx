'use client';

import SectionTitle from '@/components/section-title';
import { fadeUp } from '@/lib/animation';
import * as motion from 'motion/react-client';
import BackendFrontendShowcase from '../about-showcase';
import AboutCard from '../about-tech';
import TechStackCard from '../about-tech-icons';

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

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-6">
                <AboutCard />
                <BackendFrontendShowcase className="row-span-2" />
                <TechStackCard />
            </div>
        </motion.section>
    );
}
