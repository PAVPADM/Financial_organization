import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { OrgrepresentationComponent } from './orgrepresentation/orgrepresentation.component';
import { FinanceTeamComponent } from './finance-team/finance-team.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { BrowseByEntityComponent } from './user/browse-by-entity/browse-by-entity.component';
import { BrowsebyEntityIDComponent } from './user/browseby-entity-id/browseby-entity-id.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { FeedbackComponent } from './user/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserComponent,
    OrgrepresentationComponent,
    FinanceTeamComponent,
    UserRegistrationComponent,
    BrowseByEntityComponent,
    BrowsebyEntityIDComponent,
    UserListComponent,
    FeedbackComponent
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
