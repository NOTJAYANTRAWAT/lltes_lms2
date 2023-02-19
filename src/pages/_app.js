import '../styles/globals.css'
import Script from "next/script"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://polyfill.io/v3/polyfill.min.js?features=es6" />
      <Script
        id="MathJax-script"
        strategy='beforeInteractive'
        async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
      />
      <Component {...pageProps} />
    </>
  )
  }