import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioLoginComponent } from './usuarios/usuario-login/usuario-login.component';
import { UsuarioRegisterComponent } from './usuarios/usuario-register/usuario-register.component';
import { InicioInterfazComponent } from './Inicio/inicio-interfaz/inicio-interfaz.component';
import { ContentVideoComponent } from './Inicio/content-video/content-video.component';
import { ContentSecondVideoComponent } from './Inicio/content-second-video/content-second-video.component';
import { ContentThirdVideoComponent } from './Inicio/content-third-video/content-third-video.component';
import { ContentFourthVideoComponent } from './Inicio/content-fourth-video/content-fourth-video.component';
import { ContentFifthVideoComponent } from './Inicio/content-fifth-video/content-fifth-video.component';
import { ContentSixthVideoComponent } from './Inicio/content-sixth-video/content-sixth-video.component';
import { FilterStressComponent } from './Inicio/filter-stress/filter-stress.component';
import { FilterBreathingComponent } from './Inicio/filter-breathing/filter-breathing.component';
import { FilterMentalComponent } from './Inicio/filter-mental/filter-mental.component';
import { FilterSleepComponent } from './Inicio/filter-sleep/filter-sleep.component';
import { FilterGrowthComponent } from './Inicio/filter-growth/filter-growth.component';

const routes: Routes = [
  { path: '', component: UsuarioLoginComponent, pathMatch: 'full' },
  { path: 'registro', component: UsuarioRegisterComponent, pathMatch: 'full' },
  { path: 'inicio', component: InicioInterfazComponent, pathMatch: 'full' },
  { path: 'contenido', component: ContentVideoComponent, pathMatch: 'full'},
  { path: 'second', component: ContentSecondVideoComponent, pathMatch: 'full'},
  { path: 'third', component: ContentThirdVideoComponent, pathMatch: 'full'},
  { path: 'fourth', component: ContentFourthVideoComponent, pathMatch: 'full'},
  { path: 'fifth', component: ContentFifthVideoComponent, pathMatch: 'full'},
  { path: 'sixth', component: ContentSixthVideoComponent, pathMatch: 'full'},
  { path: 'stress', component: FilterStressComponent, pathMatch: 'full'},
  { path: 'breathing', component: FilterBreathingComponent, pathMatch: 'full'},
  { path: 'mental', component: FilterMentalComponent, pathMatch: 'full'},
  { path: 'sleep', component: FilterSleepComponent, pathMatch: 'full'},
  { path: 'growth', component: FilterGrowthComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
