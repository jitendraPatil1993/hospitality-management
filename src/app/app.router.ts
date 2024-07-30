import { Routes, RouterModule } from '@angular/router'; 

import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import {ReservationformComponent} from './reservationform/reservationform.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServiceComponent } from './service/service.component';
import { BlogComponent } from './blog/blog.component';
import { SignupComponent } from './signup/signup.component';


export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default page
    { path: 'home', component: HomeComponent },
    { path: 'room', component: RoomComponent },
    { path: 'gallary', component: GallaryComponent },    
    { path: 'service', component: ServiceComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: ReservationformComponent },      
    { path: 'signup', component: SignupComponent },      
    { path: '**', component: NotfoundComponent },    
];


export const routes = RouterModule.forRoot(router);
