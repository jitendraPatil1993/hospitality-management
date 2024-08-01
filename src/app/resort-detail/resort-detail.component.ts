import { Component, importProvidersFrom } from '@angular/core';
import { ResortServiceService } from '../resort-service.service';
import  axios  from 'axios';
import { IResort } from '../iresort';

@Component({
  selector: 'app-resort-detail',
  templateUrl: './resort-detail.component.html',
  styleUrl: './resort-detail.component.css'
})
export class ResortDetailComponent {
  resorts$!: IResort[];
  constructor(public _resortService: ResortServiceService) {}
  ngOnInit() {
    this._resortService.getUsers().then(res => {
      this.resorts$ = res.data;
    });
  }
}  