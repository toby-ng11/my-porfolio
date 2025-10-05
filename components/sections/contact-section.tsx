import GlassCard from '@/components/glass-card';
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
    );
}
