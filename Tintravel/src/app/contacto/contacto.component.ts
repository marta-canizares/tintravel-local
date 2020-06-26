import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service.js';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formulario: FormGroup;

  constructor(private userService: UserService) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        // hay patrones de email, de dni, de validar numeros de cuenta del banco
        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      ]),
      mensaje: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      checkbox: new FormControl('', [
        Validators.required,
      ]),
    });


  }



  ngOnInit(): void {
  }


  async recogerDatos() {
    const contacto = {
      name: this.formulario.value.nombre,
      surname: this.formulario.value.apellidos,
      email: this.formulario.value.email,
      mensaje: this.formulario.value.mensaje
    };

    const peticion = await this.userService.createContacto(contacto);

    this.formulario.reset();

  }


}
