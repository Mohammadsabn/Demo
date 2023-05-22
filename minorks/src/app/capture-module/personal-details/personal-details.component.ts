import { Component } from '@angular/core';
import{FormGroup,ReactiveFormsModule,FormControl,FormControlDirective,Validators} from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {
  gender='';
  
  Personal_Details = new FormGroup<any>({
    
    employeeId: new FormControl('', [Validators.required]),
    employeeName: new FormControl(''),
    gender:new FormControl(''),
    dateOfBirth:new FormControl(''),
    bloodGroup:new FormControl(''),
    tShirtSize:new FormControl(''),
    communicationAddress:new FormControl(''),
    state:new FormControl(''),
    city:new FormControl(''),
    pinCode:new FormControl(''),
    parmanentAddress:new FormControl(''),
    mobileNumber:new FormControl(''),
    altranativeContactNumber:new FormControl(''),
    emergencyContactNumber:new FormControl(''),
    emergencyContactPerson:new FormControl(''),
    fatherName:new FormControl(''),
    motherName:new FormControl(''),
    maritalStatus:new FormControl(''),
    spouseName:new FormControl(''),
    panNumber:new FormControl(''),
    passportNumber:new FormControl(''),
    adharCardNumber:new FormControl(''),
    drivingLicenceNumber:new FormControl(''),
    uanNumber:new FormControl('')



  });
  personalDetails(item: any) {
    console.log(item)
  }
  communicationAddress:string='';
  parmanentAddress:string=' ';
  copyAddress:any;

  copyCurrentAddress(): void {
    if(this.copyAddress){
      this.parmanentAddress=this.communicationAddress;

    }
    else{
      this.parmanentAddress='';
    }
   
  }
}
