import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SampleapiService} from './sampleapi.service'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular-app';

  constructor(private _obj:SampleapiService){ }

  getForecastData(){
     //debugger;
     this._obj.getWeatherForecastData().subscribe(data=>{
      console.log(data);
    })

  }
  
}
