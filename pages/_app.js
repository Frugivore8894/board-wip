import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  function fixHeight() {
    document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
  }

  useEffect(() => {
    fixHeight();

    window.addEventListener("resize", fixHeight);
    return () => { window.removeEventListener("resize", fixHeight); }
  })
  return <Component {...pageProps} />
}

export default MyApp
