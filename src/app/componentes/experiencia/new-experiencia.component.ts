import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  lugar: string='';
  donde : string = '';
  puesto : string = '';
  actividades : string = '';
  img : string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router){}
  ngOnInit(): void {
    
  }
  onCreate(): void {
    const expe = new Experiencia (this.lugar, this.donde, this.puesto, this.actividades, this.img);
      this.sExperiencia.save(expe).subscribe(
        data =>{
          alert("Experiencia añadida");
          this.router.navigate(['']); 
      }, err =>{
          alert('fallo');
          this.router.navigate(['']);
      }
      )
  }
}
