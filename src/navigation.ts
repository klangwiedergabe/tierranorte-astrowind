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
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/lexcosmo' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/humornegropo' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@humorgringopo' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Alex Plaza. All rights reserved.
  `,
};
