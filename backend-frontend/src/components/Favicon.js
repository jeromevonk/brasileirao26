const Favicon = () => {
  return (
    <>
      {/* Favicons */}
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />

      {/* PWA Manifest */}
      <link rel="manifest" href="/manifest.json" />

      {/* iOS / Apple */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Brasileirão" />

      {/* General */}
      <meta name="application-name" content="Brasileirão 2026" />
      <meta name="theme-color" content="#1a7c3e" />
      <meta name="msapplication-TileColor" content="#1a7c3e" />
    </>
  );
}

export default Favicon;
