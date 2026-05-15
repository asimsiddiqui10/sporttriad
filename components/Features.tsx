'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import IpadDashboard from './dashboards/IpadDashboard'
import PhoneDashboard from './dashboards/PhoneDashboard'

const features = [
  {
    badge: 'Memory',
    headline: 'It never forgets any detail',
    description: 'Persistent memory using Knowledge Graphs — adapting to each athlete over time, remembering goals, challenges, and progress.',
  },
  {
    badge: 'Journaling',
    headline: 'Reflect, grow, repeat',
    description: 'Structured reflection for confidence, pressure, performance, and identity — understood, connected, and built over time.',
  },
  {
    badge: 'Knowledge Graph',
    headline: 'Everything stays connected',
    description: 'Emotional patterns, triggers, progress, setbacks, and family context stay linked — so conversations never reset.',
  },
  {
    badge: 'Privacy',
    headline: 'Your data stays yours',
    description: 'No public model training. Private, siloed memory per user. Parent-controlled access for minors — by design.',
  },
  {
    badge: 'Intelligence',
    headline: 'More than a chatbot',
    description: 'A conversational system built specifically to help young athletes improve the cognitive tools to reach their potential.',
  },
  {
    badge: 'Nudges',
    headline: 'Gentle at the right time',
    description: 'Subtle, timely nudges that reinforce confidence, resilience, and healthy mindset habits — without adding pressure.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function FeatureCard({ feature }: { feature: typeof features[number] }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -3, transition: { duration: 0.3 } }}
      className="stroke-card"
      style={{ padding: 'clamp(0.85rem, 1.4vw, 1.1rem)', gap: '0.5rem' }}
    >
      <span className="badge" style={{ fontSize: 'clamp(0.6rem, 0.85vw, 0.7rem)' }}>{feature.badge}</span>
      <h1
        className="font-ibm-plex-mono font-normal uppercase tracking-wide text-foreground leading-tight"
        style={{ fontSize: 'clamp(0.85rem, 1.1vw, 1rem)' }}
      >
        {feature.headline}
      </h1>
      <p
        className="text-muted-foreground leading-snug font-inter"
        style={{ fontSize: 'clamp(0.72rem, 0.95vw, 0.82rem)' }}
      >
        {feature.description}
      </p>
    </motion.div>
  )
}

function ScaledDevice({
  nativeWidth,
  nativeHeight,
  maxWidth,
  maxHeightVh = 95,
  align = 'center',
  children,
}: {
  nativeWidth: number
  nativeHeight: number
  maxWidth: number
  maxHeightVh?: number
  align?: 'start' | 'center' | 'end'
  children: React.ReactNode
}) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.4)

  useEffect(() => {
    const update = () => {
      if (!wrapRef.current) return
      const containerW = Math.min(wrapRef.current.offsetWidth, maxWidth)
      const containerH = window.innerHeight * (maxHeightVh / 100)
      const sx = containerW / nativeWidth
      const sy = containerH / nativeHeight
      setScale(Math.min(sx, sy))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [nativeWidth, nativeHeight, maxWidth, maxHeightVh])

  const justify = align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : 'center'

  return (
    <div
      ref={wrapRef}
      style={{ width: '100%', display: 'flex', justifyContent: justify }}
    >
      <div
        style={{
          width: nativeWidth * scale,
          height: nativeHeight * scale,
          maxWidth,
          position: 'relative',
        }}
      >
        <div
          style={{
            width: nativeWidth,
            height: nativeHeight,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const firstHalf = features.slice(0, 3)
  const secondHalf = features.slice(3)

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-12 md:py-16 px-3 sm:px-5 lg:px-6"
    >
      <div className="max-w-[1500px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="font-syne !font-normal text-foreground leading-[1.1] mb-4 !normal-case"
            style={{
              fontSize: 'clamp(1.5rem, 6vw, 6.5rem)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              maxWidth: '75vw',
              textTransform: 'none',
              margin: '0 auto',
            }}
          >
            How triad works
          </h2>
        </motion.div>

        {/* Block 1: 3 features (left) + iPad (right, dominant) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4 items-center mb-16 md:mb-20"
        >
          <div className="lg:col-span-3 flex flex-col gap-3 order-2 lg:order-1">
            {firstHalf.map((f, i) => (
              <FeatureCard key={i} feature={f} />
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-9 order-1 lg:order-2 relative"
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(50% 60% at 60% 50%, rgba(30,58,102,0.22) 0%, rgba(30,58,102,0) 70%)',
                filter: 'blur(20px)',
              }}
            />
            <div className="relative">
              <ScaledDevice
                nativeWidth={1194}
                nativeHeight={834}
                maxWidth={1400}
                maxHeightVh={90}
                align="end"
              >
                <IpadDashboard />
              </ScaledDevice>
            </div>
          </motion.div>
        </motion.div>

        {/* Block 2: iPhone (left, dominant) + 3 features (right) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-2 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 lg:pl-16 xl:pl-24 relative"
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(45% 60% at 50% 50%, rgba(245,243,236,0.10) 0%, rgba(245,243,236,0) 70%)',
                filter: 'blur(20px)',
              }}
            />
            <div className="relative">
              <ScaledDevice
                nativeWidth={414}
                nativeHeight={886}
                maxWidth={620}
                maxHeightVh={95}
                align="start"
              >
                <PhoneDashboard />
              </ScaledDevice>
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-3">
            {secondHalf.map((f, i) => (
              <FeatureCard key={i} feature={f} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
