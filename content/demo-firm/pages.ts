// Contenuti dimostrativi fittizi per un immaginario "Studio Notarile Esempio".
// Sostituire tutti i valori di questo file con i dati reali dello studio.

import type { SitePages } from '../schemas';

export const pages: SitePages = {
  ctaBand: {
    title: 'Hai un atto da predisporre?',
    body: 'Raccontaci la tua esigenza: tempi, documentazione e costi chiari dal primo contatto.',
    cta: { label: 'Contatti', href: '/contatti' },
  },
  home: {
    hero: {
      title: 'Un notaio vicino, per decisioni che contano.',
      subtitle:
        'Immobili, impresa, famiglia: accompagniamo ogni passaggio con chiarezza, tempi certi e parole che si capiscono.',
      primaryCta: { label: 'Servizi', href: '/servizi' },
      secondaryCta: { label: 'Contatti', href: '/contatti' },
      image: {
        src: '/images/demo-firm/photo-1.svg',
        alt: 'Dettaglio dimostrativo degli ambienti dello studio',
        width: 800,
        height: 1000,
      },
    },
    servicesTeaser: {
      title: 'Di cosa ci occupiamo',
      intro:
        'Attività immobiliari, societarie e familiari, con un percorso chiaro dalla prima consulenza agli adempimenti finali.',
      cta: { label: 'Vedi tutti i servizi', href: '/servizi' },
    },
    studioTeaser: {
      title: 'Uno studio che spiega, oltre che autenticare',
      body: `Da oltre venticinque anni accompagniamo famiglie e imprese nelle operazioni più importanti. Ogni atto viene preparato e commentato insieme al cliente.`,
      cta: { label: 'Lo studio', href: '/studio' },
      image: {
        src: '/images/demo-firm/photo-2.svg',
        alt: 'Interno dimostrativo dello studio',
        width: 1200,
        height: 900,
      },
      note: 'Dal 1998',
    },
    method: {
      title: 'Il metodo',
      items: [
        {
          title: 'Ascolto',
          description:
            'Un primo incontro per capire obiettivi, tempi e documentazione necessaria.',
        },
        {
          title: 'Istruttoria',
          description:
            'Verifiche accurate su documenti, persone e immobili, con riscontro continuo.',
        },
        {
          title: 'Stipula e adempimenti',
          description:
            'Atto commentato insieme alle parti e formalità seguite fino alla consegna.',
        },
      ],
    },
    teamTeaser: {
      title: 'Le persone',
      intro:
        'Un team di professionisti che segue ogni pratica in modo diretto, senza passaggi inutili.',
      cta: { label: 'Professionisti', href: '/professionisti' },
    },
    insightsTeaser: {
      title: 'Aggiornamenti',
      intro:
        'Guide pratiche e aggiornamenti per orientarsi tra atti, scadenze e adempimenti.',
      cta: { label: 'Tutti gli articoli', href: '/insights' },
    },
  },
  studio: {
    hero: {
      eyebrow: 'Lo Studio',
      title: 'Uno studio al servizio di chi compie scelte importanti',
      subtitle:
        'Una tradizione notarile che parla il linguaggio di oggi, al servizio di famiglie e imprese.',
    },
    story: `## Una storia di territorio

Lo studio nasce nel 1998 dalla volontà di offrire un servizio notarile presente sul territorio e capace di stare al passo con i cambiamenti economici e sociali. Nel tempo si è specializzato nelle operazioni immobiliari, nelle operazioni societarie e nella pianificazione del patrimonio familiare.

## Come lavoriamo

Ogni pratica ha un referente preciso e un calendario condiviso con il cliente. La documentazione viene raccolta in modo ordinato, le bozze degli atti sono sempre disponibili per la lettura prima della stipula e i costi sono dichiarati in anticipo, senza sorprese.

## Per famiglie e imprese

Dalla prima casa al passaggio generazionale di un'impresa, lo studio affronta ogni operazione con la stessa attenzione: capire l'obiettivo del cliente e trovare lo strumento giusto per raggiungerlo.`,
    timeline: [
      {
        year: '1998',
        title: 'La fondazione',
        description:
          'Lo studio apre con un’attività dedicata alle operazioni immobiliari e familiari.',
      },
      {
        year: '2010',
        title: 'La specializzazione societaria',
        description:
          'Entra in studio una seconda professionalità dedicata al diritto societario.',
      },
      {
        year: '2022',
        title: 'La nuova sede',
        description:
          'Lo studio si trasferisce in una sede più ampia, con sale riunioni accessibili e archivio digitale.',
      },
    ],
    principles: {
      title: 'Il nostro impegno',
      items: [
        {
          title: 'Chiarezza',
          description:
            'Ogni atto viene spiegato prima di essere firmato, con parole comprensibili e tempi dichiarati.',
        },
        {
          title: 'Certeza',
          description:
            'Istruttorie accurate e adempimenti seguiti fino in fondo, per una tutela che dura nel tempo.',
        },
        {
          title: 'Vicinanza',
          description:
            'Un referente diretto per ogni pratica e una segreteria sempre raggiungibile.',
        },
      ],
    },
    sede: {
      image: {
        src: '/images/demo-firm/photo-3.svg',
        alt: 'Facciata dimostrativa della sede dello studio',
        width: 1680,
        height: 720,
      },
      caption: 'La sede dello studio',
    },
  },
  servicesIndex: {
    hero: {
      eyebrow: 'Servizi',
      title: 'Servizi notarili per famiglie e imprese',
      subtitle:
        'Le attività dello studio organizzate per area: immobiliare, impresa e società, famiglia e successioni.',
    },
  },
  teamIndex: {
    hero: {
      eyebrow: 'Professionisti',
      title: 'Le persone dello studio',
      subtitle:
        'Professionisti qualificati e raggiungibili, con ruoli e competenze dichiarati con trasparenza.',
    },
  },
  insightsIndex: {
    hero: {
      eyebrow: 'Insights',
      title: 'Guide e aggiornamenti',
      subtitle:
        'Guide pratiche e approfondimenti per orientarsi negli atti della vita quotidiana e d’impresa.',
    },
  },
  contact: {
    hero: {
      eyebrow: 'Contatti',
      title: 'Come contattarci',
      subtitle:
        'Siamo a disposizione per un primo confronto su documentazione, tempi e costi della tua operazione.',
    },
    mapPlaceholderAlt: 'Mappa dimostrativa della sede dello studio',
  },
  legal: [
    {
      slug: 'privacy',
      title: 'Informativa privacy',
      lastUpdated: '2026-01-15',
      body: `Questo testo è un segnaposto dimostrativo e non costituisce un'informativa privacy reale.

## Titolare del trattamento

Il titolare del trattamento è il soggetto indicato nei dati legali del sito. Per ogni richiesta relativa ai dati personali è possibile utilizzare i recapiti pubblicati nella pagina dei contatti.

## Dati raccolti e finalità

Il sito non prevede moduli di raccolta dati. I dati di contatto comunicati volontariamente via telefono, email o PEC sono utilizzati esclusivamente per rispondere alla richiesta.

## Diritti dell'interessato

L'interessato può chiedere accesso, rettifica, cancellazione o limitazione del trattamento dei propri dati scrivendo al titolare.`,
    },
    {
      slug: 'cookie',
      title: 'Informativa cookie',
      lastUpdated: '2026-01-15',
      body: `Questo testo è un segnaposto dimostrativo e non costituisce un'informativa cookie reale.

## Cookie tecnici

Il sito utilizza esclusivamente cookie tecnici necessari al funzionamento delle pagine. Non sono installati cookie di profilazione o di terze parti a fini pubblicitari.

## Gestione delle preferenze

È possibile limitare o disabilitare i cookie tramite le impostazioni del browser, mantenendo la piena fruibilità delle pagine del sito.`,
    },
  ],
};
