'use client'

import { motion, useScroll, useSpring } from "framer-motion"

export const ProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return <motion.div className="fixed inset-0 h-0.5 bg-blue-500 origin-left" style={{ scaleX }} />
}
