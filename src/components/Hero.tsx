'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { siteConfig, resumeUrl } from '@/content/config'
import Image from 'next/image'

export default function Hero() {
  const scrollToExperience = () => {
    const element = document.getElementById('experience')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Professional photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative w-64 h-80 bg-surface rounded-lg overflow-hidden border border-surface">
              <Image
                src="/logos/IMG_9074.jpg"
                alt="Porfirio Jimenez"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right side - Large text display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="mb-8">
              <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold text-text mb-2">
                My
              </h1>
              <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold text-text mb-6">
                Portfolio
              </h1>
              <div className="h-1 w-24 bg-accent mb-8"></div>
            </div>

            <p className="text-xl sm:text-2xl text-muted leading-relaxed mb-8">
              {siteConfig.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToExperience}
                className="group bg-accent hover:bg-accent/90 text-bg px-8 py-4 rounded-md font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-lg"
              >
                View Experience
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <a
                href={resumeUrl}
                download
                className="group border-2 border-accent text-accent hover:bg-accent hover:text-bg px-8 py-4 rounded-md font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-lg"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {siteConfig.about.metrics.slice(0, 2).map((metric) => (
                <div key={metric.label} className="border-l-4 border-accent pl-4">
                  <div className="text-3xl font-bold text-accent mb-1">
                    {metric.value}
                  </div>
                  <div className="text-muted text-sm">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
