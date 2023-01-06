import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
persona: persona = null;
roles: string[];
isAdmin = false;

constructor(public personaService: PersonaService, private router:Router, 
  private tokenService: TokenService) {}

ngOnInit(): void {
  this.cargarPersona();
  this.roles = this.tokenService.getAuthorities();
this.roles.forEach(rol => {
  if (rol === 'ROLE_ADMIN') {
    this.isAdmin = true;
  }
});
}
cargarPersona(){
  this.personaService.detail(1).subscribe(data => {this.persona = data}
  )
}
}

