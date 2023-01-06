import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];
  roles: string[];
  isAdmin = false;
  
  constructor(private sExperiencia: SExperienciaService, private router:Router, 
    private tokenService: TokenService) {}
  
    //isLogged = false;
    

    ngOnInit(): void {
      this.cargarExperiencia();
      this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });


     // if (this.tokenService.getToken()) {
     // this.isLogged = true;
     // } else{
      //  this.isLogged = false;
      //}
    }
    
    cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data;})
  }
  delete(id?: number){
    if(id !== undefined){
      this.sExperiencia.delete(id).subscribe(
        data=>{
          this.cargarExperiencia();
        }, err =>{
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
 