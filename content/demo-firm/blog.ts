// Contenuti dimostrativi fittizi per un immaginario "Studio Notarile Esempio".
// Sostituire tutti i valori di questo file con i dati reali dello studio.

import type { BlogPost } from '../schemas';

export const blogPosts: BlogPost[] = [
  {
    slug: 'compravendita-cosa-verifica-il-notaio',
    title: 'Compravendita immobiliare: cosa verifica il notaio prima dell’atto',
    excerpt:
      'Provenienza dell’immobile, ipoteche, vincoli urbanistici e catastali: la istruttoria che precede la firma, spiegata in modo semplice.',
    date: '2026-06-18',
    author: 'elena-fittizia',
    coverImage: {
      src: '/images/demo-firm/cover-1.svg',
      alt: 'Illustrazione dimostrativa di un atto immobiliare',
      width: 1200,
      height: 630,
    },
    coverCaption: 'Illustrazione dimostrativa',
    tags: ['Immobiliare', 'Guida'],
    readingTimeMinutes: 6,
    body: `## La verifica della provenienza

Prima di ogni compravendita il notaio ricostruisce la storia dell'immobile: chi lo ha venduto in passato, con quali atti e se gravano su di esso ipoteche, pignoramenti o vincoli. Un passaggio fondamentale per garantire all'acquirente una proprietà libera e certa.

## Vincoli urbanistici e catastali

Viene verificato che lo stato di fatto dell'immobile corrisponda a quello catastale e urbanistico. Difformità e abusi, se non sanati, possono rallentare l'operazione o pregiudicarla.

## La lettura dell'atto

Prima della stipula le parti ricevono la bozza dell'atto e la commentano insieme al notaio. Clausole, oneri e costi vengono spiegati in modo chiaro: nessuna sorpresa il giorno della firma.

## Dopo la firma

Trascrizione, volture e comunicazioni agli enti sono curate dallo studio, che consegna alle parti la documentazione completa dell'operazione.`,
    seo: {
      title: 'Cosa verifica il notaio prima di una compravendita',
    },
  },
  {
    slug: 'costituzione-srl-i-passaggi-da-non-sottovalutare',
    title: 'Costituzione di S.r.l.: i passaggi da non sottovalutare',
    excerpt:
      'Dalla scelta della forma societaria allo statuto su misura: le decisioni che conviene prendere prima di andare dal notaio.',
    date: '2026-05-07',
    author: 'marco-imaginario',
    coverImage: {
      src: '/images/demo-firm/cover-2.svg',
      alt: 'Illustrazione dimostrativa di una costituzione societaria',
      width: 1200,
      height: 630,
    },
    tags: ['Impresa', 'Società'],
    readingTimeMinutes: 5,
    body: `## Prima dell'atto: le scelte di fondo

Quanti soci, quali poteri, come si prendono le decisioni. Sono queste le domande da affrontare prima della costituzione: lo statuto che ne risulta dovrà accompagnare la società per tutta la sua vita.

## Lo statuto non è un modulo

Le clausole standard vanno bene raramente. Regole di governance, diritti di uscita e meccanismi di decisione vanno calibrati sull'assetto reale della compagine sociale.

## Dopo l'iscrizione

L'iscrizione al Registro delle Imprese conclude l'operazione, ma non il lavoro: nomine, prime delibere e adempimenti fiscali meritano la stessa attenzione della costituzione.`,
  },
  {
    slug: 'successione-accettazione-termini-e-scelte',
    title: 'Successione: termini e scelte dell’accettazione',
    excerpt:
      'Accettare, accettare con beneficio d’inventario o rinunciare: un quadro orientativo delle opzioni disponibili agli eredi.',
    date: '2026-03-21',
    author: 'marco-imaginario',
    tags: ['Famiglia', 'Successioni'],
    readingTimeMinutes: 4,
    body: `## Le opzioni dell'erede

Chi viene chiamato all'eredità ha davanti tre strade: accettare in modo semplice, accettare con beneficio d'inventario o rinunciare. La scelta dipende dalla situazione patrimoniale del defunto e da quella personale dell'erede.

## I tempi

I termini per decidere variano a seconda dei casi e della posizione del chiamato. Verificarli per tempo evita di vedersi attribuire un'eredità in modo implicito.

## Quando serve il beneficio d'inventario

Il beneficio d'inventario separa il patrimonio del defunto da quello dell'erede: è lo strumento indicato quando non si conoscono con certezza i debiti ereditari.`,
  },
  {
    slug: 'convivenza-di-fatto-quali-accordi-si-possono-regolare',
    title: 'Convivenza di fatto: quali accordi si possono regolare',
    excerpt:
      'Patti di convivenza, comproprietà e tutela della casa familiare: gli strumenti disponibili per le coppie non coniugate.',
    date: '2026-02-09',
    author: 'luca-segnaposto',
    coverImage: {
      src: '/images/demo-firm/cover-3.svg',
      alt: 'Illustrazione dimostrativa di un accordo patrimoniale',
      width: 1200,
      height: 630,
    },
    tags: ['Famiglia', 'Pianificazione'],
    readingTimeMinutes: 5,
    body: `## Il patto di convivenza

Il patto di convivenza permette di disciplinare i contributi di ciascuno, la gestione della casa e gli aspetti patrimoniali della vita in comune. Redatto per atto pubblico o scrittura privata autenticata, ha efficacia certa tra le parti.

## Comproprietà e assegnazioni

Acquistare insieme un immobile o assegnare l'uso della casa familiare sono scelte che conviene documentare con precisione, per evitare contestazioni in futuro.

## Aggiornare nel tempo

Un accordo ben fatto cresce con la coppia: va rivisto quando cambiano la situazione lavorativa, la nascita di figli o l'acquisto di un immobile.`,
  },
];
