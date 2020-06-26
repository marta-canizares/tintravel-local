import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.component.html',
  styleUrls: ['./perfil-edit.component.css']
})
export class PerfilEditComponent implements OnInit {
  formulario: FormGroup;
  postActualizar: any;

  constructor(private userService: UserService) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl('', [
        Validators.required,
      ]),
      userName: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl(''),
      email: new FormControl('', [
        Validators.required,
        // hay patrones de email, de dni, de validar numeros de cuenta del banco
        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      ]),
      fperfil: new FormControl('', [
        Validators.required,
      ]),
      pvisitados: new FormControl('', [
        Validators.required,
      ]),
      pviajes: new FormControl('', [
        Validators.required,
      ]),
      idiomas: new FormControl('', [
        Validators.required,
      ]),
      dpractico: new FormControl('', [
        Validators.required,
      ]),
      dInteres: new FormControl('', [
        Validators.required,
      ]),

      checkbox: new FormControl('', [
        Validators.required,
      ]),

    });



  }

  ngOnInit(): void {
  }


  async recogerDatos() {
    const perfilActualizado = {
      name: this.formulario.value.nombre,
      surname: this.formulario.value.apellidos,
      email: this.formulario.value.email,
      username: this.formulario.value.userName,
      password: this.formulario.value.password,
      frase_interes: this.formulario.value.fperfil,
      paises_visitados: this.formulario.value.pvisitados,
      proximos_viajes: this.formulario.value.pviajes,
      idiomas: this.formulario.value.idiomas,
      deportes_practico: this.formulario.value.dpractico,
      deportes_interes: this.formulario.value.dInteres
    };

    const id = this.userService.getidUser();

    const peticion = await this.userService.updateProfile(id, perfilActualizado);

    this.formulario.reset();

  }



}
