import React from 'react';
import { PageContextProvider } from '../renderer/usePageContext';
import Index from './Index';
import type { PageContext } from '../renderer/types';

const pageContext: PageContext = {
  Page: () => <Index />,
  pageProps: {},
  urlPathname: '/',
  exports: {
    documentProps: {
      title: 'SEO Snafu | Expert SEO & Web Design Services',
      description: 'Transform your online presence with expert SEO services and stunning web design solutions.'
    }
  }
};

export const Page = () => {
  return (
    <PageContextProvider pageContext={pageContext}>
      <Index />
    </PageContextProvider>
  );
};