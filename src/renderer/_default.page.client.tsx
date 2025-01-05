import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { PageShell } from './PageShell';
import type { PageContextClient } from './types';

export async function render(pageContext: PageContextClient) {
  const { Page } = pageContext;
  hydrateRoot(
    document.getElementById('root')!,
    <PageShell pageContext={pageContext}>
      <Page />
    </PageShell>
  );
}