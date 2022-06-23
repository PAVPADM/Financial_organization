import { Component, OnInit } from '@angular/core';
import { OrgrepService } from '../orgrep.service';

@Component({
  selector: 'fors-delete-org-rep',
  templateUrl: './delete-org-rep.component.html',
  styleUrls: ['./delete-org-rep.component.css']
})
export class DeleteOrgRepComponent implements OnInit {
id!:number;
  constructor(private orgrepService:OrgrepService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    
  }
  deleteOrganizationDetails():void{
    this.orgrepService.deleteOrganizationDetails(this.id).
      subscribe(data => {
        console.log(data);
      })
  }

}
