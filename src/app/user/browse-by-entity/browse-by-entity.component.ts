import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowseByOrgRep } from 'src/app/model/browseOrgRep';
import { UserService } from '../user.service';

@Component({
  selector: 'fors-browse-by-entity',
  templateUrl: './browse-by-entity.component.html',
  styleUrls: ['./browse-by-entity.component.css']
})
export class BrowseByEntityComponent implements OnInit {

  orgRep!: BrowseByOrgRep[];
  userService:any;
  constructor(private router:Router,private userservice:UserService) { }

  
    ngOnInit() {
      // if(!window.localStorage.getItem('token')) {
      //   this.router.navigate(['login']);
      //   return;
      // }
      this.userservice.getDetailsByEntity()
        .subscribe( data => {
            this.orgRep= data;
        });
    }
}
