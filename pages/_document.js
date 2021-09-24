import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Full stack Developer and DevOps" />
          <meta name="keyword" content="portfolio, software developer" />
          <meta
            property="og:title"
            content="Kwaku Adusei Okyere | Sofware Developer + DevOps"
          />

          <meta
            property="og:image"
            content="https://cloud-object-storage-3u-cos-standard-o1c.s3.eu-de.cloud-object-storage.appdomain.cloud/logo.png"
          />
          <meta property="og:type" content="website" />
          {/* twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Kwaku Adusei Okyere | Software Developer"
          />
          <meta
            name="twitter:description"
            content="Full stack Developer and DevOps"
          />
          <meta
            name="twitter:image"
            content="https://cloud-object-storage-3u-cos-standard-o1c.s3.eu-de.cloud-object-storage.appdomain.cloud/logo.png"
          />
          {/* fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          data-bs-spy="scroll"
          data-bs-target="#navspy"
          data-bs-offset="100"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
