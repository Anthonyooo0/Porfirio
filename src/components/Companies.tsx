'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/content/config'

export default function Companies() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted">
            Managing operations for Fortune 500 companies and prestigious organizations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {siteConfig.companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-bg border border-surface rounded-lg p-6 flex items-center justify-center hover:border-accent/50 transition-all duration-300 group"
            >
              <span className="text-text font-medium text-center group-hover:text-accent transition-colors duration-300">
                {company}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
