// Contenuti dimostrativi fittizi per un immaginario "Studio Notarile Esempio".
// Sostituire tutti i valori di questo file con i dati reali dello studio.

import type { SitePages } from '../schemas';

export const pages: SitePages = {
  home: {
    hero: {
      title: 'Un notaio vicino, per decisioni che contano.',
      subtitle:
        'Immobili, impresa, famiglia: accompagniamo ogni passaggio con chiarezza, tempi certi e un linguaggio che si capisce.',
      primaryCta: { label: 'Scopri i servizi', href: '/servizi' },
      secondaryCta: { label: 'Conosci lo studio', href: '/studio' },
      image: {
        src: '/images/demo-firm/cover-1.svg',
        alt: 'Illustrazione dimostrativa dello studio',
        width: 1200,
        height: 630,
      },
    },
    servicesTeaser: {
      title: 'I nostri servizi',
      intro:
        'Attività immobiliari, societarie e familiari: ogni pratica segue un percorso chiaro, dalla prima consulenza agli adempimenti finali.',
    },
    studioTeaser: {
      title: 'Uno studio che spiega, oltre che autenticare',
      body: `Da oltre venticinque anni lo studio accompagna famiglie e imprese nelle operazioni più importanti. Crediamo che la certezza del diritto passi anche dalla chiarezza delle parole: per questo ogni atto viene preparato e commentato insieme al cliente.`,
      cta: { label: 'La nostra storia', href: '/studio' },
    },
    teamTeaser: {
      title: 'Le persone',
      intro:
        'Un team di professionisti che segue ogni pratica in modo diretto, senza passaggi inutili.',
      cta: { label: 'Professionisti', href: '/professionisti' },
    },
    insightsTeaser: {
      title: 'Insights',
      intro:
        'Guide pratiche e aggiornamenti per orientarsi tra atti, scadenze e adempimenti.',
      cta: { label: 'Tutti gli articoli', href: '/insights' },
    },
    ctaBand: {
      title: 'Hai un atto da predisporre?',
      body: 'Raccontaci la tua esigenza: ti indicheremo documentazione, tempi e costi fin dal primo contatto.',
      cta: { label: 'Contattaci', href: '/contatti' },
    },
  },
  studio: {
    hero: {
      title: 'Lo studio',
      subtitle:
        'Una tradizione notarile che parla il linguaggio di oggi, al servizio di famiglie e imprese.',
    },
    story: `## Una storia di territorio

Lo studio nasce nel 1998 dalla volontà di offrire un servizio notarile presente sul territorio e capace di stare al passo con i cambiamenti economici e sociali. Nel tempo si è specializzato nelle operazioni immobiliari, nelle operazioni societarie e nella pianificazione del patrimonio familiare.

## Come lavoriamo

Ogni pratica ha un referente preciso e un calendario condiviso con il cliente. La documentazione viene raccolta in modo ordinato, le bozze degli atti sono sempre disponibili per la lettura prima della stipula e i costi sono dichiarati in anticipo, senza sorprese.

## Per famiglie e imprese

Dalla prima casa al passaggio generazionale di un'impresa, lo studio affronta ogni operazione con la stessa attenzione: capire l'obiettivo del cliente e trovare lo strumento giusto per raggiungerlo.`,
    values: [
      {
        title: 'Chiarezza',
        description:
          'Ogni atto viene spiegato prima di essere firmato, con parole comprensibili e tempi dichiarati.',
        icon: 'pen',
      },
      {
        title: 'Certeza',
        description:
          'Istruttorie accurate e adempimenti seguiti fino in fondo, per una tutela che dura nel tempo.',
        icon: 'shield',
      },
      {
        title: 'Vicinanza',
        description:
          'Un referente diretto per ogni pratica e una segreteria sempre raggiungibile.',
        icon: 'users',
      },
    ],
    credentials: [
      'Iscrizione all’Archivio Notarile Distrettuale di Città di Prova',
      'Assicurazione di responsabilità civile professionale aggiornata',
      'Adesione alle iniziative di formazione del Consiglio Notarile distrettuale',
    ],
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
  },
  servicesIndex: {
    hero: {
      title: 'Servizi',
      subtitle:
        'Le attività dello studio organizzate per area: immobiliare, impresa e società, famiglia e successioni.',
    },
  },
  teamIndex: {
    hero: {
      title: 'Professionisti',
      subtitle:
        'Le persone che seguono le tue pratiche, con ruoli e competenze dichiarati con trasparenza.',
    },
  },
  insightsIndex: {
    hero: {
      title: 'Insights',
      subtitle:
        'Guide pratiche, aggiornamenti e approfondimenti sul mondo degli atti notarili.',
    },
  },
  contact: {
    hero: {
      title: 'Contatti',
      subtitle:
        'Siamo a disposizione per un primo confronto su documentazione, tempi e costi della tua operazione.',
    },
    intro: `## Come raggiungerci

Lo studio è raggiungibile facilmente in auto e con i mezzi pubblici. L'accesso è privo di barriere architettoniche.

## Per appuntamenti

Le stipule e i ricevimenti si svolgono su appuntamento: è sufficiente contattare la segreteria via telefono, email o PEC.`,
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
