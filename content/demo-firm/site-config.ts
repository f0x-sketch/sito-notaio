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
        base: '#1B4D8F',
        strong: '#123866',
        tint: '#EDF2F8',
        onBase: '#FFFFFF',
      },
      secondary: {
        base: '#14171A',
        onBase: '#FFFFFF',
      },
      accent: {
        base: '#1B4D8F',
        onBase: '#FFFFFF',
      },
      neutral: {
        surface: '#FAFAFA',
        surfaceRaised: '#FFFFFF',
        surfaceInverse: '#0E1216',
        text: '#14171A',
        textMuted: '#5A6270',
        border: '#E6E9EE',
        borderStrong: '#7B838F',
        textInverse: '#FAFAFA',
        textInverseMuted: '#98A1AD',
      },
      focus: '#1B4D8F',
    },
    typography: {
      heading: {
        family: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      },
      body: {
        family: "'Inter', 'Helvetica Neue', Arial, sans-serif",
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
