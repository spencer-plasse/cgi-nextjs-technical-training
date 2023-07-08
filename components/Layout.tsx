// Next.js
import Head from "next/head";

// Custom components
import NavLink from "./NavLink";

// Styles
import styles from "../styles/Home.module.css";

/**
 * Wrapper for page components to add common metadata, navbar, and footer elements.
 * 
 * @param props Dictionary of component props
 * @param props.children Child components contained under this `Layout` component
 * @param props.centerVertically Optional boolean flag determining whether the main page contents should be vertically centered
 * 
 * @returns Wrapped `Layout` component around the `children` in props with metadeta, a navbar, and a footer.
 */
export default function Layout(props: {
  children: React.ReactNode,
  centerVertically?: boolean
}){
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

      <main className={(props.centerVertically ?? false) ? styles["main-align-center-vertically"] : styles.main}>
        {props.children}
      </main>

      <footer className={styles.footer}>
        <span>
          This web application was developed in 2023 with Next.js, React, Redux, TypeScript, and Tailwind CSS
          to complete the CGI NextJS Technical Training.
        </span>
      </footer>
    </div>
  )
}