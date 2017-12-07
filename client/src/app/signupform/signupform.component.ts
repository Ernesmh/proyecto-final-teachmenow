import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
formInfo = {
  username:"",
  password:"",
  role:""
}
  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  signup(){
    const {username, password, role} = this.formInfo;
    if(username != "" && password != "" && role !=""){
      console.log(`Signup with ${username} ${password} ${role}`)
      this.auth.signup(username, password, role)
      .map(user => console.log("ESTE ES EL MEGAUSUARIO" + user))
      .subscribe();
    } else{
      console.log("You must set a username and a password");
    }
  }

}
