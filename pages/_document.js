import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" 
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
        crossorigin="anonymous" />
        {/* <link rel="icon" type="image/x-icon" href="imgs/image.png" /> */}
        {/* <title>Acme-Home</title> */}
      </Head>
      <body>
        <div className="container">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
