import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url='localhost:3001/loginModule/login/logincheck'

  constructor(private http:HttpClient) { }

  userLogin(Data:any){
   var userData={
      "userid": Data.userid,
      "password": Data.password

    }
    return this.http.post(this.url,userData)
    
    }

  

}
