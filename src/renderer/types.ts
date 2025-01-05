export type PageContextServer = {
  Page: () => React.ReactElement;
  pageProps?: any;
  urlPathname?: string;
  exports?: {
    documentProps?: {
      title?: string;
      description?: string;
    };
  };
};

export type PageContextClient = {
  Page: () => React.ReactElement;
  pageProps?: any;
  urlPathname?: string;
  exports?: {
    documentProps?: {
      title?: string;
      description?: string;
    };
  };
};

export type PageContext = PageContextClient | PageContextServer;