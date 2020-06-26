import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string;
  oneUrl: string;
  urlcom: string;
  post: any;
  comentario: any;

  private headers: HttpHeaders = new HttpHeaders({
    Authorization: 'bearer ' + this.userService.getToken(), 'Content-type': 'application/json'
  });
  private headers2: HttpHeaders = new HttpHeaders({
    Authorization: 'bearer ' + this.userService.getToken()
  });


  constructor(
    private httpClient: HttpClient,
    private userService: UserService) {
    this.post = '';
    this.baseUrl = environment.API_URL + '/posts/';
    this.oneUrl = `${environment.API_URL}/posts/${this.post.continente}`;
    this.urlcom = environment.API_URL + '/comentarios';

  }

  getPosts() {
    return this.httpClient.get(this.baseUrl, { headers: this.headers }).toPromise();

  }


  getpostContinente(pcontinente) {
    return this.httpClient.get(`${environment.API_URL}/posts/${pcontinente}`, { headers: this.headers }).toPromise();

  }


  createPost(pObjeto) {
    return this.httpClient.post(this.baseUrl, pObjeto, { headers: this.headers }).toPromise();
  }

  // ver comentarios
  getComentarios(postId) {
    return this.httpClient.get(`${environment.API_URL}/comentarios/${postId}`, { headers: this.headers }).toPromise();


  }

  // crear comentario
  createCom(pObjeto) {
    return this.httpClient.post(this.urlcom, pObjeto, { headers: this.headers }).toPromise();
  }


  // eliminar post
  deletePost(pId) {
    return this.httpClient.delete(this.baseUrl + pId, { headers: this.headers }).toPromise();

  }
  updateFotoPost(pId, photo) {
    return this.httpClient.post(`${environment.API_URL}/posts/upload-image-post/${pId}`, photo, { headers: this.headers2 }).toPromise();

  }

  meGusta(postID, meGusta) {
    return this.httpClient.put(`${environment.API_URL}/posts/${postID}`, meGusta, { headers: this.headers }).toPromise();
  }




}
