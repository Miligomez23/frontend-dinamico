import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formacionacademica',
  templateUrl: './formacionacademica.component.html',
  styleUrls: ['./formacionacademica.component.css']
})
export class FormacionacademicaComponent implements OnInit {
  educacion: Educacion[] = [];
  roles: string[];
  isAdmin = false;
  
  constructor(private educacionS: EducacionService, private router:Router, private tokenService: TokenService ) {}
  
  ngOnInit(): void {
    this.cargarEducacion();
    this.roles = this.tokenService.getAuthorities();
  this.roles.forEach(rol => {
    if (rol === 'ROLE_ADMIN') {
      this.isAdmin = true;
    }
  });
  }

  cargarEducacion(): void {
    this.educacionS.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }
  
  delete(id: number){
    if( id != undefined){
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
