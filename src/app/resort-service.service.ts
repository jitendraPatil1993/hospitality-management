import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ResortServiceService {

  constructor() { }
 

  getUsers()
  {
    return axios.get('http://localhost:4000/resort-details', {
      headers: {
        'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com',
        'x-rapidapi-key': 'your-rapid-api-key'
      }
    });
  }
}  
