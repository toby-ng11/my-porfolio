import GlassCard from '@/components/glass-card';
import { fadeUp } from '@/lib/animation';
import * as motion from 'motion/react-client';

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
            <h2 className="text-center text-4xl font-semibold lg:text-5xl">About Me</h2>
            <GlassCard>
                <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-center text-lg">
                    Tech enthusiast with a passion for clean architecture, automation, and modern web development. I enjoy building tools that make
                    work smoother and faster — from backend systems to beautiful UIs.
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
    );
}
