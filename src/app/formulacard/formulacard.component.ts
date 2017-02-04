import { Component, OnInit, Input } from '@angular/core';
import { ScalesService } from '../scales.service';
import {Cardpack} from '../cardpack';
import { Formula } from '../formula';
import { Materialvalues } from '../materialvalues';

@Component({
  selector: 'app-formulacard',
  templateUrl: './formulacard.component.html',
  styleUrls: ['./formulacard.component.css']
})
export class FormulacardComponent implements OnInit {

  @Input() public card: Cardpack = null;

  @Input() public visibleRemove: boolean = true;

  @Input() public index: number = 0;


  constructor(public scalesService: ScalesService) { }

  formulaSelected(event: any): void {
    const f = event.target.value as number;
    if (f) {
      this.scalesService.setFormula(this.index, this.scalesService.formulas[f]);
    }
  }

  materialSelected(event: any): void {
    const m = event.target.value as number;
    if (m) {
      this.scalesService.setMaterial(this.index, this.scalesService.materialvalues[m]);
    }
  }

  valueChanged(): void {
    this.scalesService.setValue(this.index, this.card.input);
  }

  deletePressed(): void {
    this.scalesService.removeCard();
  }

  ngOnInit() {
  }

}
