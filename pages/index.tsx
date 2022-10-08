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
      <p>TS Blogを閲覧いただき誠にありがとうございます。当ブログは新ブログに移転しました。</p>
      <p>リダイレクトされない場合は、お手数ですが下記リンクよりお進みください。</p>
      <p>
        <a href='https://sakait-blog.web.app/' target="_blank" rel="noopener noreferrer">https://sakait-blog.web.app/</a>
      </p>
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
