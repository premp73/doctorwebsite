import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './appointment.html',
  styleUrls: ['./appointment.scss']
})
export class Appointment {

  appointmentForm: FormGroup;
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
    'Eye Care'
  ];

  constructor(private fb: FormBuilder) {

    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      doctor: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      message: ['']
    });
  }

  get f() {
    return this.appointmentForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.appointmentForm.invalid) {
      return;
    }

    console.log('Appointment Data:', this.appointmentForm.value);

    alert('Appointment Booked Successfully!');

    this.appointmentForm.reset();
    this.submitted = false;
  }
}