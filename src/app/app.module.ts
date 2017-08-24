import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAUeHaMLL5NGJ6T9EiJe6ouCE4IBMJiLN4",
  authDomain: "paginaweb-b7a9c.firebaseapp.com",
  databaseURL: "https://paginaweb-b7a9c.firebaseio.com",
  projectId: "paginaweb-b7a9c",
  storageBucket: "paginaweb-b7a9c.appspot.com",
  messagingSenderId: "142362252653"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
