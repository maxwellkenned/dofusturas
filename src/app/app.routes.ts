// Importar Componentes
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CercadosComponent } from './components/cercados/cercados.component';
import { NuevoCercadoComponent } from './components/nuevo-cercado/nuevo-cercado.component';
import { MonturasComponent } from './components/monturas/monturas.component';
import { CercadoComponent } from './components/cercado/cercado.component';
import { DragopavoComponent } from './components/montura/dragopavo.component';
import { DragopavosComponent } from './components/monturas/dragopavos.component';
import { MulaguasComponent } from './components/monturas/mulaguas.component';
import { VuelocerontesComponent } from './components/monturas/vuelocerontes.component';
import { RegisterComponent } from './components/register/register.component';

// Importar Rutas
import { Routes, CanActivate } from '@angular/router';

// Importar Servicio
import { AuthGuardService } from './services/auth-guard.service';

export const ROUTES: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'inicio', component: InicioComponent, canActivate:[ AuthGuardService ] },
    { path: 'cercado/:id', component: CercadoComponent, canActivate:[ AuthGuardService ] },
    { path: 'cercados', component: CercadosComponent, canActivate:[ AuthGuardService ] },
    { path: 'cercados/nuevo', component: NuevoCercadoComponent, canActivate:[ AuthGuardService ] },
    { path: 'monturas', component: MonturasComponent,
        children: [
            { path: 'dragopavos', component: DragopavosComponent, canActivate:[ AuthGuardService ] },
            { path: 'mulaguas', component: MulaguasComponent, canActivate:[ AuthGuardService ] },
            { path: 'vuelocerontes', component: VuelocerontesComponent, canActivate:[ AuthGuardService ] }
        ]
    },
    // { path: 'montura/dragopavo/:id', component: DragopavoComponent, canActivate:[ AuthGuardService ] },
    { path: 'montura/dragopavo/:id', component: DragopavoComponent},
    { path: '', pathMatch: 'full', redirectTo: 'inicio'},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];
