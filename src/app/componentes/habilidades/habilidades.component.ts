import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  skill: Skill[] = [];
  roles: string[];
  isAdmin = false;

  constructor(private skillS: SkillService, private tokenService: TokenService, private router:Router ) {}
  

  ngOnInit(): void {
    this.cargarSkills();
    this.roles = this.tokenService.getAuthorities();
  this.roles.forEach(rol => {
    if (rol === 'ROLE_ADMIN') {
      this.isAdmin = true;
    }
  });
}

  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}
