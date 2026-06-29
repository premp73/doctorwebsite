import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './doctor-details.html',
  styleUrls: ['./doctor-details.scss']
})
export class DoctorDetails {

  doctorId: string | null = '';

  doctor = {
    name: 'Dr. John Smith',
    speciality: 'Cardiologist',
    experience: '15 Years',
    rating: 4.8,
    image: 'assets/doctors/doctor1.jpg',
    education: 'MBBS, MD (Cardiology)',
    hospital: 'DoctorCare Hospital, New Delhi',
    availability: 'Mon - Sat (10:00 AM - 5:00 PM)',
    about: `Dr. John Smith is a highly experienced cardiologist with over 15 years of experience
            in treating heart-related diseases. He specializes in interventional cardiology
            and preventive heart care.`
  };

  reviews = [
    {
      name: 'Rahul Sharma',
      comment: 'Very experienced doctor. Excellent treatment!',
      rating: 5
    },
    {
      name: 'Priya Verma',
      comment: 'Explains everything clearly. Highly recommended.',
      rating: 4
    },
    {
      name: 'Amit Kumar',
      comment: 'Good experience and friendly behavior.',
      rating: 5
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.doctorId = this.route.snapshot.paramMap.get('id');
  }
}