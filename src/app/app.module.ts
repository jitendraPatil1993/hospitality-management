import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


import { routes } from './app.router';
import { HomeComponent } from './home/home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SignupComponent } from './signup/signup.component';
import { RoomComponent } from './room/room.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { ReservationformComponent } from './reservationform/reservationform.component';
import { CardCorasalComponent } from './card-corasal/card-corasal.component';
import { BlogComponent } from './blog/blog.component';

import { LightboxModule } from 'ngx-lightbox';
import { GmapComponent } from './gmap/gmap.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogoComponent } from './logo/logo.component';
import {UserapiService} from './userapi.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingSectionComponent } from './booking-section/booking-section.component';
import { PlansDropdownComponent } from './plans-dropdown/plans-dropdown.component';
import { ResoursesDropdownComponent } from './resourses-dropdown/resourses-dropdown.component';
import { RoomPageComponent } from './room-page/room-page.component';
import { AllUsersComponent } from './all-users/all-users.component';


@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    GallaryComponent,
    LoginComponent,
    RegisterFormComponent,
    SignupComponent,
    RoomComponent,
    NavComponent,
    SliderComponent,
    LightboxComponent,
    ContactComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    ServiceComponent,
    ReservationformComponent,
    CardCorasalComponent,
    BlogComponent,
    GmapComponent,
    ForgotPasswordComponent,
    LogoComponent,
    UserDetailsComponent,
    CustomerFormComponent,
    BookingSectionComponent,
    PlansDropdownComponent,
    ResoursesDropdownComponent,
    RoomPageComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes,
    LightboxModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
