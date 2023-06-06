import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AddemployeeserviceService {

  constructor(private http: HttpClient) { }

  // apiUrl = 'localhost:4000/insert'

  insert(data: any) {
    this.http.post('localhost:4000/insert', data).subscribe(
      (Response: any) => {
        console.log('data added', Response);

      },
      (error: any) => {
        console.log('error', error);

      }
    );


  }


}
