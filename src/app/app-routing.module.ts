import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceTeamComponent } from './finance-team/finance-team.component';
import { OrganizationDetailsComponent } from './finance-team/organization-details/organization-details.component';
import { UpdateComponent } from './finance-team/update/update.component';
import { OrgrepresentationComponent } from './orgrepresentation/orgrepresentation.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path: 'welcome' , component:WelcomeComponent},
{path: 'user' , component:UserComponent},
{path: 'orgRep' , component:OrgrepresentationComponent},
{path: 'financeTeam' , component:FinanceTeamComponent},
{path:'orglist',component:OrganizationDetailsComponent},
{path:'update/:id',component:UpdateComponent},

  { path: ' ',redirectTo: 'welcome',pathMatch:'full'},
{ path: '**',redirectTo: 'welcome',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
