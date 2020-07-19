import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import theme from '../components/styles/theme'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* PWA primary color */}
          <meta
            name='Green-Light Orange-Dark'
            content={theme.palette.primary.main}
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:200,300,400,500&display=swap'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;700&display=swap'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Calistoga&display=swap'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js"></script>
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  }
}

