import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private userService: UserService) {
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
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),

      email: new FormControl('', [
        Validators.required,
        // hay patrones de email, de dni, de validar numeros de cuenta del banco
        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      ]),
      checkbox: new FormControl('', [
        Validators.required,
      ]),


    });
  }

  ngOnInit(): void {
  }



  async recogerRegistro() {
    console.log(this.formulario.value);

    const obregister = {
      name: this.formulario.value.nombre,
      surname: this.formulario.value.apellidos,
      username: this.formulario.value.userName,
      password: this.formulario.value.password,
      email: this.formulario.value.email,
    };

    const peticion = await this.userService.createRegister(obregister);

    this.formulario.reset();

  }










}
