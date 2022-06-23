import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrgService } from './organization-details.service';
import { Organization } from './organization.model';

@Component({
  selector: 'fors-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.css']
})
export class OrganizationDetailsComponent implements OnInit {
  organizationList!:Organization[];
  
  constructor(private orgservice:OrgService ,private router:Router) { }

  ngOnInit(): void {
    this.orgservice.getOrgList().subscribe(data=>{
this.organizationList=data;

    });
  }
  editOrganization(id:number){
    console.log("hello"+id);
    this.router.navigate(['update',id]);
  }

}
