import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import e from 'express';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  emailForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (event.deltaY < 0) {
      this.scrollToComponent('projects');
    }
  }

  scrollToComponent(component: string) {
    const element = document.getElementById(component);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  sendEmail() {
    const form = JSON.stringify(this.emailForm.value);
    console.log('%c⧭', 'color: #0088cc', this.emailForm);


    emailjs
      .sendForm(
        'service_1srs32e',
        'template_jf8b3tj',
        form,
        '6bmhHNbsejSymRbrl'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('%c⧭', 'color: #00b300', "valid");
          console.log(result.text);
        },
        (error) => {
          console.log('%c⧭', 'color: #ffa640', "err");
          console.log(error.text);
        }
      );
  }

  onSubmit() {

    console.log('%c⧭', 'color: #1d5673', "submitted");
  }

}
