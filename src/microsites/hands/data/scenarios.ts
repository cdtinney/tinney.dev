export interface Scenario {
  title: string;
  toolImage: string;
}

const IMAGE_PATH = '/hands/images';

export const HANDS_IMAGE = `${IMAGE_PATH}/human-hands.jpg`;

export const SCENARIOS: Scenario[] = [
  { title: 'Lettuce Knife', toolImage: `${IMAGE_PATH}/lettuce-knife.png` },
  { title: 'The Herb Scissors', toolImage: `${IMAGE_PATH}/herb-scissors.png` },
  {
    title: 'The Strawberry Huller',
    toolImage: `${IMAGE_PATH}/strawberry-huller.png`,
  },
  {
    title: 'The Letter Opener',
    toolImage: `${IMAGE_PATH}/letter-opener.png`,
  },
  {
    title: 'The Toothpaste Squeezer',
    toolImage: `${IMAGE_PATH}/toothpaste-squeezer.png`,
  },
  {
    title: 'The Book Page Holder',
    toolImage: `${IMAGE_PATH}/book-page-holder.png`,
  },
  {
    title: 'The Package Opener',
    toolImage: `${IMAGE_PATH}/package-opener.jpeg`,
  },
  {
    title: 'The Can Crusher',
    toolImage: `${IMAGE_PATH}/can-crusher.jpeg`,
  },
  {
    title: 'The Finger Chopsticks',
    toolImage: `${IMAGE_PATH}/finger-chopsticks.png`,
  },
  {
    title: 'The Churu Holder',
    toolImage: `${IMAGE_PATH}/churu-holder.png`,
  },
];
