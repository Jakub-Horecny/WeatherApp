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
  cityName: string = 'London'

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.onSubmit()
  }

  onSubmit() {
    //console.log(this.cityName)
    this.getData(this.cityName)
    this.cityName = ''
  }

  private getData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response
          //console.log(response)
        }
      });
  }

}
