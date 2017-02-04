import { Component, OnInit } from '@angular/core';
import { ScalesService } from '../scales.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(_exampleService: ScalesService) { }

  ngOnInit() {
  }

}
