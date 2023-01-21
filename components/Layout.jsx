import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import styles from './Layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Raphael Sanchez'
export const siteTitle = 'Learn Next.js'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>

      <header className={styles.header} role="banner">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={styles.heading}>
              <span className={utilStyles.heading2Xl}>{name}</span>
              <small className={utilStyles.headingLg}>
                Developer Front-end
              </small>
            </h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={100}
                width={100}
                alt={name}
              />
            </Link>
            <div className={styles.heading}>
              <span className={utilStyles.heading2Xl}>{name}</span>
              <small className={utilStyles.headingLg}>
                Developer Front-end
              </small>
            </div>
          </>
        )}
      </header>

      <main id="main-content" className={styles.main}>
        {children}

        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </main>

      <footer className={styles.footer} role="contentinfo">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.footerLogo} />
        </a>
      </footer>
    </div>
  )
}
