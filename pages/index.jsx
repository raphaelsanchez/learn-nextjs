import Head from 'next/head'
import Link from 'next/link'
import Alert from '../components/Alert'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="about-me">
        <p>
          Designer de formation avec une solide expérience de développeur
          front-end, je sais être un lien efficace entre ces deux univers et
          faciliter les échanges. Sénior en développement d’interface, je me
          forme actuellement sur les frameworks React et VueJS sur lequels je me
          considère encore junior.
        </p>
        <p>
          Expert et passionné du CSS, soucieux du respect des standards du web
          et de l’accessiblité, je cherche toujours à parfaire mes connaissances
          pour concevoir des interfaces efficaces, performantes et maintenables.
        </p>
        <p>
          Sensible aux enjeux environnementaux, à la place et l’impact du
          numérique dans notre monde, je cherche aujourd’hui à donner du sens à
          mon travail en apportant mon expertise à une société consciente de la
          nécessité d’entamer une transition numérique responsable.
        </p>
      </section>

      <section id="last-posts">
        <h2 className={utilStyles.headingLg}>Derniers articles</h2>
        <Alert type="info">C'est contenu sont à convertir en markdown !</Alert>
        <ul>
          <li><Link href="/posts/first-post">First post</Link></li>
          <li><Link href="/posts/second-post">Second post</Link></li>
        </ul>
      </section>
    </Layout>
  )
}
