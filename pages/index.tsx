import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Russell Patrick Brown</title>
        <meta name="description" content="Harper, Coder, Psychic Medium, Author, Embodied TechnoWizard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        id="mcjs"
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],
            m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script",
            "https://chimpstatic.com/mcjs-connected/js/users/b1337ad19144b56ac4752f6ec/bd94fb4b98c2f0d8289ddf0e2.js");
          `
        }}
      />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Russell Patrick Brown
        </h1>

        <p className={styles.description}>
          Harper & Embodied Technowizard
        </p>

        <div className={styles.grid}>
          <a href="https://rustle.nyc/" className={styles.card}>
            <h2>Download Your Awakening &rarr;</h2>
            <p><b>Rustle.NYC</b> is meditation & movement mobile app to support relaxation, inspiration and spiritual development.</p>
          </a> 

          <a href="https://choreonavigation.org/" className={styles.card}>
            <h2>Choreonavigate Our Haunted Past &rarr;</h2>
            <p>Romani TechnoWizardry exorcises your body&apos;s possession by machines.</p>
          </a>

          {/* <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  )
}

export default Home
