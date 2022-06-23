import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { OrgService } from '../organization-details/organization-details.service';
import { Organization } from '../organization-details/organization.model';
import { Update } from './Update.model';
import { UpdateService } from './update.service';

@Component({
  selector: 'fors-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  bharath:String='';
  updateForm!: FormGroup;
  update?:Update;
  organization?:Organization;
  id?:any;
  constructor(public formBuilder:FormBuilder,private orgservice:OrgService, 
    private route1:Router,private route:ActivatedRoute,private updateserv:UpdateService){}
  
  ngOnInit(): void {
  this.id=this.route.snapshot.paramMap.get('id');
   this.orgservice.getOrgById(this.id).subscribe(data=>{
   this.organization=data;
    console.log("dataov"+this.organization);
    this.updateForm = this.formBuilder.group({
      orgId: [this.organization?.orgId, Validators.required],
      orgRating: [this.organization?.orgRating, [Validators.min(1),Validators.max(10),Validators.required]],
      approvalStatus: [this.organization?.approvalStatus, Validators.required]
      });
   }  
      )
   
  }  
  updateRating():void{
  
  this.updateserv.updateRating(this.updateForm.value).subscribe(data=>this.bharath=data);
  this.route1.navigate(['orglist']);
  }
}
