import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  BASEURL = environment.BASEURL;

  user:Object;
  constructor(public router:Router, public authService:AuthService, public userService: UserService, public route:ActivatedRoute) { }

  ngOnInit() {
    this.profileData();
  }


  logout() {
      this.authService.logout()
      .subscribe(() => this.router.navigate(['/login']));
  }

  goEditing() {
    this.router.navigate(['/profile', 'edit']);
  }

  profileData(){
    this.authService.getUser()
      .subscribe(user => {
        this.user = user;
       });
}

}
