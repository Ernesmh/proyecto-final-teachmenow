import { Component, OnInit } from '@angular/core';
import { RatingService } from '../services/rating.service';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  user: Array<Object>=[];
  teacher: Object;
  constructor(public router:Router, public ratingService:RatingService, public userService:UserService, public route:ActivatedRoute) { }

  ngOnInit() {
    this.ratingService.findTeacherByID(this.route.params)
      .subscribe(teacher => this.teacher = teacher)
  }

  getBack(){
    this.router.navigate(['/profile'])
  }

  createRating(teacherID){
    console.log("wooo")
      this.route.params.subscribe(params => {
        this.ratingService.rateTeacherService(params['teacherid'])
          .subscribe(user => {
            console.log("eoooo" + user)
            this.user = user});
          })

    this.router.navigate(['/profile'])
  }
}
