import React from 'react';
import { PageContextProvider } from './usePageContext';

export function PageShell({ 
  children,
  pageContext
}: { 
  children: React.ReactNode;
  pageContext: any;
}) {
  return (
    <PageContextProvider pageContext={pageContext}>
      {children}
    </PageContextProvider>
  );
}