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
      exhibitId: 1,
      images: "snakeExhibit.jpg"
    },
    {
      id: 2,
      name: "Josephine",
      species: "African Elephant",
      food: "Funnel Cakes",
      exhibitId: 3,
      images: "elephantExhibit.jpg"
    },
    {
      id: 3,
      name: "Larry",
      species: "Lion",
      food: "Candy Corn",
      exhibitId: 2,
      images: "lionExhibit.jpg"
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
      food: "Dippin Dots",
      images: "dippinDots.jpg"
    },
    {
      id: 2,
      name: "A Little Bit Chowder Now",
      food: "Clam Chowder",
      images: "ClamChowder.jpg"
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

