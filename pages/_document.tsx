import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html dir='ltr' lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
          media='all'
        />
        <link rel='stylesheet' media='all' type='text/css' href='/css/variables.css' />
        <link rel='stylesheet' media='all' type='text/css' href='/css/reset.css' />
        <link rel='stylesheet' media='all' type='text/css' href='/css/common-styles.css' />
        <link rel='stylesheet' media='all' type='text/css' href='/css/header.css' />
        <link rel='stylesheet' media='all' type='text/css' href='/css/footer.css' />
        <link rel='stylesheet' media='all' type='text/css' href='/css/home.css' />
        <link rel='stylesheet' media='all' type='text/css' href='/css/about.css' />
        <link rel='stylesheet' media='all' type='text/css' href='/css/work.css' />
        <link rel='stylesheet' media='all' type='text/css' href='/css/work-detail.css' />
        <link rel='stylesheet' media='all' type='text/css' href='/css/contact.css' />
        <link rel='stylesheet' media='all' type='text/css' href='/css/error.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
