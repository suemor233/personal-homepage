'use client'

import { motion } from 'framer-motion'
import type { FC, PropsWithChildren } from 'react'

export const ViewportLayout: FC<PropsWithChildren & { title?: string }> = ({
  children,
  title,
}) => {
  return (
    <motion.div
      className="mt-14 md:mt-32 w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h3 className="text-4xl">{title}</h3>

      {children}
    </motion.div>
  )
}
