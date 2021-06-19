import Layout from '../../components/Layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Link from 'next/link'
import styles from '../../styles/Post.module.css'

export async function getStaticPaths() {
  const paths = getAllPostIds().map(slug => ({
    params: {
      slug
    }
  }))
  return {paths, fallback: false}
}

export async function getStaticProps({params}) {
  const postData = await getPostData(params.slug.join('/'))
  return {
    props: {
      ...postData
    }
  }
}

export default function Post(postData) {
  return (
    <Layout title={postData.title}>
      <article>
        <header>
          <h1 className={styles.entry_title}>
            <Link href={`/posts/${postData.slug}`}>
              <a className={styles.entry_title_link}>{postData.title}</a>
            </Link>
          </h1>
          <div>
            <div><small>Slug: {postData.slug}</small></div>
            <div><small>Date: {postData.date}</small></div>
          </div>
        </header>
        <div className={styles.entry_body} dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
      </article>
    </Layout>
  )
}