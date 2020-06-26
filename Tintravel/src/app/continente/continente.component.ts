import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-continente',
  templateUrl: './continente.component.html',
  styleUrls: ['./continente.component.css']
})
export class ContinenteComponent implements OnInit {
  formulario: FormGroup;
  formulario2: FormGroup;

  selectedFile: File;
  photo: any;

  arrPost: any;
  post: any;

  constructor(
    private postService: PostService,
    private userService: UserService) {

    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      mensaje: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      continente: new FormControl('', [
        Validators.required,
      ])
    });

    this.formulario2 = new FormGroup({
      texto: new FormControl('', [
        Validators.minLength(2)
      ]),
    });

  }

  ngOnInit(): void {
    this.getAllPosts();
  }


  // pintar posts y comentarios 
  async getAllPosts() {
    const resultado: any = await this.postService.getPosts();
    this.arrPost = resultado;

    for (let i = 0; i < this.arrPost.length; i++) {
      this.arrPost[i]["comentarios"] = await this.postService.getComentarios(this.arrPost[i].id);
      console.log(this.arrPost[i])
      // console.log(this.arrPost);
    }
  }



  // con esto creo un post nuevo
  async recogerDatos() {
    console.log(this.formulario.value);

    const obpost = {
      titulo: this.formulario.value.titulo,
      parrafo: this.formulario.value.mensaje,
      continente: this.formulario.value.continente,
      usuario_id: this.userService.getidUser(),
      fecha: (new Date()).toISOString().split('T')[0],
      imagenes: ''
    };

    // console.log(obpost)
    const peticion = await this.postService.createPost(obpost);
    // console.log(peticion);
    this.arrPost.push(peticion);
    this.arrPost.sort((a, b) => a - b);
    this.formulario.reset();
  }


  // pintar comentarios
  async recogerDatosCom(idPost) {
    // console.log(this.formulario2.value);
    const obpost = {
      texto: this.formulario2.value.texto,
      fecha: (new Date()).toISOString().split('T')[0],
      post_id: idPost,
      usuario_id: this.userService.getidUser()
    };

    console.log(obpost)
    const peticion = await this.postService.createCom(obpost);
    // console.log(peticion);

    this.formulario2.reset();
    this.getAllPosts();
  }


  async borrarPost(postid, userid) {
    const userlog = this.userService.getidUser();
    if (userlog == userid) {
      const post = await this.postService.deletePost(postid);
      // console.log(post);
    } else { alert('no puedes borrar el post') }
    this.getAllPosts();
  }



  async onFileChanged(event, postID, userid) {
    try {
      this.selectedFile = event.target.files[0];
      // console.log(this.selectedFile);
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name);
      // console.log(fd)

      event.preventDefault();

      const userlog = this.userService.getidUser();

      if (userlog == userid) {
        const resultado = await this.postService.updateFotoPost(postID, fd);
        // console.log(resultado)
      }
      else { alert('no eres el creador del post') };
    }

    catch (err) {
      console.log(err)
    }

    this.getAllPosts();

  }

  async meGusta(postID) {

    this.arrPost.map(async e => {
      if (e.id === postID) e.me_gusta += 1;

    });

    let meGusta = this.arrPost.find(e => e.id === postID)
    await this.postService.meGusta(postID, meGusta);
    // console.log(meGusta);


  }






}