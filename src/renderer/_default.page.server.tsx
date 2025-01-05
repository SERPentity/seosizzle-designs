import React from 'react';
import { renderToString } from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import type { PageContextServer } from './types';
import { StaticRouter } from 'react-router-dom/server';
import App from '../App';
import { PageShell } from './PageShell';

export async function render(pageContext: PageContextServer) {
  const { urlPathname } = pageContext;
  
  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <StaticRouter location={urlPathname || '/'}>
        <App />
      </StaticRouter>
    </PageShell>
  );

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="SEO Snafu - Expert SEO & Web Design Services. Transform your online presence with data-driven SEO strategies and stunning web design solutions." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://seosnafu.co.uk${urlPathname || ''}" />
        
        <!-- Open Graph Tags -->
        <meta property="og:title" content="SEO Snafu | SEO & Web Design Services" />
        <meta property="og:description" content="Transform your online presence with expert SEO services and stunning web design solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seosnafu.co.uk${urlPathname || ''}" />
        <meta property="og:image" content="https://seosnafu.co.uk/og-image.png" />
        
        <!-- Twitter Card Tags -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO Snafu | SEO & Web Design Services" />
        <meta name="twitter:description" content="Transform your online presence with expert SEO services and stunning web design solutions." />
        <meta name="twitter:image" content="https://seosnafu.co.uk/og-image.png" />
        
        <title>SEO Snafu | SEO & Web Design Services</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}