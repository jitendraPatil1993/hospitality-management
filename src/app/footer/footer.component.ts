import { Component } from '@angular/core';
import { Password } from '../password';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public password!: Password; // our model
 

  ngOnInit() {  // we will initialize our form here
    this.password = {  
    email: ''   

    };
    }
    save(model: Password, isValid: boolean) 
    { 
    // check if model is valid// if valid, call API to save customer
    console.log(model, isValid);
    } 
}  