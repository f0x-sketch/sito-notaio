// Contenuti dimostrativi fittizi per un immaginario "Studio Notarile Esempio".
// Sostituire tutti i valori di questo file con i dati reali dello studio.

import type { SiteConfig } from '../schemas';

export const siteConfig: SiteConfig = {
  identity: {
    name: 'Studio Notarile Esempio',
    legalName:
      'Studio Notarile Esempio S.n.c. di Fittizia Elena e Immaginario Marco',
    tagline: 'Certeza e chiarezza per gli atti più importanti.',
    description:
      'Uno studio notarile dimostrativo che accompagna famiglie e imprese nelle operazioni immobiliari, societarie e successorie, con linguaggio semplice e tempi certi.',
    initials: 'SN',
    foundingYear: 1998,
  },
  branding: {
    logo: {
      light: {
        src: '/images/demo-firm/logo-light.svg',
        alt: 'Studio Notarile Esempio',
        width: 240,
        height: 64,
      },
      dark: {
        src: '/images/demo-firm/logo-dark.svg',
        alt: 'Studio Notarile Esempio',
        width: 240,
        height: 64,
      },
    },
    favicon: {
      src: '/images/demo-firm/favicon.svg',
      width: 32,
      height: 32,
    },
    ogImage: {
      src: '/images/demo-firm/og-image.svg',
      alt: 'Studio Notarile Esempio',
      width: 1200,
      height: 630,
    },
    colors: {
      primary: {
        base: '#1F4B47',
        strong: '#14332F',
        tint: '#E6EDEC',
        onBase: '#FBFAF7',
      },
      secondary: {
        base: '#334E68',
        onBase: '#FFFFFF',
      },
      accent: {
        base: '#A67C3D',
        onBase: '#FFFFFF',
      },
      neutral: {
        surface: '#FAF8F4',
        surfaceRaised: '#FFFEFA',
        surfaceInverse: '#14332F',
        text: '#232220',
        textMuted: '#5C5A54',
        border: '#DDD7CC',
        borderStrong: '#B9B3A6',
        textInverse: '#FAF8F4',
        textInverseMuted: '#A8B3AE',
      },
      focus: '#A67C3D',
    },
    typography: {
      heading: {
        family: "Georgia, 'Times New Roman', serif",
        weights: [400, 700],
      },
      body: {
        family: "'Helvetica Neue', Arial, sans-serif",
        weights: [400, 600],
      },
      baseSizePx: 16,
    },
  },
  contact: {
    phone: '+39 000 000 0000',
    email: 'info@studionotarileesempio.example',
    pec: 'protocollo@pec.studionotarileesempio.example',
    address: {
      street: "Via dell'Archivio 12",
      city: 'Città di Prova',
      zip: '00000',
      province: 'XX',
      country: 'Italia',
    },
    geo: {
      lat: 45.0,
      lng: 9.0,
    },
    mapUrl: 'https://www.openstreetmap.org/?mlat=45.0&mlon=9.0#map=14/45.0/9.0',
    officeHours: [
      { days: 'lunedì – venerdì', hours: '09:00 – 13:00' },
      {
        days: 'lunedì, mercoledì, venerdì',
        hours: '15:00 – 17:30',
        note: 'Su appuntamento',
      },
    ],
  },
  social: [
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/studio-notarile-esempio',
    },
    {
      platform: 'facebook',
      label: 'Facebook',
      href: 'https://www.facebook.com/studionotarileesempio',
    },
  ],
  seo: {
    titleTemplate: '%s | Studio Notarile Esempio',
    defaultTitle: 'Studio Notarile Esempio | Notaio a Città di Prova',
    defaultDescription:
      'Studio notarile dimostrativo a Città di Prova: compravendite, mutui, società, successioni e accordi patrimoniali.',
    ogImage: {
      src: '/images/demo-firm/og-image.svg',
      alt: 'Studio Notarile Esempio',
      width: 1200,
      height: 630,
    },
    siteUrl: 'https://studionotarileesempio.example',
    twitterHandle: '@studionotarileesempio',
  },
  legal: {
    vatNumber: '00000000000',
    privacyPolicyHref: '/privacy',
    cookiePolicyHref: '/cookie',
  },
};
