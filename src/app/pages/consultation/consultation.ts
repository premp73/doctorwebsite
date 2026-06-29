import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './consultation.html',
  styleUrls: ['./consultation.scss']
})
export class Consultation {

  consultationForm: FormGroup;
  submitted = false;

  doctors = [
    'Dr. John Smith',
    'Dr. Emily Johnson',
    'Dr. Michael Brown',
    'Dr. Sarah Wilson'
  ];

  departments = [
    'Cardiology',
    'Neurology',
    'Dental',
    'Orthopedic',
    'General Physician'
  ];

  types = ['Video Call', 'Audio Call', 'Chat'];

  constructor(private fb: FormBuilder) {

    this.consultationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      doctor: ['', Validators.required],
      department: ['', Validators.required],
      type: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      message: ['']
    });
  }

  get f() {
    return this.consultationForm.controls;
  }

  onSubmit() {

    this.submitted = true;

    if (this.consultationForm.invalid) {
      return;
    }

    console.log(this.consultationForm.value);

    alert('Consultation Request Sent Successfully!');

    this.consultationForm.reset();
    this.submitted = false;
  }
}