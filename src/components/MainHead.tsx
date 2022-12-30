import React from "react";
import Head from "next/head";
import Script from "next/script";

interface MainHeadProps {
  title?: string;
}

const MainHead: React.FC<MainHeadProps> = ({ title }) => (
  <Head>
    <title>{`LaLolita | ${title}`}</title>
    <meta name="description" content="LaLolita Design Studio" />
    <meta httpEquiv="Content-Language" content="en" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
    <meta name="msapplication-TileColor" content="#00aba9" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
    />
    {/* Global site tag (gtag.js) - Google Analytics */}
    <Script
      async
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-JG9SND76YZ"
    />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JG9SND76YZ');
          `,
      }}
    />
  </Head>
);

export default MainHead;
