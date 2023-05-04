import Balancer from 'react-wrap-balancer'

import { socialList } from '~/constants/socialList'

import SocalIcon from '../socialIcon'

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-100 bg-opacity-70">
      <div className="max-w-[1200px] mx-auto py-10 flex justify-between items-center px-4">
        <div className="text-xl md:text-2xl">
          <Balancer>@ 2023 Suemor.</Balancer>
        </div>
        <section className="text-zinc-500 flex text-2xl gap-4 md:gap-8 mt-2">
          {socialList.map((item) => (
            <SocalIcon {...item} key={item.link} />
          ))}
        </section>
      </div>
    </footer>
  )
}

export default Footer
