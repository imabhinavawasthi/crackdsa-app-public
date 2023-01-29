import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Discuss',
      href: "https://beta.discuss.crackdsa.com",
      // links: [
      //   {
      //     text: 'Sass',
      //     href: getPermalink('/course/saas'),
      //   },
      //   {
      //     text: 'Startup',
      //     href: getPermalink('/course/startup'),
      //   },
      //   {
      //     text: 'Mobile App',
      //     href: getPermalink('/course/mobile-app'),
      //   },
      // ],
    },
    {
      text: 'Explore',
      links: [
        {
          text: 'Features',
          href: '#features',
        },
        {
          text: 'FAQs',
          href: '#faqs',
        },
        {
          text: 'Events',
          href: '#events',
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Courses',
      href: '#courses',
    },
    {
      text: 'Notes App',
      href: 'https://notes.crackdsa.com',//getBlogPermalink()
    },
  ],
};
  
export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@AbhinavAwasthi' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/crackdsa/' },
    { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/message/TPN76XLWVOWDB1' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss') },
    { ariaLabel: 'Gmail', icon: 'tabler:brand-gmail', href: 'mailto:helloss@crackdsa.com' },
  ],
  footNote: `
    Made with ❤️ by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://crackdsa.com/"> crackDSA</a> · All rights reserved.
  `,
};
