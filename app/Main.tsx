import Tag from '@/components/Tag'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
import { slug } from 'github-slugger'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <>
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Hello, 欢迎来到 White-Meta
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div className="text-3xl text-gray-500 dark:text-gray-400 border-0">
          <p>首先感谢你来到这里</p>
          <p className="mt-12">
            右上角的
            <a className="text-blue-500" href="/about">
              「关于」
            </a>
            里面有我的基本介绍
          </p>
          <p>
            同时，我在尝试做一名
            <a
              className="text-blue-500"
              href="https://space.bilibili.com/107889531"
              target="_blank"
              rel="noopener noreferrer"
            >
              「B站UP主」
            </a>
            ，希望点点关注
          </p>
          <p className="mt-12">
            我不想把大量文章塞进你的窗口里
            <br />
            所以，下面有一些基本的分类，你可以点击查看
          </p>
        </div>
        <div className="flex-col max-w-lg flex-wrap">
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mt-2 mr-5 mb-2">
                <Tag text={t} size="lg" />
                <Link
                  href={`/tags/${slug(t)}`}
                  className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
                  aria-label={`View posts tagged ${t}`}
                >
                  {` (${tagCounts[t]})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
