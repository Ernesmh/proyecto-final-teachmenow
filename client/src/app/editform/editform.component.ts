import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

// interface LoginForm {
//   username: String,
//   role: String,
//   subject: String,
//   price_per_hour: Number,
//   level: String,
//   email: String,
//   phone: Number,
//   description:String
// }



@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  user:Object;
  formInfo: any = {
    username: "",
    role: "",
    subject: "",
    price_per_hour: 0,
    level: "",
    email: "",
    phone: 0,
    description:""
  };
  constructor(public router:Router, public authService:AuthService, public userService:UserService, public route:ActivatedRoute) { }

  ngOnInit() {
    this.lookUser()
  }

  editUser(user){
    console.log(this.formInfo);
    const {username, role, subject, price_per_hour, level, email, phone,description} = this.formInfo;
      console.log(`Editing in component`)
      this.userService.updateUser(user._id, username, role, subject, price_per_hour, level, email, phone, description)
      .map(user => console.log(user))
      .subscribe();


  }

  lookUser(){
  this.authService.getUser()
    .subscribe(user => {
      console.log(user);
      this.user = user;
     });

  }

}
