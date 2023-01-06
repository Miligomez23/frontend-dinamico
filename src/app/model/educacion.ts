export class Educacion {
    id?: number;
    curso: string;
    dequien: string;
    finalizado: string;
    img: string;
    titulo: string;

    constructor(curso: string, dequien: string, finalizado: string, img: string, titulo: string){
        this.curso = curso;
        this.dequien = dequien;
        this.finalizado = finalizado;
        this.img = img;
        this.titulo = titulo;
    }

}
