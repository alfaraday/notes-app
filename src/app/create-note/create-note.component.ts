import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Note } from "../Note";
import { NOTES } from '../mock-data';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  constructor() { }
  _notes : Note[];

  note = new Note();
  
  submitted = false;

  submitForm = form => {
    this.submitted = true;
    this._notes.push(this.note);
  };

  ngOnInit() {}

}
