import NextImage from 'next/image'
import type { FC } from 'react'
import Balancer from 'react-wrap-balancer'

import type { AggregateTopPost } from '@mx-space/api-client'

import { ViewportLayout } from '~/components/layouts/viewportLayout'
import { apiClient } from '~/services'

const Posts = async () => {
  const post = await apiClient.aggregate.getTop()
  return (
    <ViewportLayout title="最新博文">
      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full mt-3">
        {post.posts.map(
          (item, index) => index < 3 && <PostsItem {...item} key={item.id} />,
        )}
      </section>
    </ViewportLayout>
  )
}

const PostsItem: FC<AggregateTopPost & { meta?: { cover: string } }> = ({
  meta,
  title,
}) => {
  return (
    <a
      className="bg-white dark:bg-zinc-700 dark:border-zinc-500 border rounded-md p-4  hover:!border-gray-400 transition-all duration-200 shadow-md"
      href=""
    >
      <div className="relative w-auto h-[200px] bg-cover">
        <NextImage
          src={meta?.cover || ''}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-md shadow-md"
        />
      </div>
      <h4 className="mt-5 text-2xl text-center">
        <Balancer>{title}</Balancer>
      </h4>
    </a>
  )
}

export default Posts
