import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceTeamComponent } from './finance-team/finance-team.component';
import { OrgrepresentationComponent } from './orgrepresentation/orgrepresentation.component';
import { BrowseByEntityComponent } from './user/browse-by-entity/browse-by-entity.component';
import { BrowsebyEntityIDComponent } from './user/browseby-entity-id/browseby-entity-id.component';
import { FeedbackComponent } from './user/feedback/feedback.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path: 'welcome' , component:WelcomeComponent},
{path: 'user' , component:UserComponent},
{path: 'browseByEntity' , component:BrowseByEntityComponent},
{path: 'userRegistration' , component:UserRegistrationComponent},
{path: 'getUserDetail' , component:UserListComponent},
{path: 'orgRep' , component:OrgrepresentationComponent},
{path: 'feedback' , component:FeedbackComponent},
{path: 'financeTeam' , component:FinanceTeamComponent},
{path: 'browsebyentityid' , component:BrowsebyEntityIDComponent},
{ path: ' ',redirectTo: 'welcome',pathMatch:'full'},
{ path: '**',redirectTo: 'welcome',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
