import { Component, OnInit } from '@angular/core';
import { OrganizationRep } from 'src/app/model/OrganizationRep';
import { OrgrepService } from '../orgrep.service';

@Component({
  selector: 'fors-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit {

  id!:number;
  orgrep!:OrganizationRep;
   constructor(private orgrepService:OrgrepService) { }
 
   ngOnInit(): void {
   }
 
   
   onSubmit() {
    
   }
   getByEntityId():void{
     this.orgrepService.getByEntityId(this.id).
     subscribe( data => {
       this.orgrep=data;
       console.log(data);
     });
   }
  }
