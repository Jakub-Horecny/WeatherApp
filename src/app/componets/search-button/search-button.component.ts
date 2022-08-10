import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import {WeatherData} from "../../models/weather.model";
import {InfoBoxComponent} from "../info-box/info-box.component";

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.css']
})
export class SearchButtonComponent implements OnInit {
  cityName: string = 'Wellington'

  constructor(public box: InfoBoxComponent) { }

  ngOnInit(): void {
    this.onSubmit()
  }

  // asi nepotrebujem ked už to urobím iba na komponenty
  onSubmit() {
    this.box.getData(this.cityName)
    this.cityName = ''
  }
}
