import { Component, OnInit } from '@angular/core';
import { RatingService } from '../services/rating.service';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../services/user.service';
import {AuthService } from '../services/auth.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  user: any;
  teacher: any;
  meeting: any;
  ratingInfo = {
    genericLevel: 0,
    punctualityLevel: 0,
    skillsLevel: 0,
    comment: ""
  };
  constructor(private _location: Location, public router:Router, public authService:AuthService, public ratingService:RatingService, public userService:UserService, public route:ActivatedRoute) { }

  ngOnInit() {
    this.ratingService.findTeacherByID(this.route.params)
      .subscribe(teacher => this.teacher = teacher);

        this.authService.getUser()
          .subscribe(user => {this.user = user});

      this.route.params.subscribe((params)=>{
            this.meeting = params.meetingId
          })
  }

  getBack(){
    this.router.navigate(['/profile'])
  }

  createRating(){
    console.log('este es el id del meeting: ' + this.meeting)
    const {genericLevel, punctualityLevel, skillsLevel, comment} = this.ratingInfo
        this.ratingService.rateTeacherService(this.teacher._id, this.user._id, this.meeting, this.ratingInfo)
          .subscribe(res => {
            console.log(res);
          });

  }

  backClicked() {
          this._location.back();
      }

}



    // this.router.navigate(['/profile'])
