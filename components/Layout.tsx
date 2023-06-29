// NextJS
import Head from "next/head";

// Custom components
import { NavLink } from "./NavLink";

// Styles
import styles from "../styles/Home.module.css";

export default function Layout({children}: {children: React.ReactNode}){
  return (
    <div className={styles.container}>
      <Head>
        <title>CGI - NextJS Technical Training - Spencer Plasse</title>
        <meta charSet="utf-8" />
        <meta name="description"
          content="Project developed as part of completing the CGI NextJS Technical Training" />
      </Head>

      <header className={styles.header}>
        <nav className="space-x-10">
          <NavLink href="/">About Me</NavLink>
          <NavLink href="/spotify_api">API</NavLink>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <span>
          This web application was developed in 2023 with NextJS, React, TypeScript, and Tailwind CSS
          to complete the CGI NextJS Technical Training.
        </span>
      </footer>
    </div>
  )
}