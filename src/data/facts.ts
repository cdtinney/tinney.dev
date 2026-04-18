// Fact text is rendered via set:html — only use trusted content here.
export interface Fact {
  text: string;
  source?: string;
}

export interface FactSection {
  id: string;
  title: string;
  description?: string;
  facts: Fact[];
}

const sections: FactSection[] = [
  {
    id: 'rock-facts',
    title: 'Rock facts',
    description:
      '<a href="https://en.wikipedia.org/wiki/Over_the_Garden_Wall">Greg</a> told me these ones.',
    facts: [
      {
        text: "Dinosaurs had big ears, but everyone forgot this because dinosaur ears don't have bones.",
      },
      { text: 'If you soak a raisin in grape juice, it turns into a grape.' },
      { text: 'Did you know that computers are powered by lots of tiny calculators?' },
      { text: 'There are more airplanes in the ocean than submarines in the sky.' },
      { text: 'If you stacked every elephant on earth on top of each other, they would all die.' },
    ],
  },
  {
    id: 'real-facts',
    title: 'Real facts',
    description: 'Pretty sure.',
    facts: [
      {
        text: 'Hockey players use smelling salts to wake themselves up during games. These smell like ammonia. Cat litter also smells like ammonia. Therefore, all hockey players are cat people.',
      },
      { text: 'Saddam Hussein was given a key to the city of Detroit.' },
      {
        text: 'The <a href="https://en.wikipedia.org/wiki/Jimi_Heselden">inventor</a> of the Segway died after driving a Segway off a cliff.',
      },
    ],
  },
];

export default sections;
