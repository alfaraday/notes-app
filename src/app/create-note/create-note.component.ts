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
  constructor() {}
   //Set up the data for our list of notes that will contain every note that we create
   _notes : Note[];

  //Create a new, epmty note, which is referenced in our form
  note = new Note();
  
  //Declare that the form has not been submitted yet.
  submitted = false;

  //Function to submit form, in referenced in our NgSubmit
  submitForm = form => {
    this.submitted = true;
    this._notes.push(this.note);
  };

  ngOnInit() {}

}
