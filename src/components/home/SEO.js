import Head from 'next/head';

const SEO = () => (
  <Head>
    <title>NextWind</title>
    <meta
      content="A flexible landing page + blog template"
      name="description"
    ></meta>
    <meta
      content="https://serverless.page/img/serverless-saas.png"
      property="og:image"
    ></meta>
    <meta content="https://serverless.page" property="og:url"></meta>
    <meta content="website" property="og:type"></meta>
    <meta content="NextWind" property="og:title"></meta>
    <meta
      content="A flexible landing page + blog template"
      property="og:description"
    ></meta>

    {/* Twitter */}
    <meta content="NextWind" name="twitter:title"></meta>
    <meta
      content="A flexible landing page + blog template"
      name="twitter:description"
    ></meta>
    <meta
      content="https://serverless.page/img/serverless-saas.png"
      name="twitter:image"
    ></meta>
    <meta content="summary_large_image" name="twitter:card"></meta>
    <meta content="Serverless SaaS" name="twitter:image:alt"></meta>

    {/* Favicon */}
    <link
      href="/favicon/apple-touch-icon.png"
      rel="apple-touch-icon"
      sizes="180x180"
    />
    <link
      href="/favicon/favicon-32x32.png"
      rel="icon"
      sizes="32x32"
      type="image/png"
    />
    <link
      href="/favicon/favicon-16x16.png"
      rel="icon"
      sizes="16x16"
      type="image/png"
    />
    <link href="/favicon/site.webmanifest" rel="manifest" />
    <link
      color="#5bbad5"
      href="/favicon/safari-pinned-tab.svg"
      rel="mask-icon"
    />
    <meta content="#2b5797" name="msapplication-TileColor"></meta>
    <meta content="#ffffff" name="theme-color"></meta>

    {/* Google Analytics */}
    {/* <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=<YOUR_GA_ID_HERE>"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '<YOUR_GA_ID_HERE>');
          `,
      }}
    /> */}
  </Head>
);

export default SEO;
