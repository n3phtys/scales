import { Component } from '@angular/core';
import { ScalesService } from './scales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works fine!';

  constructor(public scalesService: ScalesService) {

}
}
