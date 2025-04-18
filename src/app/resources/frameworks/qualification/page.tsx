"use client";

import Link from 'next/link';
import { Container } from '@/components/container';
import { Heading, Subheading } from '@/components/text';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Framework {
  id: string;
  name: string;
  description: string;
  color: string;
  imageUrl: string;
  tags: string[];
}

const frameworks: Framework[] = [
  {
    id: 'bant',
    name: 'BANT',
    description: 'Budget, Authority, Need, Timeline - IBM\'s classic qualification framework that focuses on financial capability, decision-making power, problem identification, and purchase timeframe.',
    color: 'bg-blue-600',
    imageUrl: '/images/frameworks/bant-framework.jpg',
    tags: ['Budget', 'Authority', 'Need', 'Timeline'],
  },
  {
    id: 'meddic',
    name: 'MEDDIC',
    description: 'Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion - An enterprise-focused framework designed for complex B2B sales cycles.',
    color: 'bg-purple-600',
    imageUrl: '/images/meddic.png',
    tags: ['Metrics', 'Economic Buyer', 'Decision Criteria', 'Champion'],
  },
  {
    id: 'meddpicc',
    name: 'MEDDPICC',
    description: 'Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Identify Pain, Champion, Competition - An extended version of MEDDIC for complex enterprise sales with procurement and competitive considerations.',
    color: 'bg-indigo-600',
    imageUrl: '/images/frameworks/meddpicc-hero.jpg',
    tags: ['Metrics', 'Economic Buyer', 'Decision Process', 'Paper Process', 'Competition'],
  },
  {
    id: 'spiced',
    name: 'SPICED',
    description: 'Situation, Pain, Impact, Critical Event, Decision - A customer-centric framework that focuses on understanding prospect situation and pain points.',
    color: 'bg-amber-500',
    imageUrl: '/images/frameworks/spiced-framework.jpg',
    tags: ['Situation', 'Pain', 'Impact', 'Critical Event'],
  },
  {
    id: 'gpctba-c',
    name: 'GPCTBA/C&I',
    description: 'Goals, Plans, Challenges, Timeline, Budget, Authority / Consequences & Implications - HubSpot\'s comprehensive qualification framework.',
    color: 'bg-emerald-600',
    imageUrl: '/images/frameworks/gpctba-framework.jpg',
    tags: ['Goals', 'Plans', 'Challenges', 'Timeline'],
  },
  {
    id: 'champ',
    name: 'CHAMP',
    description: 'Challenges, Authority, Money, Prioritization - A streamlined framework focused on understanding prospect\'s challenges and decision-making process.',
    color: 'bg-rose-600',
    imageUrl: '/images/frameworks/champ-framework.jpg',
    tags: ['Challenges', 'Authority', 'Money', 'Prioritization'],
  },
  {
    id: 'faint',
    name: 'FAINT',
    description: 'Funds, Authority, Interest, Need, Timing - A modern framework that focuses on creating opportunities rather than just finding them, particularly for innovative solutions.',
    color: 'bg-sky-600',
    imageUrl: '/images/frameworks/faint-framework.jpg',
    tags: ['Funds', 'Authority', 'Interest', 'Need', 'Timing'],
  },
];

export default function QualificationFrameworks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Container>
        <div className="py-20 md:py-32">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/30">
              <span className="text-sm font-medium tracking-wide text-blue-600 dark:text-blue-400">
                SALES RESOURCES
              </span>
            </div>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sales Qualification Frameworks
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Effective qualification is essential for sales success. Explore these proven frameworks 
              to qualify opportunities and focus your efforts on the right prospects.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworks.map((framework) => (
              <motion.div
                key={framework.id}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={`group relative bg-gradient-to-br rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  frameworks.indexOf(framework) % 3 === 0
                    ? 'from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800'
                    : frameworks.indexOf(framework) % 3 === 1
                    ? 'from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800'
                    : 'from-green-50 to-white dark:from-green-900/20 dark:to-gray-800'
                }`}
              >
                {/* <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={framework.imageUrl}
                    alt={`${framework.name} Framework`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div> */}
                
                <div className="relative p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {framework.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    {framework.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {framework.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={`/resources/frameworks/qualification/${framework.id}`}
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Learn more
                    <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
} 