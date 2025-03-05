import { allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = allBlogs
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
