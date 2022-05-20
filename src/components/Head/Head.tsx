import React from 'react';
import { Helmet } from 'react-helmet';

const SiteHead = (): JSX.Element => {
  return (
    <Helmet>
      <link rel="icon" href="/assets/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta charSet="utf-8" />
      <link rel="apple-touch-icon" href="/assets/logo192.png" />
      <link rel="manifest" href="/assets/manifest.json" />

      {/* <!-- HTML Meta Tags --> */}
      <title>Pierre Du Toit</title>
      <meta
        name="description"
        content="Professional Software Engineer | Cloud Architect"
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://www.pierredutoit.me/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Pierre Du Toit" />
      <meta
        property="og:description"
        content="Professional Software Engineer | Cloud Architect"
      />
      <meta
        property="og:image"
        content="https://pierredutoit.me/assets/Launch.png"
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="" />
      <meta property="twitter:url" content="https://www.pierredutoit.me/" />
      <meta name="twitter:title" content="Pierre Du Toit" />
      <meta
        name="twitter:description"
        content="Professional Software Engineer | Cloud Architect"
      />
      <meta
        name="twitter:image"
        content="https://pierredutoit.me/assets/Launch.png"
      />
    </Helmet>
  );
};

export default SiteHead;
