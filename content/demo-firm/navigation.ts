// Contenuti dimostrativi fittizi per un immaginario "Studio Notarile Esempio".
// Sostituire tutti i valori di questo file con i dati reali dello studio.

import type { Navigation } from '../schemas';

export const navigation: Navigation = {
  header: {
    items: [
      { kind: 'link', label: 'Studio', href: '/studio' },
      { kind: 'link', label: 'Servizi', href: '/servizi' },
      { kind: 'link', label: 'Professionisti', href: '/professionisti' },
      { kind: 'link', label: 'Insights', href: '/insights' },
    ],
    cta: { kind: 'link', label: 'Contatti', href: '/contatti' },
  },
  footer: {
    columns: [
      {
        title: 'Esplora',
        items: [
          { kind: 'link', label: 'Studio', href: '/studio' },
          { kind: 'link', label: 'Servizi', href: '/servizi' },
          { kind: 'link', label: 'Professionisti', href: '/professionisti' },
          { kind: 'link', label: 'Insights', href: '/insights' },
        ],
      },
    ],
    legalLinks: [
      { kind: 'link', label: 'Privacy policy', href: '/privacy' },
      { kind: 'link', label: 'Cookie policy', href: '/cookie' },
    ],
  },
};
