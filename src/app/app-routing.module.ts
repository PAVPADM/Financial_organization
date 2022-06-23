import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceTeamComponent } from './finance-team/finance-team.component';
<<<<<<< HEAD
import { OrganizationRepRegistrationDto } from './model/OrganizationRepRegistrationDto';
import { AddOrgRepComponent } from './orgrepresentation/add-org-rep/add-org-rep.component';
import { DeleteOrgRepComponent } from './orgrepresentation/delete-org-rep/delete-org-rep.component';
import { GetByIdComponent } from './orgrepresentation/get-by-id/get-by-id.component';
import { OrganizationProfileComponent } from './orgrepresentation/organization-profile/organization-profile.component';
=======
import { OrganizationDetailsComponent } from './finance-team/organization-details/organization-details.component';
import { UpdateComponent } from './finance-team/update/update.component';
>>>>>>> 953383d461aac897b6ecab5cd411af8aa95c142b
import { OrgrepresentationComponent } from './orgrepresentation/orgrepresentation.component';
import { RatingCriteriaComponent } from './orgrepresentation/rating-criteria/rating-criteria.component';

import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path: 'welcome' , component:WelcomeComponent},
{path: 'user' , component:UserComponent},
{path: 'orgRep' , component:OrgrepresentationComponent},
{path: 'financeTeam' , component:FinanceTeamComponent},
<<<<<<< HEAD
{path:'orgrepdelete', component:DeleteOrgRepComponent},
{path:'orgrepReg',component:AddOrgRepComponent},
{path:'ratingcriteria',component:RatingCriteriaComponent},
{path:'orgprofile',component:OrganizationProfileComponent},
{path:'orgrepget',component:GetByIdComponent},
=======
<<<<<<< HEAD
{path:'orglist',component:OrganizationDetailsComponent},
{path:'update/:id',component:UpdateComponent},

  { path: ' ',redirectTo: 'welcome',pathMatch:'full'},
=======
{path: 'browsebyentityid' , component:BrowsebyEntityIDComponent},
>>>>>>> 953383d461aac897b6ecab5cd411af8aa95c142b
{ path: ' ',redirectTo: 'welcome',pathMatch:'full'},
>>>>>>> 1281e8e0691826be77a20cdcce64c81d4af3257b
{ path: '**',redirectTo: 'welcome',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
