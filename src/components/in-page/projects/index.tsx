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
    <ViewportLayout title="贡献项目">
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
      className="bg-zinc-50 border rounded-md p-4  hover:border-gray-300 transition-all duration-200"
      href=""
    >
      <NextImage
        src={cover}
        alt={title}
        quality={100}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }} // optional
        className="rounded-md shadow-md"
      />
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
    description: '使用 NextJS + TailwindCSS + Vercel 搭建的个人博客',
    cover:
      'https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhulu.138888a5.png&w=750&q=55',
    link: '',
  },
  {
    title: '个人博客',
    description: '使用 NextJS + TailwindCSS + Vercel 搭建的个人博客',
    cover:
      'https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhulu.138888a5.png&w=750&q=55',
    link: '',
  },
  {
    title: '个人博客',
    description: '使用 NextJS + TailwindCSS + Vercel 搭建的个人博客',
    cover:
      'https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhulu.138888a5.png&w=750&q=55',
    link: '',
  },
  {
    title: '个人博客',
    description: '使用 NextJS + TailwindCSS + Vercel 搭建的个人博客',
    cover:
      'https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhulu.138888a5.png&w=750&q=55',
    link: '',
  },
]

export default Projects
