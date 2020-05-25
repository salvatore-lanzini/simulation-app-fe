import { HttpMethodEnum } from './http-method-enum';
import { Simulation } from '../../model/simulation';

export class HttpSimulation extends Simulation{
    url: string;
    method: HttpMethodEnum;
    body?: string;

    constructor(){
        super()
    }
}