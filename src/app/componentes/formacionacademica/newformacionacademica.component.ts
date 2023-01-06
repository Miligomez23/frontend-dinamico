import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/app/model/educacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newformacionacademica',
  templateUrl: './newformacionacademica.component.html',
  styleUrls: ['./newformacionacademica.component.css']
})
export class NewformacionacademicaComponent implements OnInit {
  
    curso: string;
    dequien: string;
    finalizado: string;
    img: string;
    titulo: string;

    constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.curso, this.dequien, this.img, this.titulo, this.finalizado);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
