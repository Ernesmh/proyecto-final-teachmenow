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
  user: Array<Object>=[];
  teacher: Object;
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

  createRating(teacherID, user){
      console.log("este es el usuario" + this.user)
      user=this.user;
      this.route.params.subscribe(params => {
        this.ratingService.rateTeacherService(params['teacherid'], user)
          .subscribe(user => {
            console.log("eoooo" + user)
            this.user = user});
          })

    this.router.navigate(['/profile'])
  }
}
