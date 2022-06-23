import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'fors-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor( private router: Router, private userservice:UserService ) { }
 userForm!:FormGroup;
  ngOnInit(): void {
  this.  userForm = new FormGroup({
      userId: new FormControl(''),
      userName: new FormControl('',[Validators.required]),
        userContactDetails: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(12)] ),
        role: new FormControl( '',[Validators.required]),
        password:new FormControl('',[Validators.required,Validators.minLength(4)] ),
        city: new FormControl('',[Validators.required] )
      })
  }
  onSubmit() { 
    this.userservice.userRegistration(this.userForm.value)
      .subscribe( data => {
        this.router.navigate(['getUserDetail']);
      });
  }
  get userName(){
    return this.userForm.get('orgName');
   }

   get  role(){
    return this.userForm.get('role');
   }

   get  password(){
    return this.userForm.get(' password');
   }
   get  city(){
    return this.userForm.get(' city');
   }
   cityList:string[]=["Mumbai","Delhi","Bangalore","Hyderabad","Ahmedabad","Chennai","Kolkata","Surat","Pune","Kanpur","Indore","Visakhapatnam","Pimpri","Patna","Ghaziabad","Agra","Nashik","Ludhiana"];
 

}
