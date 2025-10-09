import GlassCard from '@/components/glass-card';
import SectionTitle from '@/components/section-title';
import { Button } from '@/components/ui/button';
import { fadeUp } from '@/lib/animation';
import * as motion from 'motion/react-client';
import Link from 'next/link';

export default function ContactSection() {
    return (
        <motion.section
            id="contact"
            className="relative scroll-mt-28 space-y-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
        >
            <SectionTitle>Get In Touch</SectionTitle>
            <GlassCard className="space-y-8">
                <p className="text-muted-foreground text-lg">
                    I&apos;m always open to discussing new opportunities, collaborations, or side projects.
                </p>
                <Button
                    asChild
                    size="lg"
                    className="rounded-2xl px-6 py-5 text-base font-semibold hover:bg-linear-to-r hover:from-emerald-700 hover:to-lime-700 dark:from-lime-500 dark:to-yellow-500"
                >
                    <Link href="mailto:tobynguyen.dev@gmail.com">Say Hello 👋</Link>
                </Button>
            </GlassCard>
        </motion.section>
    );
}
