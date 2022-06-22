import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fors-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  pageTitle:string ='Welcome To Financial Organization Rating System';
  constructor() { }

  ngOnInit(): void {
  }

}
