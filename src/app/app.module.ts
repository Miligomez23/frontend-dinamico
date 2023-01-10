import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercademiComponent } from './componentes/acercademi/acercademi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FormacionacademicaComponent } from './componentes/formacionacademica/formacionacademica.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AnimacionesComponent } from './componentes/animaciones/animaciones.component';
import { IlustracionesComponent } from './componentes/ilustraciones/ilustraciones.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewformacionacademicaComponent } from './componentes/formacionacademica/newformacionacademica.component';
import { EditformacionacademicaComponent } from './componentes/formacionacademica/editformacionacademica.component';
import { EdithabilidadesComponent } from './componentes/habilidades/edithabilidades.component';
import { NewhabilidadesComponent } from './componentes/habilidades/newhabilidades.component';
import { EditacercadeComponent } from './componentes/acercademi/editacercade.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    BannerComponent,
    AcercademiComponent,
    ExperienciaComponent,
    FormacionacademicaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    AnimacionesComponent,
    IlustracionesComponent,
    FooterComponent,
    LoginComponent,
    PorfolioComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewformacionacademicaComponent,
    EditformacionacademicaComponent,
    EdithabilidadesComponent,
    NewhabilidadesComponent,
    EditacercadeComponent
  ],
  imports: [
    
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),

  ],
  providers: [ interceptorProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }
