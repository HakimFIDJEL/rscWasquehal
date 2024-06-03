import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script async src='/admin/js/main.min.js'></script>
      </body>
    </Html>
  )
}