import {Payload} from './Payload';

export class Astronaut implements Payload {
    name: string;
    massKg: number;
    constructor (masskg:number, name: string ){
        this.massKg = masskg;
        this.name = name;
        
    }; 
}