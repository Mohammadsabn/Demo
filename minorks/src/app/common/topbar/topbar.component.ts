import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  constructor(private router: Router) { }
  
  goToCompose() {
    this.router.navigate(['/composeMessage']);
  }
  
  goToInbox() {
    this.router.navigate(['/inbox']);
  }
  
  goToSent() {
    this.router.navigate(['/sent']);
  }
}
