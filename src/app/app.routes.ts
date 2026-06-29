import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Doctors } from './pages/doctors/doctors';
import { DoctorDetails } from './pages/doctor-details/doctor-details';
import { Services } from './pages/services/services';
import { Appointment } from './pages/appointment/appointment';
import { Consultation } from './pages/consultation/consultation';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Admin } from './pages/admin/admin';

export const routes: Routes = [

{
path:'',
component:Home
},

{
path:'about',
component:About
},

{
path:'doctors',
component:Doctors
},

{
path:'doctor/:id',
component:DoctorDetails
},

{
path:'services',
component:Services
},

{
path:'appointment',
component:Appointment
},

{
path:'consultation',
component:Consultation
},

{
path:'contact',
component:Contact
},

{
path:'login',
component:Login
},

{
path:'register',
component:Register
},

{ path: 'admin', loadComponent: () => import('./pages/admin/admin').then(m => m.Admin) },
{
  path: 'services',
  loadComponent: () =>
    import('./pages/services/services').then(m => m.Services)
},
{
  path: 'cardiology',
  loadComponent: () =>
    import('./pages/cardiology/cardiology').then(m => m.Cardiology)
},
{
  path: 'neurology',
  loadComponent: () =>
    import('./pages/neurology/neurology').then(m => m.NeurologyComponent)
}
];