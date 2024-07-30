import { Component } from '@angular/core';
import { UserapiService } from '../userapi.service';
import { IUser } from '../IUser'; 

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  users$!: IUser[];
  constructor(public _userapiservice: UserapiService) {}
  ngOnInit() {
  this._userapiservice.getUsers().subscribe(res => {
    this.users$ = res;
    //this.albums$ = responseList[1];      
});
  }
}
