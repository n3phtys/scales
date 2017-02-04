import {Materialvalues} from './materialvalues';
import {Formula} from './formula';

export class Cardpack {
    input: number;
    formula: Formula;
    material: Materialvalues;
    output: number;

    updateOutput(): void {
        console.log("Cardpack updated, contains: ");
        console.log(this.input.toString());
        console.log(this.formula.toString());
        console.log(this.material.toString());

        this.output = this.formula.compute(this.material, this.input);
    }
}
