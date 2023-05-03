'use client'

import { motion } from 'framer-motion'
import { FC, ReactNode, useEffect } from 'react'
import { client } from '~/services';

const SocalIcon: FC<{ icon: ReactNode; link: string }> = ({ icon, link }) => {
  // useEffect(() => {
  //   ;(async () => {
  //     const data = await client.aggregate.getAggregateData()
  //     console.log(data)
  //   })()
  // }, [])
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
