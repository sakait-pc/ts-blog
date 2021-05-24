import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout'
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

type Props = {
  allPostsData: {
    id: string
    title: string
    date: string
  }[]
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout title={siteTitle}>
      <h1 className={styles.description}>
        記事一覧
      </h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className={styles.list}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <div>
              <small>
                {date}
              </small>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
