// import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@200;300;400;500;700&family=Sarala:wght@700&display=swap" rel="stylesheet"/>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAo_LNWaVoRxkYafsvYgKewbJXY1ElP0Vs&libraries=places"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAo_LNWaVoRxkYafsvYgKewbJXY1ElP0Vs&libraries=places" strategy='beforeInteractive'/>
      </Html>
    )
  }
}

export default MyDocument

