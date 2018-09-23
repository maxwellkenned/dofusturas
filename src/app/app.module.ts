import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

// Importar Rutas
import { ROUTES } from "./app.routes";

// Importar Componentes
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CercadosComponent } from './components/cercados/cercados.component';
import { NuevoCercadoComponent } from './components/nuevo-cercado/nuevo-cercado.component';
import { MonturasComponent } from './components/monturas/monturas.component';
import { LoginComponent } from './components/login/login.component';
import { CercadoComponent } from './components/cercado/cercado.component';
import { DragopavoComponent } from './components/montura/dragopavo.component';
import { MulaguaComponent } from './components/montura/mulagua.component';
import { VueloceronteComponent } from './components/montura/vueloceronte.component';
import { DragopavosComponent } from './components/monturas/dragopavos.component';
import { MulaguasComponent } from './components/monturas/mulaguas.component';
import { VuelocerontesComponent } from './components/monturas/vuelocerontes.component';
import { RegisterComponent } from './components/register/register.component';

// Importar Servicios
import { AuthGuardService } from './services/auth-guard.service';

// Importar Pipes
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InicioComponent,
    CercadosComponent,
    NuevoCercadoComponent,
    MonturasComponent,
    LoginComponent,
    CercadoComponent,
    DragopavoComponent,
    MulaguaComponent,
    VueloceronteComponent,
    DragopavosComponent,
    MulaguasComponent,
    VuelocerontesComponent,
    KeysPipe,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    RouterModule.forRoot( ROUTES )
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
