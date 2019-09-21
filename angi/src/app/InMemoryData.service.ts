import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { User } from "./app.user";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const USERS: User[] = [
      {
        id: 1,
        name: "Александр",
        trips: [
          {
            id: 1,
            title: "Америка",
            date: [1568494800, 1573689600],
            mainImg: "assets/images/usa.jpg",
            description: "Поездка в Америку",
            type: "future",
            rating: 5,
            places: [{}]
          },
          {
            id: 2,
            title: "Венеция",
            date: [1576800000, 1576972800],
            mainImg: "assets/images/Venice.jpg",
            description: "Поездка в Венецию",
            type: "future",
            rating: 4,
            places: [{}]
          },
          {
            id: 3,
            title: "Испания",
            date: [1569888000, 1570233600],
            mainImg: "assets/images/spain.jpg",
            description: "Поездка в Испанию",
            type: "future",
            rating: 3,
            places: [{}]
          },
          {
            id: 4,
            title: "Франция",
            date: [1526256000, 1526083200],
            mainImg: "assets/images/france.jpg",
            description: "Поездка в Францию",
            type: "past",
            rating: 1,
            places: [{}]
          },
          {
            id: 5,
            title: "Лондон",
            date: [1451779200, 1451174400],
            mainImg: "assets/images/london.jpg",
            description: "Поездка в Лондон",
            type: "past",
            places: [{}]
          },
          {
            id: 6,
            title: "Греция",
            date: [1574208000, 1573171200],
            mainImg: "assets/images/greece.jpg",
            description: "Поездка в Грецию",
            type: "deleted",
            rating: 2,
            places: [{}]
          }
        ],
      }
    ];
    return { USERS };
  }
  genId(users: User[]): number {
    return users.length > 0
      ? Math.max(...users.map(user => user.id)) + 1
      : 11;
  }
  constructor() {}
}
