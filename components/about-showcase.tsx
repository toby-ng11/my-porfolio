'use client';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php';

import GlassCard from '@/components/glass-card';
import { ArrowDown } from 'lucide-react';
import { SiJavascript, SiPhp } from 'react-icons/si';

hljs.registerLanguage('php', php);
hljs.registerLanguage('javascript', javascript);

export default function BackendFrontendShowcase() {
    const backendCode = hljs.highlight(
        `<?php
class QuoteController {
    public function store($data) {
        return Quote::create($data);
    }
}`,
        { language: 'php' },
    ).value;

    const frontendCode = hljs.highlight(
        `fetch('/api/quotes', {
    method: 'POST',
    body: JSON.stringify({ title: 'New Quote' }),
})
.then(res => res.json())
.then(console.log);`,
        { language: 'javascript' },
    ).value;

    return (
        <GlassCard className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="bg-background/40 w-full max-w-lg overflow-hidden rounded-2xl border border-lime-500/20 backdrop-blur-md">
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-lime-500/20 bg-lime-500/10 px-3 py-1.5">
                    <div className="flex gap-1.5">
                        <span className="h-3 w-3 rounded-full bg-red-500/80" />
                        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                        <span className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-muted-foreground flex items-center gap-2 font-mono text-xs">
                        <SiPhp className="h-3.5 w-3.5 text-lime-500" />
                        QuoteController.php
                    </div>
                </div>
                {/* Code body */}
                <pre className="block rounded-xl p-4 text-left font-mono text-sm break-words whitespace-pre-wrap">
                    <code dangerouslySetInnerHTML={{ __html: backendCode }} />
                </pre>
            </div>

            <ArrowDown className="h-6 w-6 animate-bounce text-lime-500" />

            <div className="bg-background/40 w-full max-w-lg overflow-hidden rounded-2xl border border-lime-500/20 backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-lime-500/20 bg-lime-500/10 px-3 py-1.5">
                    <div className="flex gap-1.5">
                        <span className="h-3 w-3 rounded-full bg-red-500/80" />
                        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                        <span className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-muted-foreground flex items-center gap-2 font-mono text-xs">
                        <SiJavascript className="h-3.5 w-3.5 text-lime-500" />
                        fetch-quote.js
                    </div>
                </div>
                <pre className="block rounded-xl p-4 text-left font-mono text-sm break-words whitespace-pre-wrap">
                    <code dangerouslySetInnerHTML={{ __html: frontendCode }} />
                </pre>
            </div>

            <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-center text-lg">
                I enjoy building tools that make work smoother and faster — from backend systems to beautiful UIs.
            </p>
        </GlassCard>
    );
}
