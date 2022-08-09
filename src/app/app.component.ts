import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./services/weather.service";
import {resolve} from "@angular/compiler-cli";
import {WeatherData} from "./models/weather.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WeatherApp';
  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.getWeatherData('Wellington')
      .subscribe({
        next: (response) => {
          this.weatherData = response
          //console.log(response)
        }
      });
  }

}
