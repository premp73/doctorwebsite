import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About {

  stats = [
    { title: 'Expert Doctors', value: '120+' },
    { title: 'Happy Patients', value: '75K+' },
    { title: 'Departments', value: '30+' },
    { title: 'Awards', value: '15+' }
  ];

  team = [
    {
      name: 'Dr. John Smith',
      role: 'Cardiologist',
      image: 'assets/images/image1.png'
    },
    {
      name: 'Dr. Emily Johnson',
      role: 'Neurologist',
      image: 'assets/doctors/doctor2.jpg'
    },
    {
      name: 'Dr. Michael Brown',
      role: 'Orthopedic Surgeon',
      image: 'assets/doctors/doctor3.jpg'
    }
  ];

}