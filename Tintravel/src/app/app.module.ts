import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContinenteComponent } from './continente/continente.component';
import { ContinenteDetalleComponent } from './continente-detalle/continente-detalle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilEditComponent } from './perfil-edit/perfil-edit.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    ContinenteComponent,
    ContinenteDetalleComponent,
    PerfilEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
