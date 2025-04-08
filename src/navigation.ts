import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
  ],
  // actions: [{ text: 'Contact', href: '#contact', target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Links',
      links: [
        { text: 'Home', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Your Name. All rights reserved.
  `,
};
