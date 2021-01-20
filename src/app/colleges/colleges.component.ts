import { Component, OnInit } from '@angular/core';
import * as data from '../colleges.modal.json';
import { StarRatingComponent } from 'ng-starrating';
@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.css'],
  providers: [StarRatingComponent]
})
export class CollegesComponent implements OnInit {
  collegeData: Array<any> = [];
  collegeTen: Array<any> = [];
  collegeTwenty: Array<any> = [];
  collegeThirty: Array<any> = [];
  collegeForty: Array<any> = [];
  collegeFifty: Array<any> = [];
 
  array = [];
 
  constructor() { }

  ngOnInit() {
    this.getCollegesTen();
  }

  getCollegesTen() {
    // this.collegeData = data.colleges;
    for (var i = 0; i <= 9; i++) {
      this.collegeData.push(data.colleges[i]);
      console.log(this.collegeTen);
    }
  }

  onScroll(event, i) {
    this.array.push(event);
    if (this.array.length == 10) {
      this.getCollegesTwenty();
    } else if (this.array.length == 20) {
      this.getCollegesThirty();
    } else if (this.array.length == 30) {
      this.getCollegesForty();
    } else if (this.array.length == 40) {
      this.getCollegesFifty();
    }
  }

  getCollegesTwenty() {
    for (var i = 10; i <= 19; i++) {
      this.collegeData.push(data.colleges[i]);
    }
  }

  getCollegesThirty() {
    for (var i = 20; i <= 29; i++) {
      this.collegeData.push(data.colleges[i]);
    }
  }

  getCollegesForty() {
    for (var i = 30; i <= 39; i++) {
      this.collegeData.push(data.colleges[i]);
      console.log(this.collegeForty);
    }
  }

  getCollegesFifty() {
    for (var i = 40; i <= 49; i++) {
      this.collegeData.push(data.colleges[i]);
      console.log(this.collegeFifty);
    }
  }


}
