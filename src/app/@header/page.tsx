'use client'

import { useTheme } from 'next-themes'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

const Header = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div
      className="absolute right-2 top-2 cursor-pointer text-2xl"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </div>
  )
}

export default Header
