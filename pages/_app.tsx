import type { AppProps } from "next/app";

import "../styles.css"

function CustomApp({ Component, pageProps }: AppProps) {
  return (
          <Component {...pageProps} />
  );
}

export default CustomApp;
