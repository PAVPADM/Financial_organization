import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceTeamComponent } from './finance-team/finance-team.component';
import { OrganizationDetailsComponent } from './finance-team/organization-details/organization-details.component';
import { UpdateComponent } from './finance-team/update/update.component';
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
<<<<<<< HEAD
{path:'orglist',component:OrganizationDetailsComponent},
{path:'update/:id',component:UpdateComponent},

  { path: ' ',redirectTo: 'welcome',pathMatch:'full'},
=======
{path: 'browsebyentityid' , component:BrowsebyEntityIDComponent},
{ path: ' ',redirectTo: 'welcome',pathMatch:'full'},
>>>>>>> 1281e8e0691826be77a20cdcce64c81d4af3257b
{ path: '**',redirectTo: 'welcome',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
