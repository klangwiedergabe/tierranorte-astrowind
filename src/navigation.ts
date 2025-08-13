import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Servicios',
      href: '#servicios',
    },
    {
      text: 'Proyectos',
      href: '#proyectos',
    },
    {
      text: 'Sobre Nosotros',
      href: '#sobre-nosotros',
    },
    {
      text: 'Contacto',
      href: '#contacto',
    },
  ],
  actions: [{ text: 'Cotización Gratuita', href: '#contacto', target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Remodelación de Cocinas', href: '#servicios' },
        { text: 'Renovación de Baños', href: '#servicios' },
        { text: 'Ampliaciones', href: '#servicios' },
        { text: 'Diseño Interior', href: '#servicios' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Sobre Nosotros', href: '#sobre-nosotros' },
        { text: 'Nuestros Proyectos', href: '#proyectos' },
        { text: 'Política de Privacidad', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/tierranorte' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/tierranorte' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/1234567890' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Tierra Norte. Todos los derechos reservados.
  `,
};
