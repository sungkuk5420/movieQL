export const people = [
  {
    id: 1,
    name: "Nicolas",
    age: 18,
    gender: "female"
  },
  {
    id: 2,
    name: "Kim",
    age: 22,
    gender: "female"
  },
  {
    id: 3,
    name: "An",
    age: 27,
    gender: "male"
  },
  {
    id: 4,
    name: "BOBO",
    age: 2,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
};
