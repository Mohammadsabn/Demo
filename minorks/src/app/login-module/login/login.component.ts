import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  employeeId:any;
  Login=new FormGroup<any>({
    userid: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])

  })
  login(item:any){
    console.log(item);
 
  }
}
