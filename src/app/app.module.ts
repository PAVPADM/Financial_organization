import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';

import { FinanceTeamComponent } from './finance-team/finance-team.component';
<<<<<<< HEAD
import { AddOrgRepComponent } from './orgrepresentation/add-org-rep/add-org-rep.component';
import { UpdateOrgRepComponent } from './orgrepresentation/update-org-rep/update-org-rep.component';
import { OrgrepresentationComponent } from './orgrepresentation/orgrepresentation.component';
import { DeleteOrgRepComponent } from './orgrepresentation/delete-org-rep/delete-org-rep.component';
import { OrganizationRepRegistrationDto } from './model/OrganizationRepRegistrationDto';
import { RatingCriteriaComponent } from './orgrepresentation/rating-criteria/rating-criteria.component';
import { OrganizationProfileComponent } from './orgrepresentation/organization-profile/organization-profile.component';
import { GetByIdComponent } from './orgrepresentation/get-by-id/get-by-id.component';
=======
<<<<<<< HEAD
import { UpdateComponent } from './finance-team/update/update.component';
import { OrganizationDetailsComponent } from './finance-team/organization-details/organization-details.component';
=======
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { BrowseByEntityComponent } from './user/browse-by-entity/browse-by-entity.component';
import { BrowsebyEntityIDComponent } from './user/browseby-entity-id/browseby-entity-id.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { FeedbackComponent } from './user/feedback/feedback.component';
>>>>>>> 1281e8e0691826be77a20cdcce64c81d4af3257b
>>>>>>> 953383d461aac897b6ecab5cd411af8aa95c142b

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserComponent,
    OrgrepresentationComponent,
    FinanceTeamComponent,
<<<<<<< HEAD
    AddOrgRepComponent,
    UpdateOrgRepComponent,
    DeleteOrgRepComponent,
    RatingCriteriaComponent,
    OrganizationProfileComponent,
    GetByIdComponent
=======
<<<<<<< HEAD
    UpdateComponent,
    OrganizationDetailsComponent
=======
    UserRegistrationComponent,
    BrowseByEntityComponent,
    BrowsebyEntityIDComponent,
    UserListComponent,
    FeedbackComponent
>>>>>>> 1281e8e0691826be77a20cdcce64c81d4af3257b
>>>>>>> 953383d461aac897b6ecab5cd411af8aa95c142b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
