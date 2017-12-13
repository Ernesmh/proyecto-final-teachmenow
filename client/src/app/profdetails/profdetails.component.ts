import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-profdetails',
  templateUrl: './profdetails.component.html',
  styleUrls: ['./profdetails.component.css']
})
export class ProfdetailsComponent implements OnInit {
user: Array<Object>=[];
  constructor(private _location: Location, public router:Router, public authService: AuthService, public userService: UserService, public route:ActivatedRoute) { }
  media:Number =0;
  ngOnInit() {
    this.authService.isLoggedIn();
    this.getTeacherById()

  }

  backClicked() {
          this._location.back();
      }

  getTeacherById(){
    this.route.params.subscribe(params => {
      this.userService.wantTeacherService(params['teacherid'])
        .subscribe(user => {
          this.media = user.rating.reduce((a,b) => { return a+= b },0)/user.rating.length;
          this.user = user});
        })
      }

  getBack(){
    this.router.navigate(['/subject'])
  }
}
