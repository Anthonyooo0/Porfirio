'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Briefcase,
  TrendingUp,
  Building,
  Users,
  Star,
  Hotel,
  Award,
  Activity,
  Rocket,
  DollarSign,
  Handshake,
  Shield
} from 'lucide-react'
import { siteConfig } from '@/content/config'

const iconMap = {
  briefcase: Briefcase,
  'trending-up': TrendingUp,
  building: Building,
  users: Users,
  star: Star,
  hotel: Hotel,
  award: Award,
  activity: Activity,
  rocket: Rocket,
  'dollar-sign': DollarSign,
  handshake: Handshake,
  shield: Shield,
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
            Core Competencies
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Executive-level expertise in restaurant operations, hospitality management, and Fortune 500 corporate dining
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {siteConfig.skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface border border-surface rounded-lg p-8 hover:border-accent/50 transition-colors duration-300"
            >
              <h3 className="font-heading text-xl font-semibold text-text mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => {
                  const IconComponent = iconMap[skill.icon as keyof typeof iconMap] || Briefcase
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-3 rounded-md bg-bg border border-surface hover:border-accent/50 transition-all duration-200 group"
                    >
                      <div className="p-2 bg-surface rounded-lg group-hover:bg-accent/10 transition-colors duration-200">
                        <IconComponent
                          size={20}
                          className="text-accent"
                        />
                      </div>
                      <span className="text-muted group-hover:text-text transition-colors duration-200 font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
