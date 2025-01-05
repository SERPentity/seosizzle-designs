export const mainNavItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Case Studies",
    path: "/case-studies",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const serviceMenuItems = [
  {
    title: "SEO Services",
    items: [
      {
        name: "Technical SEO",
        description: "Optimize your website's technical foundation",
        path: "/seo/technical-seo",
      },
      {
        name: "Local SEO",
        description: "Dominate local search results",
        path: "/seo/local-seo",
      },
      {
        name: "Content Strategy",
        description: "Create content that ranks and converts",
        path: "/seo/content-strategy",
      },
      {
        name: "SEO Audit",
        description: "Comprehensive website analysis",
        path: "/seo/audit",
      },
      {
        name: "Competitor Analysis",
        description: "Stay ahead of your competition",
        path: "/seo/competitor-analysis",
      },
      {
        name: "Link Building",
        description: "Build authority with quality backlinks",
        path: "/seo/link-building",
      },
    ],
  },
  {
    title: "Web Design",
    items: [
      {
        name: "Web Design",
        description: "Custom website design solutions",
        path: "/web-design",
      },
      {
        name: "Responsive Design",
        description: "Mobile-friendly website development",
        path: "/web-design/responsive-design",
      },
      {
        name: "UX Design",
        description: "User experience optimization",
        path: "/web-design/ux-design",
      },
      {
        name: "Ecommerce Design",
        description: "Online store development",
        path: "/web-design/ecommerce",
      },
      {
        name: "Service Business",
        description: "Websites for service providers",
        path: "/web-design/service-business",
      },
    ],
  },
];

// Extract services from serviceMenuItems after its definition
export const seoServices = serviceMenuItems[0].items;
export const webDesignServices = serviceMenuItems[1].items;