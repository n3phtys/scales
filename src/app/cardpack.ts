import {Materialvalues} from './materialvalues';
import {Formula} from './formula';

export class Cardpack {
    public input: number;
    public formula: Formula;
    public material: Materialvalues;
    public output: number;

    updateOutput(): void {
        console.log("Cardpack updated, contains: ");
        console.log(this.input.toString());
        console.log(this.formula.toString());
        console.log(this.material.toString());

        this.output = this.formula.compute(this.material, this.input);
    }
}
