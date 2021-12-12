import { Component } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  
  constructor(public service:SharedService) {
   
  }
}
