import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'fors-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor( private router: Router, private userservice:UserService ) { }
  feedbackForm!:FormGroup;
   ngOnInit(): void {
   this.  feedbackForm = new FormGroup({
       slNo: new FormControl(''),
       userId: new FormControl('',[Validators.required]),
       orgName: new FormControl('',[Validators.required]),
         userName: new FormControl('',[Validators.required] ),
         comment: new FormControl( '',[Validators.required])
        
       })
   }
   onSubmit() { 

     this.userservice.addFeedBack(this.feedbackForm.value)
       .subscribe( data => {alert("feedback added successfully");
         this.router.navigate(['user']);
        
       });
   }
   get orgName(){
    return this.feedbackForm.get('orgName');
   }

   get userName(){
    return this.feedbackForm.get('userName');
   }

   get comment(){
    return this.feedbackForm.get('comment');
   }

}
