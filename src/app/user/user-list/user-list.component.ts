import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistration } from 'src/app/model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'fors-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!:UserRegistration [];
  

  constructor(private router: Router, private userservice:UserService) { }

  ngOnInit() {
    
    this.userservice.getUsersDetails()
      .subscribe( data => {
          this.users = data;
      });
    }
    back()
    {
      this.router.navigate(['user']);
    }
}
