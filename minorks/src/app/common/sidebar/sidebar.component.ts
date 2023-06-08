import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavserviceService } from 'src/app/services/navservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor(private router: Router,
    private service: NavserviceService,

  ) { }

  getID(item: string) {
    console.log(item);
    this.service.get(item)
    
    if(item=='dsh'){

      this.router.navigate(['dashboard'])
    }

    if(item=='apr'){
      this.router.navigate(['addappraisal'])
    }
    if (item=='brd') {
      this.router.navigate(['message'])
    } 
    if(item=='cms'){
      this.router.navigate(['cmsuploadadmin'])
    }
    if(item=='rmb'){
      this.router.navigate(['initiaterem'])
    }
    if(item=='emp'){
      this.router.navigate(['bankdetails'])
    }
  }
}
