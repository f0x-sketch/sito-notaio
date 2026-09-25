// Contenuti dimostrativi fittizi per un immaginario "Studio Notarile Esempio".
// Sostituire tutti i valori di questo file con i dati reali dello studio.

import type { Service, ServiceCategory } from '../schemas';

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'immobiliare',
    title: 'Immobiliare',
    description:
      'Atti relativi a case, terreni e diritti reali: compravendite, mutui e formalità.',
    order: 1,
  },
  {
    slug: 'impresa',
    title: 'Impresa e società',
    description:
      'Operazioni societarie e atti d’impresa, dalla costituzione al trasferimento di quote.',
    order: 2,
  },
  {
    slug: 'famiglia',
    title: 'Famiglia e successioni',
    description:
      'Pianificazione del patrimonio familiare, successioni e accordi tra conviventi.',
    order: 3,
  },
];

export const services: Service[] = [
  {
    slug: 'compravendita-immobiliare',
    title: 'Compravendita immobiliare',
    summary:
      'Verifiche, stipula e adempimenti per compravendere in tutta sicurezza.',
    category: 'immobiliare',
    order: 1,
    icon: 'home',
    highlights: [
      'Verifica della provenienza, dei vincoli e delle ipoteche',
      'Lettura guidata dell’atto prima della firma',
      'Trascrizione, volture catastali e adempimenti successivi',
    ],
    body: `## Un percorso assistito passo dopo passo

La compravendita immobiliare è uno degli atti più importanti per una famiglia o per un'impresa. Lo studio segue l'intero percorso: dalla raccolta della documentazione alla verifica della situazione ipotecaria e catastale, fino alla stipula e agli adempimenti successivi.

Prima della firma viene predisposta una bozza dell'atto, commentata insieme alle parti in un linguaggio semplice, così che ogni clausola sia compresa e condivisa.

## Dopo la stipula

Lo studio cura la trascrizione nei registri immobiliari, le volture catastali e la comunicazione agli enti competenti, consegnando alle parti la documentazione completa dell'operazione.`,
    seo: {
      title: 'Compravendita immobiliare',
      description:
        'Assistenza notarile completa per compravendite immobiliari: verifiche, stipula, trascrizione e volture.',
    },
  },
  {
    slug: 'mutui-ipotecari',
    title: 'Mutui e ipoteche',
    summary:
      'Istruzione e stipula dei finanziamenti, iscrizione e cancellazione delle ipoteche.',
    category: 'immobiliare',
    order: 2,
    icon: 'key',
    highlights: [
      'Coordinamento con l’istituto di credito',
      'Verifica delle condizioni economiche del contratto',
      'Iscrizione e cancellazione delle ipoteche',
    ],
    body: `## Mutuo, rinegoziazione e surroga

Lo studio accompagna il cliente nella stipula del mutuo, verificando che le condizioni economiche concordate con la banca corrispondano a quelle riportate nell'atto. Offre supporto anche nelle operazioni di surroga, rinegoziazione e consolidamento.

## Ipoteche

Vengono curati l'iscrizione dell'ipoteca a garanzia del finanziamento e, a estinzione del debito, la cancellazione con le relative formalità, così che la situazione dell'immobile resti sempre aggiornata.`,
  },
  {
    slug: 'costituzione-societa',
    title: 'Costituzione di società',
    summary:
      'Dalla scelta della forma societaria all’iscrizione al Registro delle Imprese.',
    category: 'impresa',
    order: 1,
    icon: 'briefcase',
    highlights: [
      'Consiglio sulla forma societaria più adatta',
      'Redazione di statuto e atto costitutivo',
      'Iscrizione al Registro delle Imprese e depositi',
    ],
    body: `## Dall'idea all'impresa

Chi avvia un'attività trova nello studio un interlocutore per le scelte di base: forma societaria, assetto dei poteri, regole di funzionamento. L'atto costitutivo e lo statuto vengono redatti su misura, evitando formule standard che non corrispondono alle reali esigenze dei soci.

## Dopo l'iscrizione

Lo studio cura l'iscrizione al Registro delle Imprese e assiste la società anche nelle fasi successive: modifiche statutarie, nomine e operazioni straordinarie.`,
  },
  {
    slug: 'cessione-quote',
    title: 'Cessione di quote societarie',
    summary:
      'Trasferimenti di partecipazioni e patti tra soci con tutele certe.',
    category: 'impresa',
    order: 2,
    icon: 'file-text',
    highlights: [
      'Verifica della regolarità della partecipazione',
      'Redazione del contratto di cessione',
      'Adempimenti di pubblicità e aggiornamento dell’elenco soci',
    ],
    body: `## Trasferimenti sicuri

La cessione di quote richiede attenzione alla situazione della società, ai patti già in essere tra i soci e agli eventuali diritti di prelazione. Lo studio verifica questi aspetti prima della stipula e redige un contratto che regoli con chiarezza prezzo, garanzie e responsabilità.

## Patti tra soci

Quando l'operazione lo richiede, vengono predisposti patti parasociali per disciplinare governance, uscite e trasferimenti futuri delle partecipazioni.`,
  },
  {
    slug: 'successioni-donazioni',
    title: 'Successioni e donazioni',
    summary:
      'Accettazione dell’eredità, divisioni e donazioni pianificate con la famiglia.',
    category: 'famiglia',
    order: 1,
    icon: 'scale',
    highlights: [
      'Analisi della situazione ereditaria e dei legittimari',
      'Accettazione, rinuncia e divisione ereditaria',
      'Donazioni con riserva di usufrutto o altri vincoli',
    ],
    body: `## Pianificare per tempo

Successioni e donazioni sono momenti delicati, in cui le scelte di oggi condizionano gli equilibri familiari del domani. Lo studio analizza la situazione patrimoniale e propone soluzioni rispettose delle quote riservate ai legittimari.

## Assistenza completa

Vengono curati l'accettazione dell'eredità, la divisione tra i chiamati e le donazioni, con particolare attenzione alle esigenze di continuità dell'impresa familiare e alla tutela dei più fragili.`,
  },
  {
    slug: 'accordi-patrimoniali',
    title: 'Accordi patrimoniali tra conviventi',
    summary:
      'Patti di convivenza, comproprietà e tutela della casa familiare.',
    category: 'famiglia',
    order: 2,
    icon: 'handshake',
    highlights: [
      'Patti di convivenza con efficacia certa',
      'Regolamentazione di comproprietà e assegnazioni',
      'Tutela della casa familiare',
    ],
    body: `## Chiarezza nei rapporti patrimoniali

Anche le coppie non coniugate possono regolare i propri rapporti patrimoniali con strumenti efficaci. Lo studio redige patti di convivenza e accordi che disciplinino contribuzioni, comproprietà dei beni e tutela della casa familiare.

## Aggiornamento nel tempo

Gli accordi vengono aggiornati quando cambiano le condizioni della coppia, mantenendo sempre un quadro chiaro e opponibile delle reciproche posizioni.`,
  },
];
