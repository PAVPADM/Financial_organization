import { Component, OnInit } from '@angular/core';
import { BrowseByOrgRep } from 'src/app/model/browseOrgRep';
import { UserService } from '../user.service';

@Component({
  selector: 'fors-browseby-entity-id',
  templateUrl: './browseby-entity-id.component.html',
  styleUrls: ['./browseby-entity-id.component.css']
})
export class BrowsebyEntityIDComponent implements OnInit {

  id!:number;
  orgrep!:BrowseByOrgRep;
   constructor(private userservice:UserService) { }
 
   ngOnInit(): void {
   }
 getByEntityId():void{
     this.userservice.getDetailsByEntityId(this.id).
     subscribe( data => {
       this.orgrep=data;
       console.log(data);
     });
   }
  }


