import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe(data=> {
      this.weather = data;
      console.log(this.weather);
    });
  }
}
