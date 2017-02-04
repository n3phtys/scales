import { Component, OnInit } from '@angular/core';
import { ScalesService } from '../scales.service';
import { Language } from '../language';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _exampleService: ScalesService) { }

  ngOnInit() {
  }


  addPressed(): void {
    this._exampleService.addCard();
  }

  languagePressed(language: Language): void {
    this._exampleService.setLanguage(language);
  }
}
