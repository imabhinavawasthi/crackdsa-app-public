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
      text: 'Bootcamps',
      href: 'https://events.crackdsa.com',//getBlogPermalink()
    },
  ],
};
  
export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'Learn (Coming Soon)', href: '#' },
        { text: 'Discuss', href: 'https://beta.discuss.crackdsa.com/' },
        { text: 'Notes', href: 'https://notes.crackdsa.com/' },
        { text: 'Events', href: 'https://events.crackdsa.com/' },
        { text: 'Certification', href: 'https://certificate.crackdsa.com/' },
        // { text: 'Pricing', href: '#' },
        // { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Features', href: '#features' },
        { text: 'Courses', href: '#courses' },
        { text: 'Bootcamps', href: '#events' },
        { text: 'FAQs', href: '#faqs' },
        // { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Whatsapp Support', href: 'https://wa.me/message/TPN76XLWVOWDB1' },
        { text: 'Linkedin Page', href: 'https://www.linkedin.com/company/crackdsa/' },
        { text: 'Email Support', href: 'mailto:helloss@crackdsa.com' },
        // { text: 'Skills', href: '#' },
        // { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        // { text: 'Blog', href: '#' },
        // { text: 'Careers', href: '#' },
        { text: 'Internships (Coming Soon)', href: '#' },
        // { text: 'Inclusion', href: '#' },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms & Conditions', href: getPermalink('/terms') },
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
