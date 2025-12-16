'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Company logos configuration - using local PNG files
const companies = [
  { name: 'UBS', logo: '/logos/ubs.png' },
  { name: 'Barclays Capital', logo: '/logos/Barclays.png' },
  { name: 'Ernst & Young', logo: '/logos/ernstyoung.png' },
  { name: 'Lehman Brothers', logo: '/logos/lehman.png' },
  { name: 'Citigroup', logo: '/logos/citigroup.png' },
  { name: 'Condé Nast', logo: '/logos/condenast.png' },
  { name: 'New York Times', logo: '/logos/nyt.png' },
  { name: 'Marriott Hotels', logo: '/logos/marriott.png' },
  { name: 'U.S. Open / USTA', logo: '/logos/usopen.png' },
  { name: 'Compass Group', logo: '/logos/compassgroup.png' },
  { name: 'Restaurant Associates', logo: '/logos/RestaurantAssociates.png' },
]

export default function Companies() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600">
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
              className="flex items-center justify-center p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
            >
              <div className="relative w-full h-20 flex items-center justify-center">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={200}
                  height={80}
                  className="object-contain max-w-full max-h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
