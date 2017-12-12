import { Component, OnInit } from '@angular/core';
import { RatingService } from '../services/rating.service';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../services/user.service';
import {AuthService } from '../services/auth.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  user: any;
  teacher: any;
  ratingInfo = {
    genericLevel: 0,
    punctualityLevel: 0,
    skillsLevel: 0,
    comment: ""
  };
  constructor(public router:Router, public authService:AuthService, public ratingService:RatingService, public userService:UserService, public route:ActivatedRoute) { }

  ngOnInit() {
    this.ratingService.findTeacherByID(this.route.params)
      .subscribe(teacher => this.teacher = teacher);

        this.authService.getUser()
          .subscribe(user => {this.user = user});
  }

  getBack(){
    this.router.navigate(['/profile'])
  }

  createRating(){
    const {genericLevel, punctualityLevel, skillsLevel, comment} = this.ratingInfo
        this.ratingService.rateTeacherService(this.teacher._id, this.user._id, this.ratingInfo)
          .subscribe(res => {
            console.log(res);
          });
  }
}

    // this.router.navigate(['/profile'])
