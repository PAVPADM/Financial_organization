import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { OrgrepresentationComponent } from './orgrepresentation/orgrepresentation.component';
import { FinanceTeamComponent } from './finance-team/finance-team.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserComponent,
    OrgrepresentationComponent,
    FinanceTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
