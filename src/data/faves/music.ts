export interface Album {
  name: string;
  artist: string;
  year: number;
  genres: string[];
  cover: string;
  spotify: string;
  blurb?: string;
}

const music: Album[] = [
  {
    name: 'Soon It Will Be Cold Enough',
    artist: 'Emancipator',
    year: 2006,
    genres: ['Downtempo'],
    cover: '/images/favourites/music/soon-it-will-be-cold-enough.webp',
    spotify: 'https://open.spotify.com/album/6kL09DaURb7rAoqqaA51KU',
  },
  {
    name: 'Black Sands',
    artist: 'Bonobo',
    year: 2010,
    genres: ['Downtempo'],
    cover: '/images/favourites/music/black-sands.webp',
    spotify: 'https://open.spotify.com/album/5m1RkwKeU7MV0Ni6PH2lPy',
  },
  {
    name: 'Immunity',
    artist: 'Jon Hopkins',
    year: 2013,
    genres: ['Electronic'],
    cover: '/images/favourites/music/immunity.webp',
    spotify: 'https://open.spotify.com/album/0Dg1KwgmtUzeMQonDCUFhQ',
  },
  {
    name: 'Moderat',
    artist: 'Moderat',
    year: 2009,
    genres: ['Electronic'],
    cover: '/images/favourites/music/moderat.webp',
    spotify: 'https://open.spotify.com/album/2HEh23ogCT3wiYfag2iMxD',
  },
  {
    name: 'There Is Love in You',
    artist: 'Four Tet',
    year: 2010,
    genres: ['Electronic'],
    cover: '/images/favourites/music/there-is-love-in-you.webp',
    spotify: 'https://open.spotify.com/album/6x2gG7Pw1g54ZjQWjiAVCK',
  },
  {
    name: 'Carrie & Lowell',
    artist: 'Sufjan Stevens',
    year: 2015,
    genres: ['Indie Folk'],
    cover: '/images/favourites/music/carrie-and-lowell.webp',
    spotify: 'https://open.spotify.com/album/64xtjfsPHNHch0CZ7fPTjS',
  },
  {
    name: 'For Emma, Forever Ago',
    artist: 'Bon Iver',
    year: 2008,
    genres: ['Indie Folk'],
    cover: '/images/favourites/music/for-emma-forever-ago.webp',
    spotify: 'https://open.spotify.com/album/7EJ0OT5ZqybXxcYRa6mccM',
  },
  {
    name: 'Lungs',
    artist: 'Florence + The Machine',
    year: 2009,
    genres: ['Alt Pop'],
    cover: '/images/favourites/music/lungs.webp',
    spotify: 'https://open.spotify.com/album/2KAK58PimXHF4lSoKO3RxA',
  },
  {
    name: 'The Midnight Organ Fight',
    artist: 'Frightened Rabbit',
    year: 2008,
    genres: ['Indie Rock', 'Folk Rock'],
    cover: '/images/favourites/music/the-midnight-organ-fight.webp',
    spotify: 'https://open.spotify.com/album/42UPwzHW8rhA13t5JJxp09',
  },
  {
    name: 'Dive',
    artist: 'Tycho',
    year: 2011,
    genres: ['Electronic'],
    cover: '/images/favourites/music/dive.webp',
    spotify: 'https://open.spotify.com/album/4CBUbnGFz2iKFJjYqRIwst',
  },
  {
    name: 'July Talk',
    artist: 'July Talk',
    year: 2012,
    genres: ['Indie Rock'],
    cover: '/images/favourites/music/july-talk.webp',
    spotify: 'https://open.spotify.com/album/4lPufcR7KGOSZAaXnIju1E',
  },
  {
    name: 'Kiasmos',
    artist: 'Kiasmos',
    year: 2014,
    genres: ['Electronic'],
    cover: '/images/favourites/music/kiasmos.webp',
    spotify: 'https://open.spotify.com/album/7pBDu7nc2KaMsh0SfZMc2d',
  },
  {
    name: 'LP3',
    artist: 'Ratatat',
    year: 2008,
    genres: ['Indietronica'],
    cover: '/images/favourites/music/lp3.webp',
    spotify: 'https://open.spotify.com/album/7x8uGjdDxBHUva8PUHRzJj',
  },
  {
    name: 'Magnolia Electric Co.',
    artist: 'Songs: Ohia',
    year: 2003,
    genres: ['Alt-Country'],
    cover: '/images/favourites/music/magnolia-electric-co.webp',
    spotify: 'https://open.spotify.com/album/2sVWAggxyG7v8uSc8QrVxu',
  },
  {
    name: 'Our Love',
    artist: 'Caribou',
    year: 2014,
    genres: ['Electronic'],
    cover: '/images/favourites/music/our-love.webp',
    spotify: 'https://open.spotify.com/album/5r4nz5LZHeGUcZCrWbfWkx',
  },
  {
    name: 'In Return',
    artist: 'ODESZA',
    year: 2014,
    genres: ['Electronic'],
    cover: '/images/favourites/music/in-return.webp',
    spotify: 'https://open.spotify.com/album/5SXT6dwhHX56Sos7KMcMF5',
  },
];

export default music;
