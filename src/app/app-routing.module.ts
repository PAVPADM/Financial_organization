import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceTeamComponent } from './finance-team/finance-team.component';
import { OrganizationRepRegistrationDto } from './model/OrganizationRepRegistrationDto';
import { AddOrgRepComponent } from './orgrepresentation/add-org-rep/add-org-rep.component';
import { DeleteOrgRepComponent } from './orgrepresentation/delete-org-rep/delete-org-rep.component';
import { GetByIdComponent } from './orgrepresentation/get-by-id/get-by-id.component';
import { OrganizationProfileComponent } from './orgrepresentation/organization-profile/organization-profile.component';
import { OrgrepresentationComponent } from './orgrepresentation/orgrepresentation.component';
import { RatingCriteriaComponent } from './orgrepresentation/rating-criteria/rating-criteria.component';

import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path: 'welcome' , component:WelcomeComponent},
{path: 'user' , component:UserComponent},
{path: 'orgRep' , component:OrgrepresentationComponent},
{path: 'financeTeam' , component:FinanceTeamComponent},
{path:'orgrepdelete', component:DeleteOrgRepComponent},
{path:'orgrepReg',component:AddOrgRepComponent},
{path:'ratingcriteria',component:RatingCriteriaComponent},
{path:'orgprofile',component:OrganizationProfileComponent},
{path:'orgrepget',component:GetByIdComponent},
{ path: ' ',redirectTo: 'welcome',pathMatch:'full'},
{ path: '**',redirectTo: 'welcome',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
