import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="FileBox" />
        <meta name="description" content="PWA application with Next 13" />
        <meta name="generator" content="Next.js" />
        <meta
          name="keywords"
          content="nextjs, nextjs13, next13, pwa, next-pwa"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#fff"
        />
        <link rel="apple-touch-icon" href="/icons/icon-128x128.png" />
        <link rel="icon" href="/icons/icon-128x128.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
