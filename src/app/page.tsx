import Image from 'next/image'
import { FaBloggerB, FaGithub, FaTelegram, FaTwitter } from 'react-icons/fa'

import Posts from '~/components/in-page/posts'
import SocalIcon from '~/components/in-page/socialIcon'

export default function Home() {
  return (
    <main className="flex  flex-col items-center p-24 gap-6">
      <Image
        src="https://y.suemor.com/images89030875.jpeg"
        alt="suemor avatar"
        width={180}
        height={180}
        className="rounded-full shadow-md"
      />
      <h2 className="text-6xl font-semibold">Suemor</h2>
      <h3 className="text-5xl">一只正在学习前端的萌新</h3>
      <section className="text-zinc-500 flex text-3xl gap-8 mt-2">
        {socialList.map((item) => (
          <SocalIcon {...item} key={item.link} />
        ))}
      </section>
      {/* @ts-expect-error */}
      <Posts />
    </main>
  )
}

const socialList = [
  {
    icon: <FaTwitter />,
    link: 'https://twitter.com/Suemor233',
  },
  {
    icon: <FaGithub />,
    link: 'https://github.com/suemor233',
  },
  {
    icon: <FaTelegram />,
    link: 'https://t.me/Suemor',
  },
  {
    icon: <FaBloggerB />,
    link: 'https://suemor.com',
  },
]
