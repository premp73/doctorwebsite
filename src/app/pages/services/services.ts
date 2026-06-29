import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.html',
  styleUrls: ['./services.scss']
})
export class Services {

  services = [
    {
      icon: 'fa-heart-pulse',
      title: 'Cardiology',
      desc: 'Advanced heart care and treatment for all cardiac conditions.'
    },
    {
      icon: 'fa-brain',
      title: 'Neurology',
      desc: 'Expert care for brain, spine, and nervous system disorders.'
    },
    {
      icon: 'fa-tooth',
      title: 'Dental Care',
      desc: 'Complete dental treatment including cleaning, surgery, and implants.'
    },
    {
      icon: 'fa-bone',
      title: 'Orthopedics',
      desc: 'Bone, joint, and muscle treatment with advanced techniques.'
    },
    {
      icon: 'fa-eye',
      title: 'Eye Care',
      desc: 'Comprehensive eye examination and vision correction services.'
    },
    {
      icon: 'fa-syringe',
      title: 'General Medicine',
      desc: 'Primary healthcare and treatment for common diseases.'
    },
    {
      icon: 'fa-child',
      title: 'Pediatrics',
      desc: 'Special healthcare for infants, children, and adolescents.'
    },
    {
      icon: 'fa-x-ray',
      title: 'Radiology',
      desc: 'Advanced imaging services including X-ray, MRI, and CT scan.'
    }
  ];
}