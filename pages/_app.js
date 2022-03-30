import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { MotionConfig } from "framer-motion";

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

  return (
    <MotionConfig reducedMotion="user">
      <Component {...pageProps} />
    </MotionConfig>
  );
}

export default MyApp
