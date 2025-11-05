'use client';

import type { OutcomeContent } from '@/lib/content/types';
import React, { useEffect, useRef } from 'react';
import { Screenshot } from '@/components/Screenshot';

interface OutcomeSectionProps {
    content: OutcomeContent;
}

const OutcomeSection: React.FC<OutcomeSectionProps> = ({ content }) => {
    const { eyebrow, headline, description, cta, products } = content;
    const pinRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Import GSAP only on the client to avoid SSR issues.
        (async () => {
            const gsapModule = await import('gsap');
            const ScrollTriggerModule = await import('gsap/dist/ScrollTrigger');
            const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
            const ScrollTrigger = ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;

            gsap.registerPlugin(ScrollTrigger);

            const ctx = gsap.context(() => {
                const cards = gsap.utils.toArray<HTMLElement>('[data-card]');
                if (!cards.length) return;

                // Stack cards in the same space; show only the first initially
                // Position is handled by CSS classes (absolute positioning with margins)
                gsap.set(cards.slice(1), { autoAlpha: 0 }); // hide all but first

                // Pinned section: stays at top, scroll distance = (cards.length - 1) * container height
                // Using percentages here means 100% == pinRef height (100dvh via CSS)
                const endDistance = `+=${(cards.length - 1) * 100}%`;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: pinRef.current,
                        start: 'top top',
                        end: endDistance,
                        pin: true,          // stick to top of viewport
                        scrub: true,        // smooth link between scroll and timeline
                        anticipatePin: 1,
                        // markers: true,   // uncomment to debug
                    },
                    defaults: { duration: 1, ease: 'none' },
                });

                // For each subsequent card, cross-fade with the previous one.
                cards.forEach((card, i) => {
                    if (i === 0) return; // first card is already visible
                    // At timeline position i (1, 2, 3, ...), fade prev out and current in
                    tl.to(cards[i - 1], { autoAlpha: 0 }, i)
                        .to(card, { autoAlpha: 1 }, i);
                });
            }, pinRef);

            return () => ctx.revert();
        })();
    }, []);

    return (
        <section className="relative isolate overflow-hidden bg-test-one">
            {/* ---------- Desktop / Large screens: GSAP pinned cross-fade ---------- */}
            <div
                ref={pinRef}
                className="hidden lg:block h-[100dvh]" // the pinned container is exactly one viewport tall
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 h-full">
                    {/* Left — fixed copy while pinned */}
                    <div className="flex items-center justify-center p-8 xl:p-16">
                        <div className="relative z-10 max-w-lg">
                            {/* Optional deco */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-300 rounded-lg rotate-12" />
                                <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-primary-300 rounded-lg -rotate-12" />
                                <svg
                                    className="absolute top-1/2 left-1/4 w-48 h-48 text-primary-300 -translate-y-1/2"
                                    viewBox="0 0 100 100"
                                    aria-hidden
                                >
                                    {[20, 40, 60, 80].map((y) =>
                                        [20, 40, 60, 80].map((x) => (
                                            <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="currentColor" />
                                        ))
                                    )}
                                </svg>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <div className="border-l-4 border-primary-400 pl-4">
                                    <p className="text-primary-300 text-sm font-bold tracking-widest uppercase mb-4">
                                        {eyebrow}
                                    </p>
                                </div>

                                <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
                                    {headline}
                                </h2>

                                <p className="text-primary-200/90 text-base md:text-lg">
                                    {description}
                                </p>
                            </div>

                            {/* CTA */}
                            {/* <div className="mt-10">
                                <a
                                    href={cta.url}
                                    className="group inline-flex items-center gap-3 bg-primary-800/80 hover:bg-primary-700 backdrop-blur-sm px-6 py-4 rounded-2xl transition-all duration-300 border border-primary-600"
                                >
                                    <div className="w-10 h-10 rounded-full bg-success-500 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-sm">{cta.text}</p>
                                    </div>
                                    <svg
                                        className="w-5 h-5 text-success-300 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div> */}
                        </div>
                    </div>

                    {/* Right — cards layered & cross-fading in the same pinned viewport */}
                    <div className="relative p-6 xl:p-16">
                        <div className="relative w-full max-w-2xl h-full mx-auto">
                            {products.map((p, i) => (
                                <div
                                    key={p.id}
                                    data-card
                                    className="absolute inset-x-0 top-8 bottom-8 flex items-center justify-center"
                                >
                                    <article
                                        className={`w-full max-h-[90vh] overflow-y-auto rounded-[2rem] md:rounded-[3rem] p-4 md:p-6 xl:p-8 shadow-2xl
                                border border-white/20 backdrop-blur-sm ${p.bgColor} ${p.textColor}`}
                                        style={p.id === 1 ? {
                                            backgroundColor: '#d3dcdd',
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23fb7d3c' fill-opacity='0.11'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                                        } : undefined}
                                    >
                                        <header className="mb-4 md:mb-5">
                                            <div className="border-l-4 border-current pl-4 mb-3">
                                                <p className="text-xs font-bold tracking-widest uppercase opacity-80">
                                                    {p.label}
                                                </p>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight">{p.title}</h3>
                                            <p className="text-sm md:text-base mt-3 opacity-90">{p.description}</p>
                                        </header>

                                        <a
                                            href={p.ctaLink}
                                            className="inline-flex items-center gap-3 bg-neutral-900 text-white px-4 py-2 rounded-full font-semibold hover:gap-4 transition-all duration-300 mb-4 text-sm"
                                        >
                                            {p.ctaText}
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>

                                        {/* <div className="inline-block px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs md:text-sm font-semibold border border-white/30">
                                            {p.statBadge}
                                        </div> */}

                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                                            {p.benefits.map((b, bi) => (
                                                <li key={bi} className="flex items-start gap-2">
                                                    <svg
                                                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <span className="text-xs md:text-sm leading-relaxed">{b}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-4 md:mt-6">
                                            <Screenshot
                                                src={p.screenshot.src}
                                                width={p.screenshot.width}
                                                height={p.screenshot.height}
                                                className="mx-auto max-w-full"
                                            />
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------- Mobile / Tablet: simple stacked list (no GSAP pin) ---------- */}
            <div className="lg:hidden py-12 space-y-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="space-y-4">
                        <p className="text-primary-300 text-xs font-bold tracking-widest uppercase">{eyebrow}</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                            {headline}
                        </h2>
                        <p className="text-primary-200/90">
                            {description}
                        </p>
                    </div>

                    {products.map((p) => (
                        <article
                            key={p.id}
                            className={`rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15 ${p.bgColor} ${p.textColor}`}
                            style={p.id === 1 ? {
                                backgroundColor: '#d3dcdd',
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23fb7d3c' fill-opacity='0.11'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                            } : undefined}
                        >
                            <div className="border-l-4 border-current pl-4 mb-4">
                                <p className="text-xs font-bold tracking-widest uppercase opacity-80">{p.label}</p>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold">{p.title}</h3>
                            <p className="mt-3 opacity-90">{p.description}</p>

                            <a
                                href={p.ctaLink}
                                className="mt-6 inline-flex items-center gap-3 bg-neutral-900 text-white px-5 py-3 rounded-full font-semibold hover:gap-4 transition-all duration-300"
                            >
                                {p.ctaText}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>

                            {/* <div className="mt-6 inline-block px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold border border-white/30">
                            {p.statBadge}
                        </div> */}

                            <ul className="grid grid-cols-1 gap-3 mt-6">
                                {p.benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 mt-0.5 flex-shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-sm leading-relaxed">{b}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6">
                                <Screenshot
                                    src={p.screenshot.src}
                                    width={p.screenshot.width}
                                    height={p.screenshot.height}
                                    className="mx-auto max-w-full"
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OutcomeSection;
