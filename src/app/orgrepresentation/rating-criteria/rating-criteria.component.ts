import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fors-rating-criteria',
  templateUrl: './rating-criteria.component.html',
  styleUrls: ['./rating-criteria.component.css']
})
export class RatingCriteriaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  back()
    {
      this.router.navigate(['orgRep']);
    }
    register()
    {
      this.router.navigate(['orgrepReg'])
    }

}
