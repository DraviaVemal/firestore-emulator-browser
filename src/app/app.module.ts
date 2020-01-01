import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AceEditorModule } from 'ng2-ace-editor';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


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
      projectId: 'Project ID'
    }),
    AngularFirestoreModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    AceEditorModule,
    MatIconModule,
    NgxJsonViewerModule
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
