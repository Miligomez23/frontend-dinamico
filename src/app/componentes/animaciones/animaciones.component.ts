import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-animaciones',
  templateUrl: './animaciones.component.html',
  styleUrls: ['./animaciones.component.css']
})
export class AnimacionesComponent implements OnInit {
  animacioneslist:any;
  giftlist:any;
  constructor(private datosPorfolio:PorfolioService) {}
  
    ngOnInit(): void {
      this.datosPorfolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.animacioneslist=data.animaciones;
        this.giftlist=data.gift;
      });
    }
  }
