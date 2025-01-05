import { PageContextProvider } from '../renderer/usePageContext';
import Index from './Index';
import type { PageContext } from '../renderer/types';
import { Helmet } from 'react-helmet';

const pageContext: PageContext = {
  Page: () => (
    <>
      <Helmet>
        <title>SEO Snafu | Expert SEO & Web Design Services</title>
        <meta 
          name="description" 
          content="Transform your online presence with expert SEO services and stunning web design solutions. Get data-driven strategies to boost your search rankings." 
        />
      </Helmet>
      <Index />
    </>
  ),
  pageProps: {},
  urlPathname: '/',
  exports: {
    documentProps: {
      title: 'SEO Snafu | Expert SEO & Web Design Services',
      description: 'Transform your online presence with expert SEO services and stunning web design solutions.'
    }
  }
};

export default pageContext;