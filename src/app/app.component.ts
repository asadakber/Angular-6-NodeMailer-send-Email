import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private db: AngularFireDatabase) {

  }

  onSubmit(form: NgForm){
    const value = form.value;
    const name = value.name;
    const email = value.email;
    const message = value.content;
    const subject = value.subject;

    let formRequest = { name, email, subject, message};
    this.db.list('/messages').push(formRequest);
    form.reset();
  }
}
