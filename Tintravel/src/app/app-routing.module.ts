import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { ContinenteComponent } from './continente/continente.component';
import { LoginComponent } from './login/login.component';
import { ContinenteDetalleComponent } from './continente-detalle/continente-detalle.component';
import { PerfilEditComponent } from './perfil-edit/perfil-edit.component';
import { LoginGuard } from './login.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'contacto', component: ContactoComponent },

  { path: 'posts', component: ContinenteComponent, canActivate: [LoginGuard] },
  { path: 'posts/:continente', component: ContinenteDetalleComponent, canActivate: [LoginGuard] },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [LoginGuard] },
  { path: 'perfil/editar', component: PerfilEditComponent, canActivate: [LoginGuard] },

  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
