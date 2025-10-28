'use client';

import React from 'react';
import { Container } from '@/components/Container';
import { Screenshot } from '@/components/Screenshot';
import { Heading } from '@/components/Text';
import { Button } from '@/components/Button';
import type { FeatureSectionContent } from '@/lib/content/types';

interface FeatureSectionProps {
  content: FeatureSectionContent;
}

export function FeatureSection({ content }: FeatureSectionProps) {
  const [activeTab, setActiveTab] = React.useState(content.tabs[0]?.id || 'revenue');
  const currentTab = content.tabs.find(tab => tab.id === activeTab);

  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <div className="flex justify-center space-x-4 mb-8">
          {content.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <Heading as="h2" className="max-w-3xl mx-auto text-center">
          {currentTab?.description}
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src={currentTab?.src || ''}
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem] mx-auto bg-gray-100 rounded-2xl shadow-2xl"
        />

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <Button href="#">
            Book a call
          </Button>
          {currentTab?.learnMoreLink && (
            <Button href={currentTab.learnMoreLink} variant="outline">
              Learn more
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
} 