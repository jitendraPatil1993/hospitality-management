import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-reservationform',
  templateUrl: './reservationform.component.html',
  styleUrl: './reservationform.component.css'
})
export class ReservationformComponent {
  angForm!: FormGroup;
   constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.angForm = this.fb.group({
       fname: ['', Validators.required ],
       lname: ['', Validators.required ],
       email: ['', Validators.required ],
       password: ['', Validators.required ]
    });
  }
}
