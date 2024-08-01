import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  
  status: boolean = true;
  hideBtn(): void{
    this.status = !this.status; 
  }
}
