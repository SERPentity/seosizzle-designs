import React from 'react';
import { PageContextProvider } from '../renderer/usePageContext';
import Index from './Index';

export const Page = () => {
  return (
    <PageContextProvider pageContext={{}}>
      <Index />
    </PageContextProvider>
  );
};