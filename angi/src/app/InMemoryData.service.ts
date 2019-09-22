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
            places: [
              {
                name: "Америка",
                date: [1568494800, 1573689600],
                region: [
                  {
                    name: "Нью Йорк",
                    date: [1568494800, 1573689600],
                    location: [
                      {
                        name: "Центральный парк",
                        date: [1568494800, 1573689600],
                        description:
                          "Центральный парк (Сентрал-парк; англ. Central Park) в Нью-Йорке является одним из крупнейших в США и известнейших в мире. Парк расположен на острове Манхэттен между 59-й и 110-й улицей и Пятой и Восьмой авеню и имеет прямоугольную форму. Длина парка — около 4 километров, ширина — около 800 метров, общая площадь — 3,41 км². Парк посещают примерно 25 миллионов человек в год, он является наиболее посещаемым парком в США, и его показ во многих фильмах и телевизионных шоу сделал парк одним из самых знаменитых в мире. Парк обслуживается Комитетом по охране природы Центрального парка (англ. Central Park Conservancy), частной некоммерческой организацией, которая управляет парком по контракту с Департаментом парков и мест отдыха (англ. Department of Parks and Recreation) города Нью-Йорк."
                      },
                      {
                        name: "Статуя Свободы",
                        date: [1568494123, 1573689345],
                        description:
                          "Ста́туя Свобо́ды (англ. Statue of Liberty, полное название — «Свобо́да, озаря́ющая мир», англ. Liberty Enlightening the World) — колоссальная скульптура в стиле неоклассицизма, расположенная в США на острове Свободы, находящемся в Верхней Нью-Йоркской бухте примерно в 3 километрах к юго-западу от южной оконечности острова Манхэттен. Была сооружена как подарок США от Франции ко Всемирной выставке 1876 года и столетию американской независимости.                          "
                      }
                    ]
                  },
                  {
                    name: "Чикаго",
                    date: [1576800000, 1576972800],
                    location: [
                      {
                        name: "Миллениум-парк",
                        date: [1569888000, 1570233600],
                        description:
                          "Миллениум-парк — общественный парк города Чикаго, входящий в состав паркового комплекса Грант-парк, располагающегося на берегу озера Мичиган. Проектные работы начались в октябре 1997 года."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            title: "Венеция",
            date: [1576800000, 1576972800],
            mainImg: "assets/images/Venice.jpg",
            description: "",
            type: "future",
            rating: 4,
            places: []
          },
          {
            id: 3,
            title: "Испания",
            date: [1569888000, 1570233600],
            mainImg: "assets/images/spain.jpg",
            type: "future",
            rating: 3,
            places: []
          },
          {
            id: 4,
            title: "Франция",
            date: [1526256000, 1526083200],
            mainImg: "assets/images/france.jpg",
            description: "Поездка в Францию",
            type: "past",
            rating: 1,
            places: []
          },
          {
            id: 5,
            title: "Лондон",
            date: [1451779200, 1451174400],
            mainImg: "assets/images/london.jpg",
            description: "Поездка в Лондон",
            type: "past",
            places: []
          },
          {
            id: 6,
            title: "Греция",
            date: [1574208000, 1573171200],
            mainImg: "assets/images/greece.jpg",
            description: "Поездка в Грецию",
            type: "deleted",
            rating: 2,
            places: []
          }
        ]
      }
    ];
    return { USERS };
  }
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
  constructor() {};
}
