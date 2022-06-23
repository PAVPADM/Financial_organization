import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrgrepService } from '../orgrep.service';

@Component({
  selector: 'fors-add-org-rep',
  templateUrl: './add-org-rep.component.html',
  styleUrls: ['./add-org-rep.component.css']
})
export class AddOrgRepComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router,private orgrepService:OrgrepService) { }
  
  addForm!:FormGroup;
  invalidadd:boolean=false;
  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      orgname:['',Validators.required],
      orgContactDetails:['',Validators.required],
      orgLocation:['',Validators.required],
      password:['',Validators.required],
      orgNetCapital:['',Validators.required],
      orgEconomicRiskScore:['',Validators.required],
      orgIndustryRiskScore:['',Validators.required]
    });
  }
  get orgname(){
    return this.addForm.get('orgname');
   }
   get orgContactDetails(){
    return this.addForm.get('orgContactDetails');
   }
   get orgLocation(){
    return this.addForm.get('orgLocation');
   }
   get password(){
    return this.addForm.get('password');
   }
   get orgNetCapital(){
    return this.addForm.get('orgNetCapital');
   }
   get orgEconomicRiskScore(){
    return this.addForm.get('orgEconomicRiskScore');
   }
   get orgIndustryRiskScore(){
    return this.addForm.get('orgIndustryRiskScore');
   }
   

    onSubmit(){
      this.orgrepService.addOrganizationRep(this.addForm.value)
      .subscribe(data =>{
          this.router.navigate(['/orgprofile']);
        });
    }
    back()
    {
      this.router.navigate(['orgRep']);
    }
  }

function minLength(arg0: number): any {
  throw new Error('Function not implemented.');
}

