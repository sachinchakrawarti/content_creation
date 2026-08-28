// find_animal/data/animals.js
export const animals = [
  {
    id: 'lion',
    name: 'Lion',
    emoji: '🦁',
    color: '#F4A460',
    fact: 'Lions are the only cats that live in groups!'
  },
  {
    id: 'elephant',
    name: 'Elephant',
    emoji: '🐘',
    color: '#708090',
    fact: 'Elephants are the largest land animals!'
  },
  {
    id: 'monkey',
    name: 'Monkey',
    emoji: '🐒',
    color: '#8B7355',
    fact: 'Monkeys are very smart and love to play!'
  },
  {
    id: 'giraffe',
    name: 'Giraffe',
    emoji: '🦒',
    color: '#DAA520',
    fact: 'Giraffes are the tallest animals!'
  },
  {
    id: 'panda',
    name: 'Panda',
    emoji: '🐼',
    color: '#2F4F4F',
    fact: 'Pandas eat bamboo all day long!'
  },
  {
    id: 'dolphin',
    name: 'Dolphin',
    emoji: '🐬',
    color: '#4682B4',
    fact: 'Dolphins are very friendly and smart!'
  },
  {
    id: 'fox',
    name: 'Fox',
    emoji: '🦊',
    color: '#E67E22',
    fact: 'Foxes are very clever animals!'
  },
  {
    id: 'rabbit',
    name: 'Rabbit',
    emoji: '🐰',
    color: '#FFB6C1',
    fact: 'Rabbit can jump very high!'
  }
];

// Get random animals for game
export const getRandomAnimals = (count = 6) => {
  const shuffled = [...animals].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Get animal by id
export const getAnimalById = (id) => {
  return animals.find(animal => animal.id === id);
};