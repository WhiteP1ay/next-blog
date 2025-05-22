import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
  size?: 'sm' | 'md' | 'lg'
}

const Tag = ({ text, size = 'md' }: Props) => {
  const sizeClassName = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-md'
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className={`text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 font-medium uppercase ${sizeClassName}`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
