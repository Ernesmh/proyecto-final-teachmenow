import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import { Router } from '@angular/router';

interface LoginForm{
  username:any;
  password:string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  formInfo:LoginForm = {
    username: "",
    password: ""
  };
  user:any;
  error: string;
  constructor(public auth:AuthService, public userService:UserService, public router: Router) {
    this.user = this.userService.getUserById(this.user);
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user=user)
  }

  ngOnInit() {
    this.auth.isLoggedIn().subscribe();
  }

  login(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){

      console.log('este es mi id: '+ this.user)
      console.log(`Login with ${username} ${password}`)
      this.auth.login(username, password).subscribe(
        (user) => {
        this.router.navigate(['/profile'])
      },
      (err) => {
        this.error = err;
      });


    } else{
      console.log("You must set a username and a password");
    }
  }

}
