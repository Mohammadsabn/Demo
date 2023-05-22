import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ReactiveFormsModule} from '@angular/forms';
import { PersonalDetailsComponent } from '../app/capture-module/personal-details/personal-details.component';
import { ProfessionalDetailsComponent } from '../app/capture-module/professional-details/professional-details.component';
import { RegisterComponent } from '../app/capture-module/register/register.component'
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent} from '../app/common/footer/footer.component'
import{HeadderComponent} from '../app/common/headder/headder.component'
import{SidebarComponent} from '../app/common/sidebar/sidebar.component';
import {ChildProjectComponent} from '../app/project-module/child-project/child-project.component'
import { ApiserviceService } from './apiservice.service';
import { CustomercreationComponent } from './project-module/customercreation/customercreation.component';
import { CustomerModificationComponent } from './project-module/customer-modification/customer-modification.component';
import { CustomerModViewComponent } from './project-module/customer-mod-view/customer-mod-view.component';
import { CustomerViewComponent } from './project-module/customer-view/customer-view.component';
import { ProjectDetialComponent } from './project-module/project-detial/project-detial.component';
import { ProjDeallocComponent } from './project-module/proj-dealloc/proj-dealloc.component';
import { ProjectAllocationComponent } from './project-module/project-allocation/project-allocation.component';
import { InitiateRemComponent } from './reimbusment-mdule/initiate-rem/initiate-rem.component';
import { ReimburseApproveComponent } from './reimbusment-mdule/reimburse-approve/reimburse-approve.component';
import { CmsUploadAdminComponent } from './cms-module/cms-upload-admin/cms-upload-admin.component';
import { PolicyUploadAdminComponent } from './cms-module/policy-upload-admin/policy-upload-admin.component';
import { MagzineUploadAdminComponent } from './cms-module/magzine-upload-admin/magzine-upload-admin.component';
import { AddAppraisalComponent } from './appraisal-module/add-appraisal/add-appraisal.component';
import{AppraisalComponent} from '../app/appraisal-module/appraisal/appraisal.component';
import { RejectedAppraisalComponent } from './appraisal-module/rejected-appraisal/rejected-appraisal.component';
import { ViewappraisalComponent } from './appraisal-module/viewappraisal/viewappraisal.component';
import { DoAppraisalComponent } from './appraisal-module/do-appraisal/do-appraisal.component';
import { ViewAppraisalDataComponent } from '../app/appraisal-module/view-appraisal-data/view-appraisal-data.component';
import { AppraisalSystemComponent } from '../app/appraisal-module/appraisal-system/appraisal-system.component'

import{MarkDetailsComponent} from '../app/mark-module/mark-details/mark-details.component'
import{RecallmilestoneComponent} from '../app/mark-module/recallmilestone/recallmilestone.component'
import{SearchProjectDetailsComponent} from '../app/mark-module/search-project-details/search-project-details.component'
import { AddITAssetDetailsComponent } from '../app/asset-mangement-system-module/add-itasset-details/add-itasset-details.component';
import { AddNonItAssetDetailsComponent } from '../app/asset-mangement-system-module/add-non-it-asset-details/add-non-it-asset-details.component';
import { AssetDetailsComponent } from '../app/asset-mangement-system-module/asset-details/asset-details.component';
import { ITAssetAllocationComponent } from './asset-mangement-system-module/itasset-allocation/itasset-allocation.component';


@NgModule({
  declarations: [
    AppComponent,

    PersonalDetailsComponent,
    ProfessionalDetailsComponent,
    RegisterComponent,
    HeadderComponent,
    FooterComponent,
    SidebarComponent,
    ChildProjectComponent,
    CustomercreationComponent,
    CustomerModificationComponent,
    CustomerModViewComponent,
    CustomerViewComponent,
    ProjectDetialComponent,
    ProjDeallocComponent,
    ProjectAllocationComponent,
    InitiateRemComponent,
    ReimburseApproveComponent,
    CmsUploadAdminComponent,
    PolicyUploadAdminComponent,
    MagzineUploadAdminComponent,
    AddAppraisalComponent,
    AppraisalComponent,
    RejectedAppraisalComponent,
    ViewappraisalComponent,
    DoAppraisalComponent,
    ViewAppraisalDataComponent,
    AppraisalSystemComponent,

    // Mahesh
    MarkDetailsComponent,
    RecallmilestoneComponent,
    SearchProjectDetailsComponent,
    AddITAssetDetailsComponent,
    AddNonItAssetDetailsComponent,
    AssetDetailsComponent,
    ITAssetAllocationComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
