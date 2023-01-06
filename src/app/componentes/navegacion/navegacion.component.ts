import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  IsLogged= false;

  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.IsLogged=true;
  }else{
    this.IsLogged=false;
  }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }

}
