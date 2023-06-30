import '../styles/globals.css'
import type { AppProps } from 'next/app'

/**
 * Entry point component to the web application. Renders the current
 * page with the given props.
 * 
 * @param Component Current page component to render
 * @param pageProps SSR/SSG props passed to the page
 * 
 * @returns Current page of the website
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}