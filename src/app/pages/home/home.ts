import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

  searchText = '';

  doctors = [
    {
      name: 'Dr. John Smith',
      speciality: 'Cardiologist',
      experience: '15 Years',
      image: 'assets/images/image1.png'
    },
    {
      name: 'Dr. Emily Johnson',
      speciality: 'Neurologist',
      experience: '12 Years',
      image: 'assets/doctors/doctor2.jpg'
    },
    {
      name: 'Dr. Michael Brown',
      speciality: 'Orthopedic',
      experience: '10 Years',
      image: 'assets/doctors/doctor3.jpg'
    }
  ];

  services = [
    {
      icon: 'fa-heart-pulse',
      title: 'Cardiology',
      description: 'Complete heart care with experienced specialists.'
    },
    {
      icon: 'fa-brain',
      title: 'Neurology',
      description: 'Advanced treatment for neurological disorders.'
    },
    {
      icon: 'fa-tooth',
      title: 'Dental Care',
      description: 'Cosmetic and general dentistry.'
    },
    {
      icon: 'fa-eye',
      title: 'Eye Care',
      description: 'Complete eye examination and surgery.'
    }
  ];

  testimonials = [
    {
      name: 'Rahul Sharma',
      review: 'Excellent doctors and amazing hospital staff.',
      image: 'assets/images/user1.jpg'
    },
    {
      name: 'Priya Verma',
      review: 'Booked appointment online in just two minutes.',
      image: 'assets/images/user2.jpg'
    },
    {
      name: 'Amit Kumar',
      review: 'Very clean hospital and experienced specialists.',
      image: 'assets/images/user3.jpg'
    }
  ];

  blogs = [
    {
      title: '10 Tips for Healthy Heart',
      image: 'assets/images/blog1.jpg'
    },
    {
      title: 'Benefits of Regular Health Checkups',
      image: 'assets/images/blog2.jpg'
    },
    {
      title: 'Importance of Healthy Lifestyle',
      image: 'assets/images/blog3.jpg'
    }
  ];

}