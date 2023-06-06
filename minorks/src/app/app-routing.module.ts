import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './capture-module/register/register.component';
import { LoginComponent } from './login-module/login/login.component';
import { ForgotpasswordComponent } from './Reset-module/ForgotPassword/forgotpassword/forgotpassword.component';
import { ChangePasswordComponent } from './Password-module/change-password/change-password.component';
import { PersonalDetailsComponent } from './capture-module/personal-details/personal-details.component';
import { ProfessionalDetailsComponent } from './capture-module/professional-details/professional-details.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgotPassword',component:ForgotpasswordComponent},
  {path:'resetPassword',component:ChangePasswordComponent},
  {path:'personalDetails',component:PersonalDetailsComponent},
  {path: 'professionalDetails',component:ProfessionalDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
