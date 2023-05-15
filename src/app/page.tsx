import Image from 'next/image'

import Posts from '~/components/in-page/posts'
import Projects from '~/components/in-page/projects'
import SocalIcon from '~/components/in-page/socialIcon'
import TechStacks from '~/components/in-page/techStacks'
import { socialList } from '~/constants/socialList'

export default function Home() {
  return (
    <main className="max-w-[1200px] gap-4 p-6 lg:py-24 xl:px-0 flex flex-col items-center mx-auto">
      <Image
        src="https://y.suemor.com/images89030875.jpeg"
        alt="suemor avatar"
        width={150}
        height={150}
        className="rounded-full shadow-md"
      />
      <h2 className=" text-3xl md:text-5xl font-semibold">Suemor</h2>
      <h3 className="text-2xl md:text-4xl text-center leading-normal">
        一只正在学习前端的萌新
      </h3>

      <section className="text-zinc-500 dark:text-zinc-400 flex text-3xl gap-8 mt-2">
        {socialList.map((item) => (
          <SocalIcon {...item} key={item.link} />
        ))}
      </section>
      <TechStacks />
      {/* @ts-expect-error */}
      <Posts />
      {/* @ts-expect-error */}
      <Projects />
    </main>
  )
}
