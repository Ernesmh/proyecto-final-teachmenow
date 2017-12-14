import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  user:object;
  meeting: Array<any>;
  teach: Boolean = false;
  constructor( public router:Router, public authService:AuthService, public route:ActivatedRoute) {
    // route.params.subscribe(params => {
    //   this.userService.getUserById(req.params['id'])
    //     .subscribe(user => this.user = user);
    // })
  }

  ngOnInit() {
    this.authService.isLoggedIn();
    this.profileData();
  }

  logout() {
      this.authService.logout()
      .subscribe(() => this.router.navigate(['/login']));
  }

  profileData(){
    this.authService.getUser()
      .subscribe(user => {
        console.log(user);
        if(user.role == "teacher") this.teach = true;
        console.log(this.teach)
        this.user = user;
          this.paintMeetings(user._id);
       });

  }

  closeMeeting(studentID){
    this.authService.closeMeetingService(studentID)
      .subscribe(meeting => console.log(meeting));
  }

  paintMeetings(userid){
    console.log(userid);
    this.authService.findMeetings(userid)
      .subscribe(meeting => {
        meeting = meeting.map(e => {
          e.date = e.date.slice(0, e.date.indexOf('T'))
          return e;
        })
        this.meeting = meeting
      })

  }

  goRating(id, meetingID){
    console.log(id , meetingID)
    this.router.navigate(['/rating/new', id, meetingID])
  };



}
