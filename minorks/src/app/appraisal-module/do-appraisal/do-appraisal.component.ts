import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-do-appraisal',
  templateUrl: './do-appraisal.component.html',
  styleUrls: ['./do-appraisal.component.css']
})
export class DoAppraisalComponent {
  doAppraisal=new FormGroup<any>({

  })
  DoAppraisal(item:any){
    console.log(item);
    
  }

}
