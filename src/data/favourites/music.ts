export interface Album {
  name: string;
  artist: string;
  year: number;
  genres: string[];
  cover: string;
  blurb?: string;
}

const music: Album[] = [
  {
    name: 'Soon It Will Be Cold Enough',
    artist: 'Emancipator',
    year: 2006,
    genres: ['Downtempo', 'Trip-Hop', 'Folktronica'],
    cover: '/images/favourites/music/soon-it-will-be-cold-enough.webp',
  },
  {
    name: 'Black Sands',
    artist: 'Bonobo',
    year: 2010,
    genres: ['Downtempo', 'Trip-Hop', 'Nu Jazz'],
    cover: '/images/favourites/music/black-sands.webp',
  },
  {
    name: 'Immunity',
    artist: 'Jon Hopkins',
    year: 2013,
    genres: ['Electronic', 'IDM', 'Microhouse'],
    cover: '/images/favourites/music/immunity.webp',
  },
  {
    name: 'Moderat',
    artist: 'Moderat',
    year: 2009,
    genres: ['IDM', 'Techno', 'Electronic'],
    cover: '/images/favourites/music/moderat.webp',
  },
  {
    name: 'There Is Love in You',
    artist: 'Four Tet',
    year: 2010,
    genres: ['Microhouse', 'IDM', 'Ambient'],
    cover: '/images/favourites/music/there-is-love-in-you.webp',
  },
  {
    name: 'Carrie & Lowell',
    artist: 'Sufjan Stevens',
    year: 2015,
    genres: ['Indie Folk', 'Singer-Songwriter'],
    cover: '/images/favourites/music/carrie-and-lowell.webp',
  },
  {
    name: 'For Emma, Forever Ago',
    artist: 'Bon Iver',
    year: 2008,
    genres: ['Indie Folk'],
    cover: '/images/favourites/music/for-emma-forever-ago.webp',
  },
  {
    name: 'Lungs',
    artist: 'Florence + The Machine',
    year: 2009,
    genres: ['Indie Pop', 'Baroque Pop', 'Art Rock'],
    cover: '/images/favourites/music/lungs.webp',
  },
  {
    name: 'The Midnight Organ Fight',
    artist: 'Frightened Rabbit',
    year: 2008,
    genres: ['Indie Rock', 'Post-Punk Revival'],
    cover: '/images/favourites/music/the-midnight-organ-fight.webp',
  },
  {
    name: 'Dive',
    artist: 'Tycho',
    year: 2011,
    genres: ['Downtempo', 'Chillwave', 'Ambient'],
    cover: '/images/favourites/music/dive.webp',
  },
  {
    name: 'July Talk',
    artist: 'July Talk',
    year: 2012,
    genres: ['Indie Rock', 'Blues Rock'],
    cover: '/images/favourites/music/july-talk.webp',
  },
  {
    name: 'Kiasmos',
    artist: 'Kiasmos',
    year: 2014,
    genres: ['Minimal Techno', 'Ambient', 'Electronic'],
    cover: '/images/favourites/music/kiasmos.webp',
  },
  {
    name: 'LP3',
    artist: 'Ratatat',
    year: 2008,
    genres: ['Electronic Rock', 'Indietronica'],
    cover: '/images/favourites/music/lp3.webp',
  },
  {
    name: 'Magnolia Electric Co.',
    artist: 'Songs: Ohia',
    year: 2003,
    genres: ['Alt-Country', 'Indie Rock'],
    cover: '/images/favourites/music/magnolia-electric-co.webp',
  },
  {
    name: 'Our Love',
    artist: 'Caribou',
    year: 2014,
    genres: ['Electronic', 'Psychedelic Pop', 'IDM'],
    cover: '/images/favourites/music/our-love.webp',
  },
  {
    name: 'In Return',
    artist: 'ODESZA',
    year: 2014,
    genres: ['Electronic', 'Chillwave', 'Synth-Pop'],
    cover: '/images/favourites/music/in-return.webp',
  },
];

export default music;
