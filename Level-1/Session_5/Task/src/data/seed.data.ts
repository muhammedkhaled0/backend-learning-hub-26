import { Microbus } from '../types/microbus.type';
export let fleet: Microbus[] = [
  {
    id: 1,
    driverName: "Ahmed",
    route: "Mohandessin - Ramses",
    farePerSeat: 10,
    seatsAvailable: 5,
    ratings: [{ Hossam: 5 }, { Ali: 4 }]
  },
  {
    id: 2,
    driverName: "Mahmoud",
    route: "Haram - Dokki",
    farePerSeat: 8,
    seatsAvailable: 3,
    ratings: [{ Sara: 5 }]
  },
  {
    id: 3,
    driverName: "Mostafa",
    route: "Nasr City - Ramses",
    farePerSeat: 12,
    seatsAvailable: 6,
    ratings: []
  },
  {
    id: 4,
    driverName: "Khaled",
    route: "Maadi - Tahrir",
    farePerSeat: 9,
    seatsAvailable: 2,
    ratings: [{ Omar: 3 }]
  }
];