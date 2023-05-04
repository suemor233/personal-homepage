import NextImage from 'next/image'
import { FC } from 'react'
import Balancer from 'react-wrap-balancer'

import type { AggregateTopPost } from '@mx-space/api-client'

import { apiClient } from '~/services'

const Posts = async () => {
  const post = await apiClient.aggregate.getTop()
  return (
    <div className="mt-32 w-full">
      <h3 className="text-4xl">近日博文</h3>
      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full mt-3">
        {post.posts.map(
          (item, index) => index < 3 && <PostsItem {...item} key={item.id} />,
        )}
      </section>
    </div>
  )
}

const PostsItem: FC<AggregateTopPost> = ({ images, title }) => {
  return (
    <a
      className="bg-white border rounded-md p-4  hover:border-gray-500 transition-all duration-200"
      href=""
    >
      <NextImage
        src={
          'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f83ef1ef06442d7a4c0782cfd3a9667~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.png'
        }
        alt={title}
        quality={100}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }} // optional
        className="rounded-md"
      />
        <h4 className="mt-5 text-xl text-center">
          <Balancer>{title}</Balancer>
        </h4>
    </a>
  )
}

export default Posts
