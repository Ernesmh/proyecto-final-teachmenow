import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  user:object;

  constructor( public router:Router, public authService:AuthService, public route:ActivatedRoute) {
    // route.params.subscribe(params => {
    //   this.userService.getUserById(req.params['id'])
    //     .subscribe(user => this.user = user);
    // })
  }

  ngOnInit() {
    this.authService.isLoggedIn();
  }

  logout() {
      this.authService.logout()
      .subscribe(() => this.router.navigate(['/login']));
  }


}
