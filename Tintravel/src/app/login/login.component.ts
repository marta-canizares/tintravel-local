import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  isLogged: false;

  constructor(private userService: UserService) {
    this.formulario = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
    });

  }

  ngOnInit(): void {
  }



  async recogerLogin() {
    const login = {
      username: this.formulario.value.username,
      password: this.formulario.value.password
    };

    const resultado = await this.userService.loginUser(login);

    this.formulario.reset();


  }


}
