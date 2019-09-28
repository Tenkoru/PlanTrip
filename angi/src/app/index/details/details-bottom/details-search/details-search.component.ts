import { FormControl } from "@angular/forms";
import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from "@angular/core";
import { MapsAPILoader } from "@agm/core";
import { Place } from "../../app.place";
import { DetailsService } from '../../details.service';

@Component({
  selector: "app-details-search",
  templateUrl: "./details-search.component.html",
  styleUrls: ["./details-search.component.scss"]
})
export class DetailsSearchComponent implements OnInit {
  @Input() list: Place[];
  @Input() isNotEditable: boolean;
  @Output() searchEmitter = new EventEmitter;

  searchButtonImage: string = "assets/icons/searchIcon.svg";
  addButtonImage: string = "assets/icons/plus.svg";

  addButtonColor: string = "#019287";
  addButtonHoverColor: string = "#ffffff";
  isHovered: boolean = false;
  searchControl: FormControl;

  isInputFilled: boolean;
  inputClasses = {};

  @ViewChild("search", {
    static: true
  })
  searchElementRef: ElementRef;

  mouseenterListener() {
    this.isHovered = true;
  }
  mouseleaveListener() {
    this.isHovered = false;
  }
  searchInputInputHandler() {
    this.inputClasses["input--filled"] = this.searchControl.value
      ? true
      : false;
  }
  apiLoader() {
    this.searchControl = new FormControl();
    const currentComponent = this;
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement
      );
      autocomplete.addListener("place_changed", function() {
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        let updatedList = currentComponent.detailsService.addNewPlace(currentComponent.list, place);
        updatedList.subscribe(val => {
          currentComponent.searchEmitter.emit(val);
        })
      });
    });
  }

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private detailsService: DetailsService
  ) {}

  ngOnInit() {
    this.inputClasses = {
      input: true,
      input__common: true,
      searchForm__input: true,
      "input--filled": this.isInputFilled
    };
    this.apiLoader();
  }
}
