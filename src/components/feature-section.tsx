'use client'

import React from 'react'
import { Container } from '@/components/container'
import { Screenshot } from '@/components/screenshot'
import { Heading } from '@/components/text'

export function FeatureSection() {
  const [activeTab, setActiveTab] = React.useState('revenue');

  const tabs = [
    {
      id: 'revenue',
      title: 'Revenue Analytics',
      src: '/screenshots/dashboard_revenue_feb_2025.png',
      description: 'From Pipeline Surprises to Pipeline Clarity.'
    },
    {
      id: 'manager',
      title: 'Team Insights',
      src: '/screenshots/manager_dashboard.png',
      description: 'Empower Your Sales Leaders with Real-Time Insights.'
    },
    {
      id: 'guided',
      title: 'Guided Selling',
      src: '/screenshots/guided_selling.png',
      description: 'AI-Powered Sales Guidance for Every Deal.'
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
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem] mx-auto"
        />
      </Container>
    </div>
  )
} 