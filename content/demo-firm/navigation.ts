// Contenuti dimostrativi fittizi per un immaginario "Studio Notarile Esempio".
// Sostituire tutti i valori di questo file con i dati reali dello studio.

import type { Navigation } from '../schemas';

export const navigation: Navigation = {
  header: {
    items: [
      { kind: 'link', label: 'Home', href: '/' },
      { kind: 'link', label: 'Studio', href: '/studio' },
      {
        kind: 'dropdown',
        label: 'Servizi',
        items: [
          {
            kind: 'link',
            label: 'Tutti i servizi',
            href: '/servizi',
            description: 'Panoramica completa delle attività dello studio.',
          },
          { kind: 'link', label: 'Immobiliare', href: '/servizi#immobiliare' },
          {
            kind: 'link',
            label: 'Impresa e società',
            href: '/servizi#impresa',
          },
          {
            kind: 'link',
            label: 'Famiglia e successioni',
            href: '/servizi#famiglia',
          },
        ],
      },
      { kind: 'link', label: 'Professionisti', href: '/professionisti' },
      { kind: 'link', label: 'Insights', href: '/insights' },
    ],
    cta: { kind: 'link', label: 'Contattaci', href: '/contatti' },
  },
  footer: {
    columns: [
      {
        title: 'Servizi',
        items: [
          { kind: 'link', label: 'Tutti i servizi', href: '/servizi' },
          { kind: 'link', label: 'Immobiliare', href: '/servizi#immobiliare' },
          {
            kind: 'link',
            label: 'Impresa e società',
            href: '/servizi#impresa',
          },
          {
            kind: 'link',
            label: 'Famiglia e successioni',
            href: '/servizi#famiglia',
          },
        ],
      },
      {
        title: 'Studio',
        items: [
          { kind: 'link', label: 'Chi siamo', href: '/studio' },
          { kind: 'link', label: 'Professionisti', href: '/professionisti' },
          { kind: 'link', label: 'Insights', href: '/insights' },
          { kind: 'link', label: 'Contatti', href: '/contatti' },
        ],
      },
    ],
    legalLinks: [
      { kind: 'link', label: 'Privacy policy', href: '/privacy' },
      { kind: 'link', label: 'Cookie policy', href: '/cookie' },
    ],
  },
};
