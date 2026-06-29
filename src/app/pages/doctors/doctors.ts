import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './doctors.html',
  styleUrls: ['./doctors.scss']
})
export class Doctors {

  searchText = '';
  selectedDept = '';

  departments = [
    'All',
    'Cardiology',
    'Neurology',
    'Dental',
    'Orthopedic',
    'Eye Care'
  ];

  doctors = [
    {
      id: 1,
      name: 'Dr. John Smith',
      speciality: 'Cardiology',
      experience: '15 Years',
      image: 'assets/doctors/doctor1.jpg'
    },
    {
      id: 2,
      name: 'Dr. Emily Johnson',
      speciality: 'Neurology',
      experience: '12 Years',
      image: 'assets/doctors/doctor2.jpg'
    },
    {
      id: 3,
      name: 'Dr. Michael Brown',
      speciality: 'Orthopedic',
      experience: '10 Years',
      image: 'assets/doctors/doctor3.jpg'
    },
    {
      id: 4,
      name: 'Dr. Sarah Wilson',
      speciality: 'Dental',
      experience: '8 Years',
      image: 'assets/doctors/doctor4.jpg'
    }
  ];

  get filteredDoctors() {
    return this.doctors.filter(doc => {

      const matchName =
        doc.name.toLowerCase().includes(this.searchText.toLowerCase());

      const matchDept =
        this.selectedDept === '' ||
        this.selectedDept === 'All' ||
        doc.speciality === this.selectedDept;

      return matchName && matchDept;
    });
  }
}