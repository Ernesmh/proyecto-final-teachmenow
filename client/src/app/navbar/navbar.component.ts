import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:Object;
  constructor(public router:Router, public authService:AuthService, public route:ActivatedRoute) { }

  ngOnInit() {
  }


  logout() {
      this.authService.logout()
      .subscribe(() => this.router.navigate(['/login']));
  }


}
