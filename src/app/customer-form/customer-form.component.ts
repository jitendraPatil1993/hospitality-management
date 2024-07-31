import { Component } from '@angular/core';
import { User } from '../../user.interface';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {
  public user!: User; // our model
  ngOnInit() { // we will initialize our form here
    this.user = {
    name: '',
    address: '',
    postcode:'',
    designation:'',
    gender:'',
    course:'',
    remark:'',

   };
  }
  save(model: User, isValid: boolean) 
  { 
    // check if model is valid// if valid, call API to save customer
    console.log(model, isValid);
  } 
}