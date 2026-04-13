export interface Place {
  name: string;
  location: string;
  maps: string;
}

const places: Place[] = [
  {
    name: 'Banff National Park',
    location: 'Alberta, Canada',
    maps: 'https://maps.google.com/?q=Banff+National+Park',
  },
];

export default places;
