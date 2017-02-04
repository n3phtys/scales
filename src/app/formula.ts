import {Materialvalues} from './materialvalues';

export class Formula {
    constructor(
    public short_name: string,
    public long_name: string,
    public compute: (material: Materialvalues, input: number) => number) {

    }
}
