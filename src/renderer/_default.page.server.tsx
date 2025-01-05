import React from 'react';
import { renderToString } from 'react-dom/server';
import { PageShell } from './PageShell';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import type { PageContextServer } from './types';

export async function render(pageContext: PageContextServer) {
  const { Page } = pageContext;
  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page />
    </PageShell>
  );

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SEO Snafu | SEO & Web Design Services</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}