// src/animals.ts
export interface Animal {
  id: string;
  name: string;
  emoji: string;
  sound: string;
  color: string;
  fact: string;
}

export const animals: Animal[] = [
  {
    id: 'lion',
    name: 'Lion',
    emoji: '🦁',
    sound: 'Roar! 🦁',
    color: '#F4A460',
    fact: 'Lions are the only cats that live in groups!'
  },
  {
    id: 'elephant',
    name: 'Elephant',
    emoji: '🐘',
    sound: 'Trumpet! 🐘',
    color: '#708090',
    fact: 'Elephants are the largest land animals!'
  },
  {
    id: 'monkey',
    name: 'Monkey',
    emoji: '🐒',
    sound: 'Ooh ooh ah ah! 🐒',
    color: '#8B7355',
    fact: 'Monkeys are very smart and love to play!'
  },
  {
    id: 'giraffe',
    name: 'Giraffe',
    emoji: '🦒',
    sound: 'Moo? 🦒',
    color: '#DAA520',
    fact: 'Giraffes are the tallest animals!'
  },
  {
    id: 'panda',
    name: 'Panda',
    emoji: '🐼',
    sound: 'Squeak! 🐼',
    color: '#2F4F4F',
    fact: 'Pandas eat bamboo all day long!'
  },
  {
    id: 'dolphin',
    name: 'Dolphin',
    emoji: '🐬',
    sound: 'Click click! 🐬',
    color: '#4682B4',
    fact: 'Dolphins are very friendly and smart!'
  }
];