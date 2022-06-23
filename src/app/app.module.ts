import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';

import { FinanceTeamComponent } from './finance-team/finance-team.component';
import { AddOrgRepComponent } from './orgrepresentation/add-org-rep/add-org-rep.component';
import { UpdateOrgRepComponent } from './orgrepresentation/update-org-rep/update-org-rep.component';
import { OrgrepresentationComponent } from './orgrepresentation/orgrepresentation.component';
import { DeleteOrgRepComponent } from './orgrepresentation/delete-org-rep/delete-org-rep.component';
import { OrganizationRepRegistrationDto } from './model/OrganizationRepRegistrationDto';
import { RatingCriteriaComponent } from './orgrepresentation/rating-criteria/rating-criteria.component';
import { OrganizationProfileComponent } from './orgrepresentation/organization-profile/organization-profile.component';
import { GetByIdComponent } from './orgrepresentation/get-by-id/get-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserComponent,
    OrgrepresentationComponent,
    FinanceTeamComponent,
    AddOrgRepComponent,
    UpdateOrgRepComponent,
    DeleteOrgRepComponent,
    RatingCriteriaComponent,
    OrganizationProfileComponent,
    GetByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
