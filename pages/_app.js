import Nav from '@/src/components/layout/Nav'
import '/src/styles/style.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}
