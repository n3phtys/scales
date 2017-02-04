import {Materialvalues} from './materialvalues';

export class Formula {
    short_name: string;
    long_name: string;
    compute: (material: Materialvalues, input: number) => number;
}
