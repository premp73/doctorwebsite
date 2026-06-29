import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cardiology',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cardiology.html',
  styleUrls: ['./cardiology.scss']
})
export class Cardiology {

  symptoms = [
    'Chest pain or discomfort',
    'Shortness of breath',
    'Irregular heartbeat',
    'Fatigue',
    'Swelling in legs',
    'High blood pressure'
  ];

  treatments = [
    'ECG & Stress Test',
    'Angiography',
    'Bypass Surgery',
    'Pacemaker Implantation',
    'Heart Valve Treatment',
    'Preventive Cardiac Care'
  ];

  doctor = {
    name: 'Dr. John Smith',
    experience: '15+ Years',
    image: 'assets/doctors/doctor1.jpg',
    speciality: 'Senior Cardiologist'
  };
}