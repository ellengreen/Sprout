import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {


  constructor(public httpClient: HttpClient) { 
  }

  getWeather() {
    return this.httpClient.get("http://api.weatherstack.com/current?access_key=04bd8fafbb30ee63c16f382a1d6aa404&units=f&query=63110")
  }
}