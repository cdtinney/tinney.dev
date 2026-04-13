export interface TvShow {
  name: string;
  year: number;
  creator: string;
  favouriteCast: string[];
  cover: string;
  blurb?: string;
}

export const miniSeries: TvShow[] = [
  {
    name: 'Mare of Easttown',
    year: 2021,
    creator: 'Brad Ingelsby',
    favouriteCast: ['Kate Winslet'],
    cover: '/images/favourites/tv/mare-of-easttown.webp',
  },
  {
    name: 'Dopesick',
    year: 2021,
    creator: 'Danny Strong',
    favouriteCast: ['Michael Keaton', 'Kaitlyn Dever'],
    cover: '/images/favourites/tv/dopesick.webp',
  },
  {
    name: 'The Night Of',
    year: 2016,
    creator: 'Steven Zaillian',
    favouriteCast: ['Riz Ahmed', 'John Turturro'],
    cover: '/images/favourites/tv/the-night-of.webp',
  },
  {
    name: 'Sharp Objects',
    year: 2018,
    creator: 'Marti Noxon',
    favouriteCast: ['Amy Adams', 'Patricia Clarkson'],
    cover: '/images/favourites/tv/sharp-objects.webp',
  },
  {
    name: 'Band of Brothers',
    year: 2001,
    creator: 'Steven Spielberg',
    favouriteCast: ['Damian Lewis', 'Ron Livingston'],
    cover: '/images/favourites/tv/band-of-brothers.webp',
  },
  {
    name: 'Maid',
    year: 2021,
    creator: 'Molly Smith Metzler',
    favouriteCast: ['Margaret Qualley'],
    cover: '/images/favourites/tv/maid.webp',
  },
  {
    name: 'Normal People',
    year: 2020,
    creator: 'Sally Rooney',
    favouriteCast: ['Daisy Edgar-Jones', 'Paul Mescal'],
    cover: '/images/favourites/tv/normal-people.webp',
  },
  {
    name: 'Chernobyl',
    year: 2019,
    creator: 'Craig Mazin',
    favouriteCast: ['Jared Harris', 'Stellan Skarsgård'],
    cover: '/images/favourites/tv/chernobyl.webp',
  },
];

export const fullSeries: TvShow[] = [
  {
    name: 'The Sopranos',
    year: 1999,
    creator: 'David Chase',
    favouriteCast: ['James Gandolfini', 'Edie Falco'],
    cover: '/images/favourites/tv/the-sopranos.webp',
  },
  {
    name: 'Succession',
    year: 2018,
    creator: 'Jesse Armstrong',
    favouriteCast: ['Brian Cox', 'Kieran Culkin', 'Jeremy Strong'],
    cover: '/images/favourites/tv/succession.webp',
  },
  {
    name: 'Breaking Bad',
    year: 2008,
    creator: 'Vince Gilligan',
    favouriteCast: ['Bryan Cranston', 'Aaron Paul'],
    cover: '/images/favourites/tv/breaking-bad.webp',
  },
  {
    name: 'Better Call Saul',
    year: 2015,
    creator: 'Vince Gilligan',
    favouriteCast: ['Bob Odenkirk', 'Rhea Seehorn', 'Jonathan Banks'],
    cover: '/images/favourites/tv/better-call-saul.webp',
  },
  {
    name: 'Fargo',
    year: 2014,
    creator: 'Noah Hawley',
    favouriteCast: ['Billy Bob Thornton', 'Martin Freeman'],
    cover: '/images/favourites/tv/fargo.webp',
  },
  {
    name: 'The Leftovers',
    year: 2014,
    creator: 'Damon Lindelof',
    favouriteCast: ['Justin Theroux', 'Carrie Coon'],
    cover: '/images/favourites/tv/the-leftovers.webp',
  },
  {
    name: 'Six Feet Under',
    year: 2001,
    creator: 'Alan Ball',
    favouriteCast: ['Peter Krause', 'Michael C. Hall', 'Lauren Ambrose'],
    cover: '/images/favourites/tv/six-feet-under.webp',
  },
  {
    name: 'The Rehearsal',
    year: 2022,
    creator: 'Nathan Fielder',
    favouriteCast: ['Nathan Fielder'],
    cover: '/images/favourites/tv/the-rehearsal.webp',
  },
];
