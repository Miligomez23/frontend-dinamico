export class Experiencia {
    id? : number;
    lugar : string;
    donde : string ;
    puesto : string ;
    actividades : string ;
    img : string;

    constructor( lugar: string, donde: string, puesto: string, actividades: string, img: string ) {
        this.lugar = lugar;
        this.donde = donde;
        this.puesto = puesto;
        this.actividades = actividades;
        this.img = img;

    }
}