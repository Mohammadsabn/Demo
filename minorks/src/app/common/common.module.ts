import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { HeadderComponent } from './headder/headder.component';
import { FooterComponent } from './footer/footer.component';
// import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    HeadderComponent,
    FooterComponent,
    // SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommonModule { }
