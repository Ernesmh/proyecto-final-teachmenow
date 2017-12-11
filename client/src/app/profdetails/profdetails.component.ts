import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profdetails',
  templateUrl: './profdetails.component.html',
  styleUrls: ['./profdetails.component.css']
})
export class ProfdetailsComponent implements OnInit {
user: Array<Object>=[];
  constructor(public router:Router, public authService: AuthService, public userService: UserService, public route:ActivatedRoute) { }

  ngOnInit() {
    this.authService.isLoggedIn();
    this.getTeacherById()

  }

  getTeacherById(){
    this.route.params.subscribe(params => {
      this.userService.wantTeacherService(params['teacherid'])
        .subscribe(user => {
          console.log(user)
          this.user = user});
        })
      }

  getBack(){
    this.router.navigate(['/subject'])
  }
}
