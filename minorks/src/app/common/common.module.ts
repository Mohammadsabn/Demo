import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { HeadderComponent } from './headder/headder.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    HeadderComponent,
    FooterComponent,
    NavbarComponent,
    // SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommonModule { }
