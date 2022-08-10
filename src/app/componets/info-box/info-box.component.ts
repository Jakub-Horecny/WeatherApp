import { Component, OnInit } from '@angular/core';
import {WeatherData} from "../../models/weather.model";
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {
  weatherData?: WeatherData;
  cityName: string = 'Wellington'

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getData(this.cityName)
  }
  public getData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response
          //console.log(response)
        }
      });
  }
}
