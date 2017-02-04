import { Component, OnInit, Input } from '@angular/core';
import { ScalesService } from '../scales.service';
import {Cardpack} from '../cardpack';

@Component({
  selector: 'app-formulacard',
  templateUrl: './formulacard.component.html',
  styleUrls: ['./formulacard.component.css']
})
export class FormulacardComponent implements OnInit {

  @Input() card: Cardpack = null;

  @Input() visibleRemove: Boolean = true; 

  @Input() index: Number = 0;


  constructor(_exampleService: ScalesService) { }


  ngOnInit() {
  }

}
