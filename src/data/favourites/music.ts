export interface Album {
  name: string;
  artist: string;
  year: number;
  genres: string[];
  blurb?: string;
}

const music: Album[] = [
  {
    name: 'Soon It Will Be Cold Enough',
    artist: 'Emancipator',
    year: 2006,
    genres: ['Downtempo', 'Trip-Hop', 'Folktronica'],
  },
  {
    name: 'Black Sands',
    artist: 'Bonobo',
    year: 2010,
    genres: ['Downtempo', 'Trip-Hop', 'Nu Jazz'],
  },
  {
    name: 'Immunity',
    artist: 'Jon Hopkins',
    year: 2013,
    genres: ['Electronic', 'IDM', 'Microhouse'],
  },
  {
    name: 'Moderat',
    artist: 'Moderat',
    year: 2009,
    genres: ['IDM', 'Techno', 'Electronic'],
  },
  {
    name: 'There Is Love in You',
    artist: 'Four Tet',
    year: 2010,
    genres: ['Microhouse', 'IDM', 'Ambient'],
  },
  {
    name: 'Carrie & Lowell',
    artist: 'Sufjan Stevens',
    year: 2015,
    genres: ['Indie Folk', 'Singer-Songwriter'],
  },
  {
    name: 'For Emma, Forever Ago',
    artist: 'Bon Iver',
    year: 2008,
    genres: ['Indie Folk'],
  },
  {
    name: 'Lungs',
    artist: 'Florence + The Machine',
    year: 2009,
    genres: ['Indie Pop', 'Baroque Pop', 'Art Rock'],
  },
  {
    name: 'The Midnight Organ Fight',
    artist: 'Frightened Rabbit',
    year: 2008,
    genres: ['Indie Rock', 'Post-Punk Revival'],
  },
  {
    name: 'Dive',
    artist: 'Tycho',
    year: 2011,
    genres: ['Downtempo', 'Chillwave', 'Ambient'],
  },
  {
    name: 'July Talk',
    artist: 'July Talk',
    year: 2012,
    genres: ['Indie Rock', 'Blues Rock'],
  },
  {
    name: 'Kiasmos',
    artist: 'Kiasmos',
    year: 2014,
    genres: ['Minimal Techno', 'Ambient', 'Electronic'],
  },
  {
    name: 'LP3',
    artist: 'Ratatat',
    year: 2008,
    genres: ['Electronic Rock', 'Indietronica'],
  },
  {
    name: 'Magnolia Electric Co.',
    artist: 'Songs: Ohia',
    year: 2003,
    genres: ['Alt-Country', 'Indie Rock'],
  },
  {
    name: 'Our Love',
    artist: 'Caribou',
    year: 2014,
    genres: ['Electronic', 'Psychedelic Pop', 'IDM'],
  },
  {
    name: 'In Return',
    artist: 'ODESZA',
    year: 2014,
    genres: ['Electronic', 'Chillwave', 'Synth-Pop'],
  },
];

export default music;
