export class Skill {
    id: number;
    habilidad: string;
    porcentaje: string;;
    tiempo: string;

    constructor(habilidad:string, porcentaje: string, tiempo: string){
        this.habilidad = habilidad;
        this.porcentaje = porcentaje;
        this.tiempo = tiempo;
    }
}
