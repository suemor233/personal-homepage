import NextImage from 'next/image'
import type { FC } from 'react'
import Balancer from 'react-wrap-balancer'

import { ViewportLayout } from '~/components/layouts/viewportLayout'

interface ProjectItemProps {
  title: string
  description: string
  cover: string
  link: string
}

const Projects = async () => {
  return (
    <ViewportLayout title="个人项目">
      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full mt-3">
        {projectData.map((item, index) => (
          <ProjectItem {...item} key={item.title} />
        ))}
      </section>
    </ViewportLayout>
  )
}

const ProjectItem: FC<ProjectItemProps> = ({
  title,
  description,
  cover,
  link,
}) => {
  return (
    <a
      className="bg-zinc-50 border rounded-md p-4  hover:border-gray-300 transition-all duration-200 w-full"
      href={link}
      target="_blank"
    >
      <div className='relative w-auto h-[200px] bg-cover'>
        <NextImage
          src={cover}
          alt={title}
          fill
          style={{objectFit:"cover"}}
          className="rounded-md shadow-md"
        />
      </div>

      <h4 className="mt-5 text-2xl">
        <Balancer>{title}</Balancer>
      </h4>
      <h5 className="mt-2 text-xl text-zinc-500">{description}</h5>
    </a>
  )
}

const projectData: ProjectItemProps[] = [
  {
    title: '个人博客',
    description: '使用 NextJS + TailwindCSS + NestJS + MongoDB 搭建的个人博客',
    cover: 'https://y.suemor.com/imageshomepage-project-1.jpg',
    link: 'https://github.com/suemor233/suemor-blog',
  },
  {
    title: '仿掘金官网',
    description: '第五届字节青训营项目，NextJS + Less 编写，获得一等奖',
    cover: 'https://y.suemor.com/imageshomepage-project-2.jpg',
    link: 'https://github.com/Bocchi-Developers/juejin',
  },
  {
    title: 'CLI 工具',
    description: '一个 CLI 可以快捷创建项目，或者根据已有项目快捷配置 ESLint 和 Pretter',
    cover:
      'https://y.suemor.com/imageshomepage-project-3.jpg',
    link: 'https://github.com/suemor233/create-project',
  },
  {
    title: '失物招领微信小程序',
    description: '一款闲鱼风格的失物招领微信小程序，使用 Taro 编写',
    cover:
      'https://y.suemor.com/imageslost2.jpg',
    link: 'https://github.com/suemor233/LostAndFound-weapp',
  },
]

export default Projects
