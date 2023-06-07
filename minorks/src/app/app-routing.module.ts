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

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotPassword', component: ForgotpasswordComponent },
  { path: 'changePassword', component: ChangePasswordComponent },

  { path: 'personalDetails', component: PersonalDetailsComponent },
  { path: 'professionalDetails', component: ProfessionalDetailsComponent },

  { path: 'message', component: MessageComponent },
  { path: 'composeMessage', component: ComposeMessageComponent },
  { path: 'inbox', component: InboxMessageComponent },
  { path: 'sent', component: SentMessageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
