import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers: HttpHeaders = new HttpHeaders({ Authorization: 'bearer ' + this.getToken(), 'Content-type': 'application/json' });
  private headers2: HttpHeaders = new HttpHeaders({
    Authorization: 'bearer ' + this.getToken()
  });


  constructor(
    private httpClient: HttpClient,
    private router: Router) {


  }


  async loginUser(login) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };
    const resultado = await this.httpClient
      .post(environment.API_URL + '/user/login', login, httpOptions).toPromise();
    this.router.navigate(['/posts']);

    this.setlocalStorage(resultado['token'], resultado['usuario']);
    console.log(resultado['token'], resultado['usuario']);

  }

  // recoger el token donde lo vaya a utilizar y hacer otro para coger el id
  getToken() {
    const accessToken = localStorage.getItem('accessToken');
    if (!(accessToken === undefined || accessToken === null)) {
      return accessToken;
    } else {
      return null;
    }
  }

  getidUser() {
    const accessToken = localStorage.getItem('id');
    if (!(accessToken === undefined || accessToken === null)) {
      return accessToken;
    } else {
      return null;
    }
  }


  setlocalStorage(token, id): void {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('id', id);
  }

  logoutUser() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('id');
  }


  createRegister(pObjeto) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };
    return this.httpClient.post(environment.API_URL + '/user/registro', pObjeto, httpOptions).toPromise();
  }


  getOnePerfil(pId) {
    return this.httpClient.get(`${environment.API_URL}/user/${pId}`, { headers: this.headers }).toPromise();

  }

  updateProfile(pId, perfil) {
    return this.httpClient.put(`${environment.API_URL}/perfil/${pId}`, perfil, { headers: this.headers }).toPromise();
  }


  deleteUser(pId) {
    return this.httpClient.delete(`${environment.API_URL}/user/${pId}`, { headers: this.headers }).toPromise();
  }


  createContacto(pObjeto) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };
    return this.httpClient.post(environment.API_URL + '/contacto', pObjeto, httpOptions).toPromise();
  }


  updateFoto(pId, photo) {
    return this.httpClient.post(`${environment.API_URL}/user/upload-image-user/${pId}`, photo, { headers: this.headers2 }).toPromise();

  }



}
