'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import DesktopDashboard from './dashboards/DesktopDashboard'

const questions = [
  "I'm feeling anxious about the game tomorrow?",
  "How do I stay focused under pressure?",
  "How can I bounce back after a bad performance?",
]

function TypewriterChatbox() {
  const [displayText, setDisplayText] = useState('')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const currentQuestion = questions[questionIndex]

    if (!isDeleting) {
      if (displayText.length < currentQuestion.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentQuestion.slice(0, displayText.length + 1))
        }, 45 + Math.random() * 35)
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true)
        }, 2200)
      }
    } else {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 25)
      } else {
        setIsDeleting(false)
        setQuestionIndex((prev) => (prev + 1) % questions.length)
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [displayText, isDeleting, questionIndex])

  return (
    <div className="w-full max-w-2xl">
      <div className="relative flex items-center bg-foreground/[0.07] backdrop-blur-xl border border-border rounded-full px-6 py-4 gap-4">
        <span className="text-muted-foreground font-inter text-sm sm:text-base flex-grow min-h-[1.5rem] text-left">
          {displayText}
          <span className="inline-block w-[2px] h-[1.1em] bg-muted-foreground/60 ml-[1px] align-middle animate-pulse" />
        </span>
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-foreground/10 flex items-center justify-center">
          <svg className="w-4 h-4 text-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
      </div>
    </div>
  )
}

const TARGET_W = 1440
const TARGET_H = 900

function HeroDashboard() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.6)

  useEffect(() => {
    const update = () => {
      if (!wrapRef.current) return
      const w = wrapRef.current.offsetWidth
      const h = wrapRef.current.offsetHeight
      setScale(Math.min(w / TARGET_W, h / TARGET_H, 1))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div
      ref={wrapRef}
      className="w-full h-full flex items-start justify-center px-6 sm:px-8 lg:px-12"
    >
      <div
        style={{
          width: TARGET_W * scale,
          height: TARGET_H * scale,
          maxWidth: '100%',
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid rgba(248,247,242,0.12)',
          boxShadow: '0 60px 120px rgba(0,0,0,0.55), 0 25px 50px rgba(0,0,0,0.35)',
          background: '#0B0D10',
        }}
      >
        <div
          style={{
            width: TARGET_W,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          <DesktopDashboard />
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '170vh' }}
    >
      {/* Background gradient image — extends to 200vh, lifted to hide dark top edge */}
      <div
        className="absolute inset-x-0 w-full pointer-events-none hero-bg"
        style={{
          top: '-4vh',
          height: '204vh',
          backgroundImage: 'url(/assets/hero%20gradient.webp)',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />

      {/* Top 70vh: hero text content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32"
        style={{ height: '70vh' }}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="font-syne !font-normal text-foreground leading-[1.1] !normal-case"
            style={{
              fontSize: 'clamp(1.2rem, 4.8vw, 5.2rem)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              maxWidth: '75vw',
              width: '75vw',
              textTransform: 'none',
            }}
          >
            Training the mental side of youth sports, thoughtfully.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="mt-1 flex items-center gap-4"
          >
            <a href="/#contact" className="stroke-button !border-[1px]">
              <span className="stroke-button-inner !py-2 !px-4 !text-[0.65rem]">
                Join the Waitlist
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="mt-3 w-full flex justify-center"
          >
            <TypewriterChatbox />
          </motion.div>
        </div>
      </div>

      {/* 70vh→170vh: full desktop dashboard inside hero */}
      <div className="relative z-10" style={{ height: '100vh' }}>
        <HeroDashboard />
      </div>
    </section>
  )
}
