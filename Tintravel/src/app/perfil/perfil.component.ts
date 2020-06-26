import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  selectedFile: File;
  photo: any;
  perfil: any;
  public isLogged: Boolean = false;

  constructor(
    private userService: UserService,
    private router: Router) {
    this.perfil = "";




  }

  async ngOnInit() {
    this.getOneperfil();


  }



  async borrarUser() {
    const id = this.userService.getidUser();
    const user = await this.userService.deleteUser(id);
    console.log(user);
    this.userService.logoutUser();
    this.isLogged = false;
    this.router.navigate(['/home']);

  }


  async onFileChanged(event) {
    try {
      const id = this.userService.getidUser();

      this.selectedFile = event.target.files[0];
      // console.log(this.selectedFile);
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name);
      console.log(fd);

      event.preventDefault();

      const resultado = await this.userService.updateFoto(id, fd);
    }
    catch (err) {
      console.log(err)
    }
    this.getOneperfil();
  }



  async getOneperfil() {
    const id = this.userService.getidUser();
    const resultado = await this.userService.getOnePerfil(id);
    this.perfil = resultado;
    console.log(this.perfil);

  }

}


