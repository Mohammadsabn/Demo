import { Component } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-search-project-details',
  templateUrl: './search-project-details.component.html',
  styleUrls: ['./search-project-details.component.css']
})
export class SearchProjectDetailsComponent {
  searchForm=new FormGroup<any>({
    projectId: new FormControl('', [Validators.required])

 

  })

 onSubmit(item:any){
   console.log(item);
 
 }

 get() {
   return this.onSubmit;
 }
}
