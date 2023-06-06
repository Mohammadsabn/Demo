import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{LoginServiceService} from '../../services/login-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service:LoginServiceService,
    private router:Router){}

  employeeId:any;
  Login=new FormGroup<any>({
    userid: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])

  })
  login(item:any){
    console.log(item);
    this.service.userLogin(item).subscribe(
      (Response)=>{
        console.log(Response);
      }
    )
  }
}
