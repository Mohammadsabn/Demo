import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavserviceService } from 'src/app/services/navservice.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  data: any;
  constructor(private service: NavserviceService,
    private router:Router) {
      this.data = this.service.returrnAns;
    console.log("nav enterd");
    console.log(this.service.returrnAns());
  
    this.data=this.service.returrnAns();

  }
}
