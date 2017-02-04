import { Injectable } from '@angular/core';

import { Cardpack } from './cardpack';
import { Formula } from './formula';
import { Language } from './language';
import { Materialvalues } from './materialvalues';

@Injectable()
export class ScalesService {
  static cardmateriallocalkey = 'abc_material_';
  static cardformulalocalkey = 'abc_formula_';
  static cardnumberkey = 'cde';
  static languagelocalkey = 'secde';


  public readonly formulas: Array<Formula> = [
    new Formula('gramm to ml', 'gramm to ml desc', (mat: Materialvalues, input: number) => input / mat.density),
    new Formula('essloefel to ml', 'essloefel to ml desc', (mat: Materialvalues, input: number) => input * 15),
  ];
  public readonly materialvalues: Array<Materialvalues> = [
    new Materialvalues('Flour', 'Flour', 0.7),
    new Materialvalues('Sugar', 'Sugar', 0.75)
  ];
  public readonly languages: Array<Language> = [
    new Language('english', 'https://i2.wp.com/expatessentials.net/wp-content/uploads/2014/12/US-UK_Flag.jpg?fit=2500%2C1325'),
    new Language('german', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png')
  ];


  cardlist: Array<Cardpack> = [];
  language: Language;



  constructor() {

    console.log('ScalesService was created');

    const language_string: string = localStorage.getItem(ScalesService.languagelocalkey);
    if (language_string && this.getLanguage(language_string)) {
      this.language = this.getLanguage(language_string);
    } else {
      this.language = null; // this.languages[0];
    }

    /**
     * load number of cards
     * per card, load both selections
     * reset read integer parameter to 1 & calculate result
     */

    const n_string: string = localStorage.getItem(ScalesService.cardnumberkey);

    let n = 1;
    if (n_string) {
      const z = parseInt(n_string, 10);
      if (z > 0) {
        n = z;
      }
    }


    let i = 0;

    this.cardlist = [];
    for (i = 0; i < n; i++) {
      const c = new Cardpack();
      let form_string = localStorage.getItem(ScalesService.cardformulalocalkey + i.toString());
      let mat_string = localStorage.getItem(ScalesService.cardmateriallocalkey + i.toString());
      if (form_string && this.getFormula(form_string)) {
        c.formula = this.getFormula(form_string);
        c.formula_idx = this.indexOfFormula(form_string);
      } else {
        c.formula = this.formulas[0];
        c.formula_idx = 0;
      }
      if (mat_string && this.getMaterial(mat_string)) {
        c.material = this.getMaterial(mat_string);
        c.material_idx = this.indexOfMaterial(mat_string);
      } else {
        c.material = this.materialvalues[0];
        c.material_idx = 0;
      }

      this.cardlist.push(c);
      this.setValue(i, 1);
    }


  }


  getLanguage(language_id: string): Language {
    let i = 0;
    for (i = 0; i < this.languages.length; i++) {
      if (this.languages[i].id === language_id) {
        return this.languages[i];
      }
    }
    return null;
  }

  getMaterial(short_name: string): Materialvalues {
    let i = 0;
    for (i = 0; i < this.materialvalues.length; i++) {
      if (this.materialvalues[i].short_name === short_name) {
        return this.materialvalues[i];
      }
    }
    return null;
  }

  getFormula(short_name: string): Formula {
    let i = 0;
    for (i = 0; i < this.formulas.length; i++) {
      if (this.formulas[i].short_name === short_name) {
        return this.formulas[i];
      }
    }
    return null;
  }

  indexOfMaterial(short_name: string): number {
    let i = 0;
    for (i = 0; i < this.materialvalues.length; i++) {
      if (this.materialvalues[i].short_name === short_name) {
        return i;
      }
    }
    return -1;
  }

  indexOfFormula(short_name: string): number {
    let i = 0;
    for (i = 0; i < this.formulas.length; i++) {
      if (this.formulas[i].short_name === short_name) {
        return i;
      }
    }
    return -1;
  }

  setLanguage(language: Language): void {
    console.log('setting Language');
    this.language = language;
    localStorage.setItem(ScalesService.languagelocalkey, language.id);
  }

  setMaterial(index: number, material: Materialvalues): void {
    if (material) {
    console.log('setting Material');
    this.cardlist[index].material = material;
    this.cardlist[index].material_idx = this.indexOfMaterial(material.short_name);
    localStorage.setItem(ScalesService.cardmateriallocalkey + index.toString(), material.short_name);
    this.cardlist[index].updateOutput();
    }
  }

  setFormula(index: number, formula: Formula): void {
    if (formula) {
    console.log('setting Formula to ' + formula.short_name );
    this.cardlist[index].formula = formula;
    this.cardlist[index].formula_idx = this.indexOfFormula(formula.short_name);
    localStorage.setItem(ScalesService.cardformulalocalkey + index.toString(), formula.short_name);
    this.cardlist[index].updateOutput();
    }
  }

  setValue(index: number, value: number): void {
    console.log('setting value');
    if (value) {
      this.cardlist[index].input = value;
      this.cardlist[index].updateOutput();
    }
  }

  addCard(): void {
    const c = new Cardpack();
    const i = this.cardlist.length;
    c.formula = this.formulas[0];
    c.formula_idx = 0;
    c.material = this.materialvalues[0];
    c.material_idx = 0;
    this.cardlist.push(c);
    const n = this.cardlist.length;
    localStorage.setItem(ScalesService.cardnumberkey, n.toString());
    this.setValue(i, 1);
    localStorage.setItem(ScalesService.cardformulalocalkey + i.toString(), c.formula.short_name);
    localStorage.setItem(ScalesService.cardmateriallocalkey + i.toString(), c.material.long_name);
  }

  removeCard(): void {
    this.cardlist.pop();
    const n = this.cardlist.length;
    localStorage.setItem(ScalesService.cardnumberkey, n.toString());
  }




}
