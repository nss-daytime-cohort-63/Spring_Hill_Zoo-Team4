/* 
  Module Responsibility: 
    Contain the data for the application and expose
    it via getter functions.
*/

const database = {
  animals: [
    {
      id: 1,
      name: "Phil",
      species: "Snake",
      food: "Popcorn",
      exhibitId: 1
    },
    {
      id: 2,
      name: "Josephine",
      species: "African Elephant",
      food: "Funnel Cakes",
      exhibitId: 3
    },
    {
      id: 3,
      name: "Larry",
      species: "Lion",
      food: "Candy Corn",
      exhibitId: 2
    },
  ],
  exhibits: [
    {
      id: 1,
      name: "Reptile Excursion",
      indoor: true
    },
    {
      id: 2,
      name: "Big Cats of the World",
      indoor: false
    },
    {
      id: 3,
      name: "Just Elephants",
      indoor: false
    }
  ],
  concessions: [
    {
      id: 1,
      name: "Just Dippin' Dots",
      food: "Dippin Dots"
    },
    {
      id: 2,
      name: "johnnys cosmic dogs",
      food: "Hottt Dog"
    },
    {
      id: 3,
      name: "Zoo animal crackers",
      food: "crackers"
    },
    {
      id: 4, 
      name: "Monkey Bananas",
      food: "Banana"
    },
    {
      id: 5,
      name: "Sloth Slurpee",
      food: "Blue Slurpee"
    }
  ]
}

export const getAnimals = () => {
  return database.animals.map((animal) => ({ ...animal }))
}

export const getExhibits = () => {
  return database.exhibits.map((exhibit) => ({ ...exhibit }))
}

export const getConcessions = () => {
  return database.concessions.map((concession) => ({ ...concession }))
}

