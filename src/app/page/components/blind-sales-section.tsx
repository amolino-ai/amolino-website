'use client'

import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { motion, useInView, AnimatePresence } from 'framer-motion'

export function BlindSalesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }
  
  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
  
  const problems = [
    {
      title: "Forecasts change last-minute",
      description: "Traditional forecasting methods rely on manual updates and gut feelings, leading to last-minute surprises and missed targets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Reps push deals without warning",
      description: "Sales reps often push deals without proper qualification, leading to wasted resources and missed opportunities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      title: "CRM data is outdated or unreliable",
      description: "Manual CRM updates lead to stale data, making it impossible to get accurate insights and make informed decisions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "You are reacting instead of driving the quarter",
      description: "Without real-time insights, you're constantly playing catch-up instead of proactively managing your pipeline.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,_#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <Container>
        <div className="max-w-3xl mx-auto space-y-12 relative">
          <motion.div
            className="space-y-6 text-center"
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={container}
          >
            <motion.div variants={item}>
              <Heading className="text-3xl md:text-4xl font-bold tracking-tight">
                If you&apos;re guessing, you&apos;re already behind.
              </Heading>
            </motion.div>
            
            <motion.div variants={item}>
              <Subheading className="text-xl md:text-2xl font-semibold text-gray-800">
                Most sales teams fly blind
              </Subheading>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="space-y-4"
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={container}
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                />
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="relative w-full p-6 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center"
                      animate={pulseAnimation}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {problem.icon}
                    </motion.div>
                    <div className="flex-1 text-left">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {problem.title}
                      </h3>
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 text-gray-600"
                          >
                            {problem.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
              Amolino changes that.
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Our AI reads every email, meeting, and CRM entry to surface hidden risks, generate accurate forecasts, and recommend next steps—automatically.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
} 