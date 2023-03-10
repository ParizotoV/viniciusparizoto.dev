import type { AppProps } from 'next/app';
import React from 'react';
import '../styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <style jsx={true} global={true}>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
        `}
      </style>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
