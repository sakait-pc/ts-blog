import Head from 'next/head'
import styles from './Layout.module.css'
import Link from 'next/link'

export const siteTitle = 'TS Blog'

export default function Layout({children, title}) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <title>{title}</title>
          <meta name="google-site-verification" content="zsFHZW9_tN4dvXSoAl3R58SnozLziUOWv8fEnsr5_AY" />
        </Head>
        <header className={styles.header}>
          <div><Link href="/"><a className={styles.blog_title_link}>{siteTitle}</a></Link></div>
        </header>
        <div className={styles.contents}>
          <main className={styles.main}>{children}</main>
        </div>
        {/* <aside>TODO: This is aside</aside> */}
        <footer className={styles.footer}>©2021 <a href="https://github.com/sakait-pc" target="_blank" rel="noopener noreferrer">{siteTitle}</a></footer>
      </div>
    </>
  )
}