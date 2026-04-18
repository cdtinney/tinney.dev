export interface Movie {
  name: string;
  year: number;
  director: string;
  favouriteCast?: string[];
  cover: string;
  letterboxd: string;
  blurb?: string;
}

export interface MovieGenreGroup {
  genre: string;
  movies: Movie[];
  lists?: { name: string; url: string }[];
}

export interface FeaturedList {
  name: string;
  url: string;
  bold?: boolean;
}

export const featuredLists: FeaturedList[] = [
  { name: '2026 Faves', url: 'https://letterboxd.com/cdmt/list/2026_faves/' },
  { name: '2025 Faves', url: 'https://letterboxd.com/cdmt/list/2025_faves/' },
  { name: 'Real Good Hope', url: 'https://letterboxd.com/cdmt/list/real-good-hope/' },
  {
    name: "They Don't Go Anywhere",
    url: 'https://letterboxd.com/cdmt/list/they-dont-go-anywhere/',
  },
  { name: 'All Lists', url: 'https://letterboxd.com/cdmt/lists/', bold: true },
];

const movies: Movie[] = [
  {
    name: 'The Prestige',
    year: 2006,
    director: 'Christopher Nolan',
    favouriteCast: ['Christian Bale', 'Hugh Jackman', 'Scarlett Johansson'],
    cover: '/images/favourites/movies/the-prestige.webp',
    letterboxd: 'https://letterboxd.com/film/the-prestige/',
  },
  {
    name: 'The Lord of the Rings: The Return of the King',
    year: 2003,
    director: 'Peter Jackson',
    favouriteCast: ['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen'],
    cover: '/images/favourites/movies/the-return-of-the-king.webp',
    letterboxd: 'https://letterboxd.com/film/the-lord-of-the-rings-the-return-of-the-king/',
  },
  {
    name: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    director: 'Peter Jackson',
    favouriteCast: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
    cover: '/images/favourites/movies/the-fellowship-of-the-ring.webp',
    letterboxd: 'https://letterboxd.com/film/the-lord-of-the-rings-the-fellowship-of-the-ring/',
  },
  {
    name: 'Inside Man',
    year: 2006,
    director: 'Spike Lee',
    favouriteCast: ['Denzel Washington', 'Clive Owen', 'Jodie Foster'],
    cover: '/images/favourites/movies/inside-man.webp',
    letterboxd: 'https://letterboxd.com/film/inside-man/',
  },
  {
    name: 'The Holdovers',
    year: 2023,
    director: 'Alexander Payne',
    favouriteCast: ['Paul Giamatti', 'Dominic Sessa', "Da'Vine Joy Randolph"],
    cover: '/images/favourites/movies/the-holdovers.webp',
    letterboxd: 'https://letterboxd.com/film/the-holdovers/',
  },
  {
    name: 'Arrival',
    year: 2016,
    director: 'Denis Villeneuve',
    favouriteCast: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker'],
    cover: '/images/favourites/movies/arrival.webp',
    letterboxd: 'https://letterboxd.com/film/arrival-2016/',
  },
  {
    name: 'Incendies',
    year: 2010,
    director: 'Denis Villeneuve',
    favouriteCast: ['Lubna Azabal', 'Mélissa Désormeaux-Poulin', 'Maxim Gaudette'],
    cover: '/images/favourites/movies/incendies.webp',
    letterboxd: 'https://letterboxd.com/film/incendies/',
  },
  {
    name: 'Oppenheimer',
    year: 2023,
    director: 'Christopher Nolan',
    favouriteCast: ['Cillian Murphy', 'Emily Blunt', 'Robert Downey Jr.'],
    cover: '/images/favourites/movies/oppenheimer.webp',
    letterboxd: 'https://letterboxd.com/film/oppenheimer-2023/',
  },
  {
    name: 'Finding Nemo',
    year: 2003,
    director: 'Andrew Stanton',
    cover: '/images/favourites/movies/finding-nemo.webp',
    letterboxd: 'https://letterboxd.com/film/finding-nemo/',
  },
  {
    name: 'Life of Brian',
    year: 1979,
    director: 'Terry Jones',
    favouriteCast: ['Graham Chapman', 'John Cleese', 'Terry Gilliam'],
    cover: '/images/favourites/movies/life-of-brian.webp',
    letterboxd: 'https://letterboxd.com/film/life-of-brian/',
  },
  {
    name: 'Shrek 2',
    year: 2004,
    director: 'Andrew Adamson',
    favouriteCast: ['Mike Myers', 'Eddie Murphy', 'Cameron Diaz'],
    cover: '/images/favourites/movies/shrek-2.webp',
    letterboxd: 'https://letterboxd.com/film/shrek-2/',
  },
  {
    name: 'Castle in the Sky',
    year: 1986,
    director: 'Hayao Miyazaki',
    favouriteCast: ['Mayumi Tanaka', 'Keiko Yokozawa', 'Minori Terada'],
    cover: '/images/favourites/movies/castle-in-the-sky.webp',
    letterboxd: 'https://letterboxd.com/film/castle-in-the-sky/',
  },
  {
    name: 'Get Out',
    year: 2017,
    director: 'Jordan Peele',
    favouriteCast: ['Daniel Kaluuya', 'Allison Williams', 'Bradley Whitford'],
    cover: '/images/favourites/movies/get-out.webp',
    letterboxd: 'https://letterboxd.com/film/get-out-2017/',
  },
  {
    name: 'Children of Men',
    year: 2006,
    director: 'Alfonso Cuarón',
    favouriteCast: ['Clive Owen', 'Julianne Moore', 'Michael Caine'],
    cover: '/images/favourites/movies/children-of-men.webp',
    letterboxd: 'https://letterboxd.com/film/children-of-men/',
  },
  {
    name: 'Fantastic Mr. Fox',
    year: 2009,
    director: 'Wes Anderson',
    favouriteCast: ['George Clooney', 'Meryl Streep', 'Jason Schwartzman'],
    cover: '/images/favourites/movies/fantastic-mr-fox.webp',
    letterboxd: 'https://letterboxd.com/film/fantastic-mr-fox/',
  },
  {
    name: 'Sentimental Value',
    year: 2025,
    director: 'Joachim Trier',
    favouriteCast: ['Stellan Skarsgård', 'Renate Reinsve', 'Elle Fanning'],
    cover: '/images/favourites/movies/sentimental-value.webp',
    letterboxd: 'https://letterboxd.com/film/sentimental-value-2025/',
  },
  {
    name: 'Paddington 2',
    year: 2017,
    director: 'Paul King',
    favouriteCast: ['Ben Whishaw', 'Hugh Grant', 'Hugh Bonneville'],
    cover: '/images/favourites/movies/paddington-2.webp',
    letterboxd: 'https://letterboxd.com/film/paddington-2/',
  },
  {
    name: 'The Incredibles',
    year: 2004,
    director: 'Brad Bird',
    favouriteCast: ['Craig T. Nelson', 'Holly Hunter', 'Samuel L. Jackson'],
    cover: '/images/favourites/movies/the-incredibles.webp',
    letterboxd: 'https://letterboxd.com/film/the-incredibles/',
  },
  {
    name: "Howl's Moving Castle",
    year: 2004,
    director: 'Hayao Miyazaki',
    cover: '/images/favourites/movies/howls-moving-castle.webp',
    letterboxd: 'https://letterboxd.com/film/howls-moving-castle/',
  },
  {
    name: 'Kubo and the Two Strings',
    year: 2016,
    director: 'Travis Knight',
    cover: '/images/favourites/movies/kubo-and-the-two-strings.webp',
    letterboxd: 'https://letterboxd.com/film/kubo-and-the-two-strings/',
  },
  {
    name: 'Force Majeure',
    year: 2014,
    director: 'Ruben Östlund',
    favouriteCast: ['Johannes Kuhnke', 'Lisa Loven Kongsli'],
    cover: '/images/favourites/movies/force-majeure.webp',
    letterboxd: 'https://letterboxd.com/film/force-majeure-2014/',
  },
  {
    name: 'The Death of Stalin',
    year: 2017,
    director: 'Armando Iannucci',
    favouriteCast: ['Steve Buscemi', 'Jason Isaacs'],
    cover: '/images/favourites/movies/the-death-of-stalin.webp',
    letterboxd: 'https://letterboxd.com/film/the-death-of-stalin/',
  },
  {
    name: 'Coherence',
    year: 2013,
    director: 'James Ward Byrkit',
    favouriteCast: ['Emily Baldoni', 'Maury Sterling', 'Nicholas Brendon'],
    cover: '/images/favourites/movies/coherence.webp',
    letterboxd: 'https://letterboxd.com/film/coherence-2013/',
  },
  {
    name: 'The Descent',
    year: 2005,
    director: 'Neil Marshall',
    favouriteCast: ['Shauna Macdonald', 'Natalie Mendoza'],
    cover: '/images/favourites/movies/the-descent.webp',
    letterboxd: 'https://letterboxd.com/film/the-descent/',
  },
  {
    name: 'Martyrs',
    year: 2008,
    director: 'Pascal Laugier',
    favouriteCast: ['Morjana Alaoui', 'Mylène Jampanoi'],
    cover: '/images/favourites/movies/martyrs.webp',
    letterboxd: 'https://letterboxd.com/film/martyrs/',
  },
  {
    name: 'Ex Machina',
    year: 2015,
    director: 'Alex Garland',
    favouriteCast: ['Domhnall Gleeson', 'Alicia Vikander'],
    cover: '/images/favourites/movies/ex-machina.webp',
    letterboxd: 'https://letterboxd.com/film/ex-machina-2015/',
  },
  {
    name: 'Eastern Promises',
    year: 2007,
    director: 'David Cronenberg',
    favouriteCast: ['Viggo Mortensen', 'Naomi Watts'],
    cover: '/images/favourites/movies/eastern-promises.webp',
    letterboxd: 'https://letterboxd.com/film/eastern-promises/',
  },
  {
    name: 'Annihilation',
    year: 2018,
    director: 'Alex Garland',
    favouriteCast: ['Natalie Portman', 'Jennifer Jason Leigh'],
    cover: '/images/favourites/movies/annihilation.webp',
    letterboxd: 'https://letterboxd.com/film/annihilation/',
  },
  {
    name: 'The Matrix',
    year: 1999,
    director: 'Lana & Lilly Wachowski',
    favouriteCast: ['Keanu Reeves', 'Laurence Fishburne'],
    cover: '/images/favourites/movies/the-matrix.webp',
    letterboxd: 'https://letterboxd.com/film/the-matrix/',
  },
  {
    name: 'Sorry, Baby',
    year: 2025,
    director: 'Eva Victor',
    favouriteCast: ['Eva Victor', 'Naomi Ackie'],
    cover: '/images/favourites/movies/sorry-baby.webp',
    letterboxd: 'https://letterboxd.com/film/sorry-baby-2025/',
  },
  {
    name: 'There Will Be Blood',
    year: 2007,
    director: 'Paul Thomas Anderson',
    favouriteCast: ['Daniel Day-Lewis', 'Paul Dano'],
    cover: '/images/favourites/movies/there-will-be-blood.webp',
    letterboxd: 'https://letterboxd.com/film/there-will-be-blood/',
  },
  {
    name: 'Aftersun',
    year: 2022,
    director: 'Charlotte Wells',
    favouriteCast: ['Paul Mescal', 'Frankie Corio'],
    cover: '/images/favourites/movies/aftersun.webp',
    letterboxd: 'https://letterboxd.com/film/aftersun/',
  },
];

