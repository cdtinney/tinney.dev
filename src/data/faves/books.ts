export interface Book {
  title: string;
  author: string;
  year: number;
  genres: string[];
  blurb?: string;
}

const books: Book[] = [
  {
    title: 'Dune',
    author: 'Frank Herbert',
    year: 1965,
    genres: ['Science Fiction'],
  },
];

export default books;
