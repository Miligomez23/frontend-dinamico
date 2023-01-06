import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-newhabilidades',
  templateUrl: './newhabilidades.component.html',
  styleUrls: ['./newhabilidades.component.css']
})
export class NewhabilidadesComponent implements OnInit  {
  habilidad: string;
  porcentaje: string;
  tiempo: string;

  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.habilidad, this.porcentaje,this.tiempo);
    this.skillS.save(skill).subscribe(
      data => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la skill");
        this.router.navigate(['']);
      }
    )
  }
}
