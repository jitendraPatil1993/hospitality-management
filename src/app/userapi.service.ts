import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  constructor(private _http: HttpClient) { }
 

  getUsers(): Observable<any> {
    return this
            ._http
              .get("https://jsonplaceholder.typicode.com/users")
            .pipe(
              map(res => res)
          );
      }
    }      