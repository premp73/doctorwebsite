import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-neurology',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './neurology.html',
  styleUrls: ['./neurology.scss']
})
export class NeurologyComponent {

  symptoms = [
    'Frequent headaches',
    'Memory loss',
    'Seizures',
    'Dizziness',
    'Numbness or tingling',
    'Difficulty speaking'
  ];

  treatments = [
    'EEG (Brain test)',
    'MRI / CT Scan',
    'Stroke Management',
    'Epilepsy Treatment',
    'Nerve Disorder Therapy',
    'Neuro Surgery Consultation'
  ];

  doctor = {
    name: 'Dr. Emily Johnson',
    experience: '12+ Years',
    image: 'assets/doctors/doctor2.jpg',
    speciality: 'Senior Neurologist'
  };
}