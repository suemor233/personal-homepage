import { FC, ReactNode } from 'react'

import { IconAndroid, IconJavaScript, IconMongodb, IconNest, IconNext, IconNode, IconReact, IconTailwind, IconTypeScript, IconVue } from '~/components/universal/icons'

interface StackProps {
  name: string
  icon: ReactNode
}

const TechStacks = () => {
  return (
    <div className="mt-32 w-full">
      <h3 className="text-4xl text-center">技术栈</h3>
      <section className="grid grid-cols-5 gap-12 mt-12 items-center">
        {techStacks.map((item, index) => (
          <Stacks key={item.name} {...item} />
        ))}
      </section>
    </div>
  )
}

const Stacks: FC<StackProps> = ({name,icon}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md h-24 w-24 p-4 mx-auto overflow-hidden">
      {icon}
    </div>
  )
}

const techStacks: StackProps[] = [
  {
    icon: <IconJavaScript />,
    name: 'JavaScript',
  },
  {
    icon: <IconTypeScript />,
    name: 'TypeScript',
  },
  {
    icon: <IconReact />,
    name: 'React',
  },
  {
    icon: <IconNext />,
    name: 'NextJS',
  },
  {
    icon: <IconTailwind />,
    name: 'TailwindCSS',
  },
  {
    icon: <IconVue />,
    name: 'Vue',
  },
  {
    icon: <IconNode />,
    name: 'NodeJS',
  },
  {
    icon: <IconNest />,
    name: 'NestJS',
  },
  {
    icon: <IconMongodb />,
    name: 'Mongodb',
  },
  {
    icon: <IconAndroid />,
    name: 'Android',
  },
]

export default TechStacks
