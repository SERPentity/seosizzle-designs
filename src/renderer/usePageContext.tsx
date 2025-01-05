import React, { useContext } from 'react';
import type { PageContext } from './types';

const Context = React.createContext<PageContext | undefined>(undefined);

export function PageContextProvider({ 
  pageContext,
  children
}: { 
  pageContext: PageContext;
  children: React.ReactNode;
}) {
  return (
    <Context.Provider value={pageContext}>
      {children}
    </Context.Provider>
  );
}

export function usePageContext() {
  const pageContext = useContext(Context);
  if (!pageContext) throw new Error('usePageContext() must be used within a PageContextProvider');
  return pageContext;
}