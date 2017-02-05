import {Materialvalues} from './materialvalues';
import {Formula} from './formula';

export class Cardpack {
    public input: number;
    public formula: Formula;
    public formula_idx: number;
    public material: Materialvalues;
    public material_idx: number;
    public output: number;

    updateOutput(): void {
        this.output = this.formula.compute(this.material, this.input);
    }
}
