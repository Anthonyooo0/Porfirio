'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Company logos configuration
const companies = [
  { name: 'Goldman Sachs', logo: 'https://logo.clearbit.com/goldmansachs.com', domain: 'goldmansachs.com' },
  { name: 'UBS', logo: 'https://logo.clearbit.com/ubs.com', domain: 'ubs.com' },
  { name: 'Barclays Capital', logo: 'https://logo.clearbit.com/barclays.com', domain: 'barclays.com' },
  { name: 'Ernst & Young', logo: 'https://logo.clearbit.com/ey.com', domain: 'ey.com' },
  { name: 'Lehman Brothers', logo: 'https://logo.clearbit.com/lehman.com', domain: 'lehman.com' },
  { name: 'Citigroup', logo: 'https://logo.clearbit.com/citigroup.com', domain: 'citigroup.com' },
  { name: 'Condé Nast', logo: 'https://logo.clearbit.com/condenast.com', domain: 'condenast.com' },
  { name: 'New York Times', logo: 'https://logo.clearbit.com/nytimes.com', domain: 'nytimes.com' },
  { name: 'Marriott Hotels', logo: 'https://logo.clearbit.com/marriott.com', domain: 'marriott.com' },
  { name: 'U.S. Open / USTA', logo: 'https://logo.clearbit.com/usta.com', domain: 'usta.com' },
  { name: 'Compass Group', logo: 'https://logo.clearbit.com/compass-group.com', domain: 'compass-group.com' },
  { name: 'Restaurant Associates', logo: 'https://logo.clearbit.com/restaurantassociates.com', domain: 'restaurantassociates.com' },
]

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
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-bg border border-surface rounded-lg p-6 flex items-center justify-center hover:border-accent/50 transition-all duration-300 group min-h-[120px]"
            >
              <div className="relative w-full h-16 flex items-center justify-center">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    // Fallback to text if logo fails to load
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `<span class="text-text font-medium text-center group-hover:text-accent transition-colors duration-300">${company.name}</span>`
                    }
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
