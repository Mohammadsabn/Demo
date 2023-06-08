import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './capture-module/register/register.component';
import { LoginComponent } from './login-module/login/login.component';
import { ForgotpasswordComponent } from './Reset-module/ForgotPassword/forgotpassword/forgotpassword.component';
import { ChangePasswordComponent } from './Reset-module/change-password/change-password.component';
import { PersonalDetailsComponent } from './capture-module/personal-details/personal-details.component';
import { ProfessionalDetailsComponent } from './capture-module/professional-details/professional-details.component';

import { MessageComponent } from './BirthdayMessage-module/message/message.component';
import { ComposeMessageComponent } from './BirthdayMessage-module/compose-message/compose-message.component';
import { InboxMessageComponent } from './BirthdayMessage-module/inbox-message/inbox-message.component';
import { SentMessageComponent } from './BirthdayMessage-module/sent-message/sent-message.component';

import { AppRejectedReqComponent } from './Travel-module/app-rejected-req/app-rejected-req.component';
import { ApproveReqComponent } from './Travel-module/approve-req/approve-req.component';
import { CancelTravelDetailsComponent } from './Travel-module/cancel-travel-details/cancel-travel-details.component';
import { CancelTravelQueueComponent } from './Travel-module/cancel-travel-queue/cancel-travel-queue.component';
import { TravelComponent } from './Travel-module/travel/travel.component';
import { TravelFAQDetailsComponent } from './Travel-module/travel-faqdetails/travel-faqdetails.component';
import { ViewTravelApprQueueComponent } from './Travel-module/view-travel-appr-queue/view-travel-appr-queue.component';
import { DashboardComponent } from './login-module/dashboard/dashboard.component';
import { AddAppraisalComponent } from './appraisal-module/add-appraisal/add-appraisal.component';
import { AppraisalComponent } from './appraisal-module/appraisal/appraisal.component';
import { RejectedAppraisalComponent } from './appraisal-module/rejected-appraisal/rejected-appraisal.component';
import { ViewAppraisalDataComponent } from './appraisal-module/view-appraisal-data/view-appraisal-data.component';
import { ViewappraisalComponent } from './appraisal-module/viewappraisal/viewappraisal.component';
//bank details
import { BankDetailsComponent } from './employee-module/BankDetails/bank-details/bank-details.component';
import { ModifyPersonalDetailsComponent } from './employee-module/modify-personal-details/modify-personal-details.component';
import { ModifyProfessionalDetailsComponent } from './employee-module/modify-professional-details/modify-professional-details.component';
import { SearchEmployeeDetailsComponent } from './employee-module/search-employee-details/search-employee-details.component';
import { InitiateRemComponent } from './reimbusment-mdule/initiate-rem/initiate-rem.component';
import { ReimburseApproveComponent } from './reimbusment-mdule/reimburse-approve/reimburse-approve.component';
import { AprDoappraisalComponent } from './appraisal-module/apr-doappraisal/apr-doappraisal.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgotPassword', component: ForgotpasswordComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'personalDetails', component: PersonalDetailsComponent },
  { path: 'professionalDetails', component: ProfessionalDetailsComponent },

// Abhi 
 
//appraisal
{path:'addappraisal',component:AddAppraisalComponent},
{path:'appraisalcomponent',component:AppraisalComponent} ,
{path:'doappraisal',component:AprDoappraisalComponent},
{path:'rejapr',component:RejectedAppraisalComponent},
{path:'viewapldata',component:ViewAppraisalDataComponent},
{path:'viewaprl',component:ViewappraisalComponent},

// reimbusment

{path: 'initiaterem',component:InitiateRemComponent},
{path: 'reimbusmentapprove',component:ReimburseApproveComponent}, 

//emp module
{path:'bankdetails',component:BankDetailsComponent},
{path:'modifypersonal',component:ModifyPersonalDetailsComponent},
{path:'modifyprofessional',component:ModifyProfessionalDetailsComponent},
{path:'searchmodify',component:SearchEmployeeDetailsComponent},

  

  { path: 'message', component: MessageComponent },
  { path: 'composeMessage', component: ComposeMessageComponent },
  { path: 'inbox', component: InboxMessageComponent },
  { path: 'sent', component: SentMessageComponent },

  { path: 'apprejected', component: AppRejectedReqComponent },
  { path: 'approvereq', component: ApproveReqComponent },
  { path: 'canceltvldet', component: CancelTravelDetailsComponent },
  { path: 'canceltvlque', component: CancelTravelQueueComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'travelfaq', component: TravelFAQDetailsComponent },
  { path: 'viewtvl', component: ViewTravelApprQueueComponent },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
