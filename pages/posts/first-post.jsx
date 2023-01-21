import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/Layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://unpkg.com/feather-icons"
        strategy="afterInteractive"
        onLoad={() => feather.replace()}
      />
      <h1>
        First Post <i data-feather="circle"></i>
      </h1>
    </Layout>
  )
}
