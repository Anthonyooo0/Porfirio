'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Briefcase,
  CheckCircle2,
  Store
} from 'lucide-react'
import { siteConfig } from '@/content/config'

// Company logos that should use images instead of icons
const companyLogos = ['compass', 'marriott', 'restaurant-associates', 'compassgroup', 'RestaurantAssociates']

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
            Career Experience
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Two decades of progressive leadership in restaurant operations, corporate dining, and hospitality
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-surface"></div>

          <div className="space-y-12">
            {siteConfig.experience.map((job, index) => {
              type JobWithIcon = typeof job & { icon?: string }
              const iconName = (job as JobWithIcon).icon || 'briefcase'
              const isCompanyLogo = companyLogos.includes(iconName)

              return (
                <motion.div
                  key={`${job.company}-${job.period}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
                    {/* Timeline dot */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1 items-center justify-center">
                      <div className="w-4 h-4 bg-accent rounded-full border-4 border-bg"></div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
                      <div className="bg-bg border border-surface rounded-lg p-6 lg:p-8 hover:border-accent/50 transition-all duration-300 group">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-surface rounded-lg group-hover:bg-accent/10 transition-colors duration-300 flex items-center justify-center min-w-[60px] min-h-[60px]">
                            {isCompanyLogo ? (
                              <Image
                                src={`/logos/${iconName}.png`}
                                alt={`${job.company} logo`}
                                width={40}
                                height={40}
                                className="object-contain invert"
                              />
                            ) : iconName === 'store' ? (
                              <Store size={24} className="text-accent" />
                            ) : (
                              <Briefcase size={24} className="text-accent" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-heading text-xl lg:text-2xl font-semibold text-text mb-1 group-hover:text-accent transition-colors duration-300">
                              {job.title}
                            </h3>
                            <p className="text-accent font-medium mb-1">
                              {job.company}
                            </p>
                            <span className="inline-block text-muted text-sm bg-surface px-3 py-1 rounded-md">
                              {job.period}
                            </span>
                          </div>
                        </div>

                        <p className="text-muted leading-relaxed mb-6">
                          {job.description}
                        </p>

                        {job.highlights && job.highlights.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="text-text font-semibold mb-3 text-sm uppercase tracking-wide">
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {job.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-muted text-sm">
                                  <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Empty column for alternating layout */}
                    <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}`}></div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
