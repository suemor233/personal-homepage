import type { FC, ReactNode } from 'react'
import { MotionA } from '~/utils/motion'

interface SocalIconProps {
  icon: ReactNode
  link: string
  title: string
}

const SocalIcon: FC<SocalIconProps> = ({ icon, link, title }) => {
  return (
    <MotionA
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      whileHover={{ scale: '1.1' }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {icon}
    </MotionA>
  )
}

export default SocalIcon
