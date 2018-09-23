import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cercado, Montura, Usuario } from '../models/monturas';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class MonturasService {

  selectedCercado: Cercado;
  cercados: Cercado[];
  errorcercados:boolean = false;

  selectedMontura: Montura;
  monturas: Montura[];

  selectedUsuario: Usuario;
  usuarios: Usuario[];

  uid:string = "";
  sesionactiva:boolean = false;
  errorconexionsesion:boolean = false;
  usuarionoecontrado:boolean = false;

  URL:string = "https://dofusturas.firebaseio.com/";

  constructor( private http:HttpClient, public afAuth: AngularFireAuth) {
    this.selectedCercado = new Cercado();
    this.selectedMontura = new Montura();
    this.selectedUsuario = new Usuario();
  }

  // -------------- Cercado --------------
  getCercados(){
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.get( `${this.URL}cercados.json`, {headers})
    .pipe(
      map( res => res)
    )
  }

  getCercado( key$:string ){
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.get( `${this.URL}cercados/${key$}.json`, {headers})
    .pipe(
      map( res => res )
    )
  }

  postCercado(Cercado:Cercado){
    let body = JSON.stringify( Cercado );
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.post( `${this.URL}cercados.json`, body, {headers})
      .pipe(
        map( res => {
          console.log(res);
          return res;
        })
      );
  }

  // putCercado(Cercado: Cercado){
  //   return this.http.put(this.URL_CERCADO + `/${Cercado._id}`, Cercado);
  // }

  deleteCercado( key$:string ){
    let url = `${this.URL}cercados/${key$}.json`;
    return this.http.delete(url)
      .pipe(
        map( res => res )
      )
  }

  // -------------- DRAGOPAVOS --------------
  getDragopavos(){
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.get( `${this.URL}dragopavos.json`, {headers})
    .pipe(
      map( res => res )
    )
  }

  getDragopavo( key$:string ){
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.get( `${this.URL}dragopavos/${key$}.json`, {headers})
    .pipe(
      map( res => res )
    )
  }

  postDragopavo(Montura:Montura){
    let body = JSON.stringify( Montura );
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.post( `${this.URL}dragopavos.json`, body, {headers})
      .pipe(
        map( res => {
          console.log(res);
          return res;
        })
      );
  }

  deleteDragopavo( key$:string ){
    let url = `${this.URL}dragopavos/${key$}.json`;
    return this.http.delete(url)
      .pipe(
        map( res => res )
      )
  }

  putDragopavo(Montura:Montura, key$:string){
    let body = JSON.stringify( Montura );

    let url = `${this.URL}/dragopavos/${key$}.json`;

    return this.http.put( url , body)
      .pipe(
        map( res => {
          console.log(res);
          return res;
        })
      );
  }

  // -------------- MULAGUAS --------------
  getMulaguas(){
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.get( `${this.URL}mulaguas.json`, {headers})
    .pipe(
      map( res => res )
    )
  }

  getMulagua( key$:string ){
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.get( `${this.URL}mulaguas/${key$}.json`, {headers})
    .pipe(
      map( res => res )
    )
  }

  postMulagua(Montura:Montura){
    let body = JSON.stringify( Montura );
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.post( `${this.URL}mulaguas.json`, body, {headers})
      .pipe(
        map( res => {
          console.log(res);
          return res;
        })
      );
  }

  deleteMulagua( key$:string ){
    let url = `${this.URL}mulaguas/${key$}.json`;
    return this.http.delete(url)
      .pipe(
        map( res => res )
      )
  }

  // -------------- VUELOCERONTES --------------
  getVuelocerontes(){
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.get( `${this.URL}vuelocerontes.json`, {headers})
    .pipe(
      map( res => res )
    )
  }

  getVueloceronte( key$:string ){
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.get( `${this.URL}vuelocerontes/${key$}.json`, {headers})
    .pipe(
      map( res => res )
    )
  }

  postVueloceronte(Montura:Montura){
    let body = JSON.stringify( Montura );
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.post( `${this.URL}vuelocerontes.json`, body, {headers})
      .pipe(
        map( res => {
          console.log(res);
          return res;
        })
      );
  }

  deleteVueloceronte( key$:string ){
    let url = `${this.URL}vuelocerontes/${key$}.json`;
    return this.http.delete(url)
      .pipe(
        map( res => res )
      )
  }

  // -------------- Usuarios --------------
  getUsuarios(){
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.get( `${this.URL}usuarios.json`, {headers})
    .pipe(
      map( res => res )
    )
  }

  getUsuario( key$:string ){
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.get( `${this.URL}usuarios/${key$}.json`, {headers})
    .pipe(
      map( res => res )
    )
  }

  postUsuario(Usuario:Usuario){
    let body = JSON.stringify( Usuario );
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.post( `${this.URL}usuarios.json`, body, {headers})
      .pipe(
        map( res => {
          console.log(res);
          return res;
        })
      );
  }

  // putUsuario(Usuario: Usuario){
  //   return this.http.put(this.URL_USUARIO + `/${Usuario._id}`, Usuario);
  // }

  // deleteUsuario(_id: string){
  //   return this.http.delete(this.URL_USUARIO + `/${_id}`);
  // }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        console.log(res);
        resolve(res);
      }, err => reject(err))
    })
  }

  doLogin(value){
    this.sesionactiva = false;
    this.errorconexionsesion = false;
    this.usuarionoecontrado = false;  

    return new Promise<any>((resolve, reject) => {
      auth().signInAndRetrieveDataWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
        this.uid = res.user.uid;
        this.sesionactiva = true;
        this.errorconexionsesion = false;
        this.usuarionoecontrado = false;
      }, err => {
        reject(err);
        if(err.code == "auth/user-not-found"){
          this.sesionactiva = false;
          this.errorconexionsesion = false;
          this.usuarionoecontrado = true;
        }
        if(err.code == "auth/invalid-email"){
          this.sesionactiva = false;
          this.usuarionoecontrado = false;
          this.errorconexionsesion = true;
        }
      })
    })
  }

  dologout() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signOut()
      .then(res => {
        resolve(res);
        this.uid = "";
        this.sesionactiva = false;
      }, err => reject(err))
    })
  }

}
