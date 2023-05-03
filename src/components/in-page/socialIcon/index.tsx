'use client'

import { motion } from 'framer-motion'
import type { FC, ReactNode } from 'react'

const SocalIcon: FC<{ icon: ReactNode; link: string }> = ({ icon, link }) => {

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: '1.1' }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {icon}
    </motion.a>
  )
}

export default SocalIcon
