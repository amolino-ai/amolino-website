import React from 'react';
import type { ProblemContent } from '@/lib/content';

interface ProblemSectionProps {
    content: ProblemContent;
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ content }) => {
    return (
        <section className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Label */}
                <div className="mb-8">
                    <span className="inline-block px-4 py-2 rounded-full border border-teal-400/30 text-teal-200 text-sm font-medium">
                        {content.sectionLabel}
                    </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Main Headline */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight">{content.headline}</h2>

                        <p className="text-lg text-teal-100 leading-relaxed">{content.description}</p>

                        <button className="inline-flex items-center px-6 py-3 rounded-full border-2 border-white/30 hover:bg-white/10 transition-colors text-white font-medium">
                            {content.ctaText}
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>

                        {/* Testimonial Card */}
                        <div className="mt-12 bg-purple-100 text-gray-800 p-6 rounded-lg shadow-lg transform -rotate-2 max-w-md">
                            <p className="text-sm leading-relaxed mb-4">&ldquo;{content.testimonial.quote}&rdquo;</p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold">
                                    {content.testimonial.author.initials}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{content.testimonial.author.name}</p>
                                    <p className="text-xs text-gray-600">{content.testimonial.author.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Problem Stats */}
                    <div className="space-y-10">
                        {content.problems.map((problem, idx: number) => (
                            <div key={idx} className="space-y-3 pb-10 border-b border-teal-600/30 last:border-b-0">
                                <div className="text-6xl md:text-7xl font-bold text-teal-200">{problem.percentage}</div>
                                <p className="text-lg text-teal-100 font-medium">{problem.statDescription}</p>
                                <p className="text-base text-teal-200/80 leading-relaxed">{problem.problemDescription}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
