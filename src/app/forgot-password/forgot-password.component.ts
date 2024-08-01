import { Component } from '@angular/core';
import {Password} from '../password';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  public user!: Password; // our model
 

  ngOnInit() { // we will initialize our form here
    this.user = {  
    email: '',  

    };
    }
    save(model: Password, isValid: boolean) 
    { 
    // check if model is valid// if valid, call API to save customer
    console.log(model, isValid);
    } 
}
