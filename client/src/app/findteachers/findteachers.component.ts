import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AgmCoreModule } from '@agm/core'

@Component({
  selector: 'app-findteachers',
  templateUrl: './findteachers.component.html',
  styleUrls: ['./findteachers.component.css']
})
export class FindteachersComponent implements OnInit {
  teacher: Array<Object>=[];
  title: string = 'My first AGM project';
  lat: number = 40.392597;
  lng: number = -3.698288;
  constructor(public router:Router, public authService: AuthService, public userService: UserService, public route:ActivatedRoute) { }

  ngOnInit() {
    this.authService.isLoggedIn();

  }

  getUserBySubject(){
    this.route.params.subscribe(params => {
      this.userService.getUserBySubject(params['subject'])
        .subscribe(teacher => this.teacher = teacher);
})

}}
