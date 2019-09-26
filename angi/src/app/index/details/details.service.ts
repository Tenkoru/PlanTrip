import { Location } from "./app.location";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { Place } from "./app.place";
import { Region } from "./app.region";

@Injectable({
  providedIn: "root"
})
export class DetailsService {
  constructor() {}
  getParsedDates(dates: number[]): string {
    if (dates) {
      let date1 = dates[0];
      let date2 = dates[1];
      let result: string = "";

      if (date1 && date2 && date1 > date2) {
        const tmp = date1;
        date1 = date2;
        date2 = tmp;
      }

      if (date1) {
        result = moment.unix(date1).format("DD/MMM/YYYY");
      }

      if (date2) {
        result += ` - ${moment.unix(date2).format("DD/MMM/YYYY")}`;
      }
      return result;
    } else {
      return "Дата";
    }
  }
  parseDatesToTimestamp(): number[] {
    return new Array();
  }
  searchForPlaceByName(placeList: Place[], placeName: string) {
    let result: object;
    placeList.find(country => {
      if (country.name === placeName) {
        result = country;
      } else {
        if (typeof country.regions != "undefined") {
          country.regions.find(region => {
            if (region.name === placeName) {
              result = region;
            } else {
              if (typeof region.locations != "undefined") {
                region.locations.find(location => {
                  if (location.name === placeName) {
                    result = location;
                  }
                });
              }
            }
          });
        }
      }
    });
    return result;
  }

  addNewPlace(
    placeList: Place[],
    newPlaceData: google.maps.places.PlaceResult
  ): Place[] {
    if (!newPlaceData.address_components) {
      return;
    }
    let newPlaceList = placeList;
    let isNoLocation: boolean;
    const addressComponents = newPlaceData.address_components;
    const countryName = findType("country");
    let regionName = findType("locality");
    let locationName = newPlaceData.name;
    const placeName = newPlaceData.name;
    let newPlace: Place;
    let newRegion: Region;
    let newLocation: Location;

    function findType(stringToFind: string) {
      let result = "";
      addressComponents.forEach((component, id) => {
        component.types.forEach(type => {
          if (type === stringToFind) {
            result = component.long_name;
          }
        });
      });
      return result;
    }

    if (regionName === placeName || countryName === placeName) {
      isNoLocation = true;
    }

    if (!regionName) {
      regionName = findType("administrative_area_level_1");
      if (!regionName) {
        regionName = findType("administrative_area_level_3");
      } 
    }

    newPlace = {
      name: countryName,
      type: "country",
      regions: []
    };

    if (regionName) {
      newRegion = {
        name: regionName,
        type: "region",
        locations: []
      };
      newPlace.regions.push(newRegion);
    }

    if (!isNoLocation) {
      newLocation = {
        name: locationName,
        type: "location"
      };
      if (typeof newRegion.locations === undefined) {
        newRegion.locations = [];
      }
      newRegion.locations.push(newLocation);
    }

    if (newPlaceList === undefined || !newPlaceList.length) {
      newPlaceList = [];
      newPlaceList.push(newPlace);
    } else {
      //FilterHell
      let isNewCountry = true;
      for (let i = 0; i < newPlaceList.length; i++) {
        if (newPlaceList[i].name === countryName) {
          isNewCountry = false;
          if (newPlaceList[i].regions) {
            let isNewRegion = true;
            for (let j = 0; j < newPlaceList[i].regions.length; j++) {
              if (newPlaceList[i].regions[j].name === regionName) {
                isNewRegion = false;
                if (newPlaceList[i].regions[j].locations && !isNoLocation) {
                  for (let k = 0; k < newPlaceList[i].regions[j].locations.length; k++) {
                    if (newPlaceList[i].regions[j].locations[k].name === locationName) {
                      return newPlaceList;
                    } else {
                      newPlaceList[i].regions[k].locations.push(newLocation);
                    }
                  }
                }
              }
            }
            if (isNewRegion) {
              newPlaceList[i].regions.push(newRegion);
            }
          } else {
            newPlaceList[i].regions = [];
            newPlaceList[i].regions.push(newRegion);
          }
        }
      }
      if (isNewCountry) {
        newPlaceList.push(newPlace);
      }
    }
    return newPlaceList;
  }
  deletePlaceFromList(placeList: Place[], placeToDelete: any): Place[] {
    for (let i = 0; i < placeList.length; i++) {
      if (placeList[i] === placeToDelete) {
        placeList.splice(i, 1);
      } else {
        if (typeof placeList[i].regions != "undefined") {
          for (let j = 0; j < placeList[i].regions.length; j++) {
            if (placeList[i].regions[j] === placeToDelete) {
              placeList[i].regions.splice(j, 1);
            } else {
              if (typeof placeList[i].regions[j].locations != "undefined") {
                for (
                  let k = 0;
                  k < placeList[i].regions[j].locations.length;
                  k++
                ) {
                  if (placeList[i].regions[j].locations[k] === placeToDelete) {
                    placeList[i].regions[j].locations.splice(k, 1);
                  }
                }
              }
            }
          }
        }
      }
    }
    return placeList;
  }
}
