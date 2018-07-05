import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Note } from "../models";
import { NOTES } from '../mock-data';
import { NotesService} from '../notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  constructor(private notesService: NotesService) {}

  //Create a new, epmty note, which is referenced in our form
  note = new Note();
  //Declare that the form has not been submitted yet.
  submitted = false;
  //Import mock data to the notes list.
  _notes = NOTES;

  submitForm = form => {
    //Declare that the form has been submitted.
    this.submitted = true;
    this.notesService.addNote(this.note)
        .subscribe(new_note  => {
            this._notes.push(new_note);
            console.log("notes", this._notes, "note", new_note);
        });
  }

  deleteNote(id, e) : void {
    this.notesService.deleteNote(id).subscribe(() => console.log("Note deleted"));
    this._notes = this._notes.filter(function( obj ) {
      return obj.id !== id;
    });
  }

  ngOnInit() {}
}
