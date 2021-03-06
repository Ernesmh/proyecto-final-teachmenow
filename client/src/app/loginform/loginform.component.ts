import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

interface LoginForm {
  username: any;
  password: string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  formInfo: LoginForm = {
    username: "",
    password: ""
  };
  user: any;
  error: string;
  constructor(public auth: AuthService, public userService: UserService, public router: Router) {
    this.user = this.userService.getUserById(this.user);
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user)
  }

  ngOnInit() {
    this.auth.isLoggedIn().subscribe();
  }

  login() {
    const { username, password } = this.formInfo;
    if (username != "" && password != "") {
      this.auth.login(username, password)
      .subscribe(() => this.router.navigate(['/profile']));


    } else {
      console.log("You must set a username and a password");
    }
  }

  goLogin(){
    this.router.navigate(['/signup']);
  }

}
