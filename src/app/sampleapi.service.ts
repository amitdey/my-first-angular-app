import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class SampleapiService {

  constructor(private _obj:HttpClient) { }

  getWeatherForecastData(){
    return this._obj.get("http://localhost:5162/WeatherForecast");
  }
}
