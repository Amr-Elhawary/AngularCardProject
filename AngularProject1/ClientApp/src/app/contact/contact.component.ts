import { Component, OnInit } from "@angular/core"
import { FormGroup, FormControl, Validators } from "@angular/forms"

@Component({
  selector: "contact-us",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {

  Contactform: FormGroup | undefined;

  ngOnInit() {
    this.Contactform = new FormGroup({
      name: new FormControl('test', Validators.required),
      email: new FormControl('a@b.c', Validators.required),
      phone: new FormControl(''),
      subjectType: new FormControl('Feedback'),
      subject: new FormControl(''),
    })
    //console.log(this.Contactform.value);
  }

  onSubmit() {
    console.log(this.Contactform!.value);
  }
}
