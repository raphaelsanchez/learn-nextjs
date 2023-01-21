import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'


export default function SecondPost() {
  return (
    <Layout>
      <Head>
        <title>Second Post</title>
      </Head>
      <h1>
        Second Post <i data-feather="circle"></i>
      </h1>
    </Layout>
  )
}