export default movies;

const byName = (name: string) => movies.find((m) => m.name === name)!;

const LB = 'https://letterboxd.com/cdmt/list';

export const moviesByGenre: MovieGenreGroup[] = [
  {
    genre: 'All Time',
    movies: [
      byName('The Prestige'),
      byName('The Lord of the Rings: The Return of the King'),
      byName('Sentimental Value'),
      byName('Incendies'),
    ],
    lists: [{ name: 'All Time Faves', url: `${LB}/all-time-faves/` }],
  },
  {
    genre: 'Drama',
    movies: [
      byName('There Will Be Blood'),
      byName('Aftersun'),
      byName('Oppenheimer'),
      byName('Sorry, Baby'),
    ],
    lists: [{ name: 'Real Good Drama', url: `${LB}/real-good-drama/` }],
  },
  {
    genre: 'Sci-Fi',
    movies: [
      byName('Arrival'),
      byName('Children of Men'),
      byName('Annihilation'),
      byName('The Matrix'),
    ],
    lists: [{ name: 'Sci-Fi Sundays', url: `${LB}/sci-fi-sundays/` }],
  },
  {
    genre: 'Thriller',
    movies: [
      byName('The Prestige'),
      byName('Inside Man'),
      byName('Ex Machina'),
      byName('Eastern Promises'),
    ],
    lists: [{ name: 'Real Good Thrillers', url: `${LB}/real-good-thrillers/` }],
  },
  {
    genre: 'Horror',
    movies: [byName('Get Out'), byName('Coherence'), byName('The Descent'), byName('Martyrs')],
    lists: [{ name: 'Real Good Scares', url: `${LB}/real-good-scares/` }],
  },
  {
    genre: 'Animation',
    movies: [
      byName('Finding Nemo'),
      byName('Fantastic Mr. Fox'),
      byName('Castle in the Sky'),
      byName('Shrek 2'),
    ],
  },
  {
    genre: 'Comedy',
    movies: [
      byName('Life of Brian'),
      byName('The Holdovers'),
      byName('Force Majeure'),
      byName('The Death of Stalin'),
    ],
    lists: [{ name: 'Real Good Comedies', url: `${LB}/real-good-comedies/` }],
  },
  {
    genre: 'Family',
    movies: [
      byName('Paddington 2'),
      byName('The Incredibles'),
      byName("Howl's Moving Castle"),
      byName('Kubo and the Two Strings'),
    ],
    lists: [{ name: 'Real Good Family Movies', url: `${LB}/real-good-family-movies/` }],
  },
];
