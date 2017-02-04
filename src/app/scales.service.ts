import { Injectable } from '@angular/core';

import { Cardpack } from './cardpack';
import { Formula } from './formula';
import { Language } from './language';
import { Materialvalues} from './materialvalues';

@Injectable()
export class ScalesService {
  static cardmateriallocalkey = 'abc_material_';
  static cardformulalocalkey = 'abc_formula_';
  static cardnumberkey = 'cde';
  static languagelocalkey = 'secde';


  public readonly formulas: Array<Formula> = [];
  public readonly materialvalues: Array<Materialvalues> = [];
  public readonly languages: Array<Language> = [];


  cardlist: Array<Cardpack> = [];
  language: Language;



  constructor() {

    console.log('ScalesService was created');

    const language_string: string = localStorage.getItem(ScalesService.languagelocalkey);
    if (language_string && this.getLanguage(language_string)) {
      this.language = this.getLanguage(language_string);
    } else {
      this.language = this.languages[0];
    }

    /**
     * TODO:
     * load number of cards
     * per card, load both selections
     * reset read integer parameter to 1
     * calculate result
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
  c.formula = localStorage.getItem(ScalesService.cardformulalocalkey + i.toString());
  c.material = localStorage.getItem(ScalesService.cardmateriallocalkey + i.toString());
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

  setLanguage(language: Language): void {
    this.language = language;
    localStorage.setItem(ScalesService.languagelocalkey, language.id);
  }

  setMaterial(index: number, material: Materialvalues): void {
    console.log('setting Material');
    // TODO
  }

  setFormula(index: number, formula: Formula): void {
    console.log('setting Formula');
    // TODO
  }

  setValue(index: number, value: number): void {
    console.log('setting value');
    // TODO
  }

  addCard(): void {
    // TODO: set values
    const c = new Cardpack();
    const i = this.cardlist.length;
    this.cardlist.push(c);
    this.setValue(i, 1);
    localStorage.setItem(ScalesService.cardformulalocalkey + i.toString(), c.formula);
    localStorage.setItem(ScalesService.cardmateriallocalkey + i.toString(), c.material);
  }

  removeCard(): void {
    this.cardlist.pop();
    const n = this.cardlist.length;
    localStorage.setItem(ScalesService.cardnumberkey, n.toString());
  }




}
