import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {

  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });

  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {

    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    console.log(this.contactForm.value);

    alert('Message sent successfully!');

    this.contactForm.reset();
    this.submitted = false;
  }
}