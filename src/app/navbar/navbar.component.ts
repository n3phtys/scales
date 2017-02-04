import { Component, OnInit } from '@angular/core';
import { ScalesService } from '../scales.service';
import { Language } from '../language';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public scalesService: ScalesService) { }

  ngOnInit() {
    if (this.scalesService.language == null) {
      document.getElementById('language_modal_btn').click();
    }
  }


  addPressed(): void {
    this.scalesService.addCard();
  }

  languagePressed(language: Language): void {
    this.scalesService.setLanguage(language);
    document.getElementById('language_modal').style.display = 'none';
  }
}
