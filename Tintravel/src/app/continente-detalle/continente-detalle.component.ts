import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-continente-detalle',
  templateUrl: './continente-detalle.component.html',
  styleUrls: ['./continente-detalle.component.css']
})
export class ContinenteDetalleComponent implements OnInit {
  formulario2: FormGroup;


  arrPost: any;
  post: any;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService) {

    this.formulario2 = new FormGroup({
      texto: new FormControl('', [
        Validators.minLength(2)
      ]),
    });

  }


  ngOnInit(): void {
    this.getContinente();
  }

  getContinente() {
    this.activatedRoute.params.subscribe(async params => {
      const continente = params.continente;
      // console.log(params.continente);
      const resultado = await this.postService.getpostContinente(continente);
      this.arrPost = resultado;
      // console.log(resultado);

      for (let i = 0; i < this.arrPost.length; i++) {
        this.arrPost[i]["comentarios"] = await this.postService.getComentarios(this.arrPost[i].id);
        // console.log(this.arrPost);
      }

    });
  }

  async borrarPost(postid, userid) {
    const userlog = this.userService.getidUser();
    if (userlog == userid) {
      const post = await this.postService.deletePost(postid);
      // console.log(post);
    } else { alert('no puedes borrar el post') }
    this.getContinente();
  }


  // crear un comentario
  async recogerDatos(idPost) {
    // console.log(this.formulario2.value);
    const obpost = {
      texto: this.formulario2.value.texto,
      fecha: (new Date()).toISOString().split('T')[0],
      post_id: idPost,
      usuario_id: this.userService.getidUser()
    };

    console.log(obpost);
    const peticion = await this.postService.createCom(obpost);
    // console.log(peticion);

    this.formulario2.reset();
    this.getContinente();
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
