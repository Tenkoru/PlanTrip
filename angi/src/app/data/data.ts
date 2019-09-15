import { Trip } from "../interfaces/trip";

export const TRIPS: Trip[] = [
  {
    id: "1",
    title: "Америка",
    date: [1573171200, 1573689600],
    mainImg: "assets/images/usa.jpg",
    description: "Поездка в Америку",
    type: "future",
    rating: 5,
    places: [{}]
  },
  {
    id: "2",
    title: "Венеция",
    date: [1576800000, 1576972800],
    mainImg: "assets/images/Venice.jpg",
    description: "Поездка в Венецию",
    type: "future",
    rating: 4,
    places: [{}]
  },
  {
    id: "3",
    title: "Испания",
    date: [1569888000, 1570233600],
    mainImg: "assets/images/spain.jpg",
    description: "Поездка в Испанию",
    type: "future",
    rating: 3,
    places: [{}]
  },
  {
    id: "4",
    title: "Франция",
    date: [1526256000, 1526083200],
    mainImg: "assets/images/france.jpg",
    description: "Поездка в Францию",
    type: "past",
    rating: 1,
    places: [{}]
  },
  {
    id: "5",
    title: "Лондон",
    date: [1451779200, 1451174400],
    mainImg: "assets/images/london.jpg",
    description: "Поездка в Лондон",
    type: "future",
    rating: 5,
    places: [{}]
  },
  {
    id: "6",
    title: "Греция",
    date: [1574208000, 1573171200],
    mainImg: "assets/images/greece.jpg",
    description: "Поездка в Греция",
    type: "deleted",
    rating: 2,
    places: [{}]
  },
];
