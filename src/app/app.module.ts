import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { NotesService } from './notes.service';
import { BaseService } from './base.service';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    CreateNoteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    NotesService, 
    BaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
