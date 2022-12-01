import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-formacionacademica',
  templateUrl: './formacionacademica.component.html',
  styleUrls: ['./formacionacademica.component.css']
})
export class FormacionacademicaComponent implements OnInit {
  formacionlist:any;
  constructor(private datosPorfolio:PorfolioService) {}
  
    ngOnInit(): void {
      this.datosPorfolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.formacionlist=data.formacion;
      });
    }
  }
