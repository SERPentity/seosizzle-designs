import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PageShell } from './PageShell';
import type { PageContextClient } from './types';
import App from '../App';

export async function render(pageContext: PageContextClient) {
  hydrateRoot(
    document.getElementById('root')!,
    <PageShell pageContext={pageContext}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PageShell>
  );
}