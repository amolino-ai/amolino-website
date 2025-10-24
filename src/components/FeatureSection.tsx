'use client';

import React from 'react';
import { Container } from '@/components/Container';
import { Screenshot } from '@/components/Screenshot';
import { Heading } from '@/components/Text';

export function FeatureSection() {
  const [activeTab, setActiveTab] = React.useState('revenue');

  const tabs = [
    {
      id: 'execution',
      title: 'Win More. Faster',
      src: '/screenshots/dashboard_revenue_forecast_april2025.jpg',
      description: 'Make Every Rep a Top Performer with AI-Driven Sales Guidance.'
    },
    {
      id: 'forecast',
      title: 'Forecast Confidently',
      src: '/screenshots/dashboard_managers_view_april_2025.jpg',
      description: 'Quarterly Forecasting. Accurate. Real-time.',
    },
    {
      id: 'grunt-work',
      title: 'Eliminate Grunt-work',
      src: '/screenshots/dashboard_rep_view_april_2025.jpg',
      description: 'Update the CRM Automatically. No Lifting a Finger.',
    }
  ];

  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab) => (
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
          {tabs.find(tab => tab.id === activeTab)?.description}
        </Heading>
        <Screenshot 
          width={1216}
          height={768}
          src={tabs.find(tab => tab.id === activeTab)?.src || ''}
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem] mx-auto bg-gray-100 rounded-2xl shadow-2xl"
        />
      </Container>
    </div>
  );
} 