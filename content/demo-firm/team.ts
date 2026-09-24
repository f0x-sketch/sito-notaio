// Contenuti dimostrativi fittizi per un immaginario "Studio Notarile Esempio".
// Sostituire tutti i valori di questo file con i dati reali dello studio.

import type { TeamMember } from '../schemas';

export const team: TeamMember[] = [
  {
    slug: 'elena-fittizia',
    name: 'Elena Fittizia',
    title: 'Notaio',
    role: 'Fondatrice',
    bio: `Notaio dal 1998, ha fondato lo studio con l'idea di un servizio notarile capace di spiegare, oltre che di autenticare. Segue in particolare le operazioni immobiliari complesse e la pianificazione del patrimonio familiare.

Fa parte di commissioni culturali del distretto e tiene incontri nelle scuole sulla certezza del diritto nella vita quotidiana.`,
    photo: {
      src: '/images/demo-firm/person-1.svg',
      alt: 'Ritratto dimostrativo di Elena Fittizia',
      width: 800,
      height: 1000,
    },
    email: 'elena.fittizia@studionotarileesempio.example',
    specializations: ['Diritto immobiliare', 'Pianificazione patrimoniale'],
    order: 1,
    seo: {
      title: 'Elena Fittizia, Notaio',
      description:
        'Profilo dimostrativo di Elena Fittizia, notaio fondatrice dello studio.',
    },
  },
  {
    slug: 'marco-imaginario',
    name: 'Marco Immaginario',
    title: 'Notaio',
    role: 'Socio',
    bio: `Si occupa di diritto societario e di operazioni straordinarie per imprese di piccole e medie dimensioni. Ha maturato esperienza in acquisizioni, riorganizzazioni societarie e passaggi generazionali dell'impresa.

Cura personalmente la fase istruttoria di ogni pratica, con tempi di risposta sempre dichiarati in anticipo.`,
    photo: {
      src: '/images/demo-firm/person-2.svg',
      alt: 'Ritratto dimostrativo di Marco Immaginario',
      width: 800,
      height: 1000,
    },
    email: 'marco.imaginario@studionotarileesempio.example',
    specializations: ['Diritto societario', 'Operazioni straordinarie'],
    order: 2,
  },
  {
    slug: 'sofia-provvisoria',
    name: 'Sofia Provvisoria',
    title: 'Responsabile di segreteria',
    role: 'Segreteria e protocollo',
    bio: `Coordina la segreteria, il protocollo e gli appuntamenti in studio. È il primo riferimento per i clienti che fissano una stipula o chiedono lo stato di una pratica.

Da anni si occupa dell'archivio digitale dello studio e della gestione documentale.`,
    photo: {
      src: '/images/demo-firm/person-3.svg',
      alt: 'Ritratto dimostrativo di Sofia Provvisoria',
      width: 800,
      height: 1000,
    },
    specializations: ['Protocollo', 'Gestione documentale'],
    order: 3,
  },
  {
    slug: 'luca-segnaposto',
    name: 'Luca Segnaposto',
    title: 'Praticante notarile',
    role: 'Praticantato',
    bio: `Completa il praticantato notarile seguendo le fasi istruttorie delle pratiche immobiliari e societarie. Si occupa della raccolta delle visure e del primo contatto con i clienti in vista della stipula.

Laureato con una tesi sulle compravendite immobiliari, collabora anche alla cura degli insights pubblicati dallo studio.`,
    photo: {
      src: '/images/demo-firm/person-4.svg',
      alt: 'Ritratto dimostrativo di Luca Segnaposto',
      width: 800,
      height: 1000,
    },
    email: 'luca.segnaposto@studionotarileesempio.example',
    specializations: ['Visure e istruttoria'],
    order: 4,
  },
];
