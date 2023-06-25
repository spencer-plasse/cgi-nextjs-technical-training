import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CGI - NextJS Technical Training - Spencer Plasse</title>
        <meta charSet='utf-8' />
        <meta name="description"
          content="Project developed as part of completing the CGI NextJS Technical Training" />
      </Head>

      <main className={styles.main}>
        <p>
          Placeholder content until page is developed!
        </p>
      </main>

      <footer className={styles.footer}>
        <span>
          This web application was developed in 2022 with NextJS, React, TypeScript, and Tailwind CSS
          to complete the CGI NextJS Technical Training.
        </span>
      </footer>
    </div>
  )
}
