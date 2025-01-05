export type PageContextServer = {
  Page: () => React.ReactElement;
  pageProps?: any;
  urlPathname?: string;
};

export type PageContextClient = {
  Page: () => React.ReactElement;
  pageProps?: any;
  urlPathname?: string;
};