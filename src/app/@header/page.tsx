'use client'

import { useTheme } from 'next-themes'
import { useMemo } from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

const Header = () => {
  const { theme, setTheme } = useTheme()
  const currentTheme = useMemo(
    () => (theme === 'dark' ? 'light' : 'dark'),
    [theme],
  )
  return (
    <div
      className="absolute right-4 top-2 cursor-pointer text-2xl"
      onClick={() => setTheme(currentTheme)}
      title={currentTheme === 'light' ? '当前亮色模式' : '当前夜间模式'}
    >
      {theme === 'dark' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </div>
  )
}

export default Header
