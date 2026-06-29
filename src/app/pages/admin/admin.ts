import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss']
})
export class Admin {

  stats = [
    { title: 'Total Doctors', value: 120, icon: 'fa-user-doctor' },
    { title: 'Appointments', value: 540, icon: 'fa-calendar-check' },
    { title: 'Patients', value: 1200, icon: 'fa-users' },
    { title: 'Revenue', value: '₹2.5L', icon: 'fa-indian-rupee-sign' }
  ];

  doctors = [
    { name: 'Dr. John Smith', dept: 'Cardiology', status: 'Active' },
    { name: 'Dr. Emily Johnson', dept: 'Neurology', status: 'Active' },
    { name: 'Dr. Michael Brown', dept: 'Orthopedic', status: 'Inactive' }
  ];

  appointments = [
    { patient: 'Rahul Sharma', doctor: 'Dr. John', date: '2026-06-28', status: 'Pending' },
    { patient: 'Priya Verma', doctor: 'Dr. Emily', date: '2026-06-29', status: 'Confirmed' }
  ];
}