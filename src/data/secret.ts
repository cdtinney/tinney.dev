export interface SecretPage {
  name: string;
  path: string;
  description: string;
}

export const secretPages: SecretPage[] = [
  { name: 'faves', path: '/faves', description: 'A few of my favourite things.' },
  { name: 'facts', path: '/facts', description: 'Facts, anti-jokes, and questionable anecdotes.' },
];
