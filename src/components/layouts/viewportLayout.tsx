'use client'

import { motion } from 'framer-motion'
import type { FC, PropsWithChildren } from 'react'
import { useWideMedia } from '~/utils/media'

export const ViewportLayout: FC<PropsWithChildren & { title?: string }> = ({
  children,
  title,
}) => {
  const isWide = useWideMedia()
  return (
    <motion.div
      className="mt-14 md:mt-32 w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: isWide ? 0.2 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h3 className="text-4xl">{title}</h3>
      {children}
    </motion.div>
  )
}
