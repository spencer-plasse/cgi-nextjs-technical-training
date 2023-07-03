// Next.js
import type { AppProps } from 'next/app'

// Redux
import { Provider } from 'react-redux'
import { store } from '../utils/redux/store'

// Styles
import '../styles/globals.css'

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
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}