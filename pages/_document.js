import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='robots' content='noodp' />
        <meta name='theme-color' content='#ffffff' />
        <meta property='og:locale' content='sr_RS' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary' />
        <meta
          name='twitter:description'
          content='Traktori, priključne mašine - Traktori i poljoprivredne mašine domaćih proizvođača IMT i IMR, Solis, Zetor, Čelmak kao i svetski poznatog Massey Fergusona. Prodaja priključnih mašina i servisiranje.'
        />
        <meta
          name='twitter:title'
          content='Jugometal Svilajnac - Traktori, priključne mašine, prodaja i servis.'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
