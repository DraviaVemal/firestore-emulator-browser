import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { MatToolbarModule, MatInputModule, MatButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      projectId: 'project ID'
    }),
    AngularFirestoreModule.enablePersistence({
      synchronizeTabs: true
    }),
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [{
    provide: FirestoreSettingsToken,
    useValue: {
      host: 'localhost:8080',
      ssl: false
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
