import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <meta charSet="UTF-8"></meta>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
