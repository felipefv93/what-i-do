import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //propiedades
  user:Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  productos:FirebaseListObservable<any[]>;
  producto:any = {};

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase){
    this.items = af.list('/messages',{
      query:{
        limitToLast:50
      }
    });
    this.productos = af.list('/productos');
    this.user = this.afAuth.authState;
  }

  login(){
    this.afAuth.auth.signInAnonymously();
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  Send(desc: string){
    this.items.push({message: desc});
    this.msgVal='';
  }

  borrar(){
    this.producto.Estado = true;
    this.producto.FechaCreacion = new Date().getTime();
    this.producto.RutaImagen = "";
    this.productos.push(this.producto);
    this.producto = {};
    console.log(this.producto);
  }

}
