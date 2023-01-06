export class persona{
    id?:number;
    name:string;
    alias:string;
    titulo:string;
    acercademi:string;
    bannerimg:string;
    imgpersona:string;
    nombrecontacto:string;
    contacto:string;
    mail:string;

    constructor(name: string, 
        alias:string,
        titulo:string,
        acercademi:string,
        bannerimg:string,
        imgpersona:string,
        nombrecontacto:string,
        contacto:string,
        mail:string){

        this.name = name;
        this.alias = alias;
        this.titulo = titulo;
        this.acercademi = acercademi;
        this.bannerimg = bannerimg;
        this.imgpersona = imgpersona;
        this.nombrecontacto = nombrecontacto;
        this.contacto = contacto;
        this.mail = mail;
       
    }
}