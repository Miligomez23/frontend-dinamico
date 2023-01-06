import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditacercadeComponent } from './componentes/acercademi/editacercade.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditformacionacademicaComponent } from './componentes/formacionacademica/editformacionacademica.component';
import { NewformacionacademicaComponent } from './componentes/formacionacademica/newformacionacademica.component';
import { EdithabilidadesComponent } from './componentes/habilidades/edithabilidades.component';
import { NewhabilidadesComponent } from './componentes/habilidades/newhabilidades.component';
import { LoginComponent } from './componentes/login/login.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';

const routes: Routes = [
   {path:'',component:PorfolioComponent},
   {path:'login',component:LoginComponent},
   {path: 'nuevaexp',component:NewExperienciaComponent},
   {path: 'editexp/:id',component:EditExperienciaComponent},
   {path: 'nuevaedu', component:NewformacionacademicaComponent},
   {path: 'editedu/:id', component:EditformacionacademicaComponent},
   {path: 'newskill', component: NewhabilidadesComponent},
   {path: 'editskill/:id', component:EdithabilidadesComponent},
   {path: 'editacercade/:id', component:EditacercadeComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
