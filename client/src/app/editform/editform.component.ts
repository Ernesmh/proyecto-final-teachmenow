import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import { FileUploader } from "ng2-file-upload";

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
  userID: string;
  formInfo: any = {
    // username: "",
    // role: "",
    // subject: "",
    // price_per_hour: 0,
    // level: "",
    // email: "",
    // phone: 0,
    // description:"",
    // avatar:""
  };

  // uploader: FileUploader = new FileUploader({
  //    url: `http://localhost:3000/user/${this.userID}/edit`
  //  });
  uploader: FileUploader;

    feedback: string;

  constructor(public router:Router, public authService:AuthService, public userService:UserService, public route:ActivatedRoute) { }

  ngOnInit() {
    this.authService.getUser()
        .map(user => {
          console.log("ID", user._id)
          this.userID = user._id
        })
        .subscribe(e => {
          this.uploader = new FileUploader({
             url: `http://localhost:3000/user/${this.userID}/edit`
           });
           console.log(this.uploader)
           this.uploader.onSuccessItem = (item, response) => {
             this.feedback = JSON.parse(response).message;
           };

           this.uploader.onErrorItem = (item, response, status, headers) => {
             this.feedback = JSON.parse(response).message;
           };
        });
    this.lookUser();
  }





  // editUser(user){
  //   console.log(this.formInfo);
  //   const {username, role, subject, price_per_hour, level, email, phone,description, avatar} = this.formInfo;
  //     console.log(`Editing in component`)
  //     this.userService.updateUser(user._id, username, role, subject, price_per_hour, level, email, phone, description, avatar)
  //     .map(user => console.log(user))
  //     .subscribe();
  //
  //
  // }

  submit() {

    this.uploader.onBuildItemForm = (item, form) => {
      form.append('username', this.formInfo.username);
      form.append('role', this.formInfo.role);
      form.append('subject', this.formInfo.subject);
      form.append('price_per_hour', this.formInfo.price_per_hour);
      form.append('level', this.formInfo.level);
      form.append('email', this.formInfo.email);
      form.append('phone', this.formInfo.phone);
      form.append('description', this.formInfo.description);
    };
    console.log(this.formInfo);
  console.log("hago subida de archivos")
    this.uploader.uploadAll();
    this.uploader.onCompleteItem=  () => console.log("hecho")
  }





  lookUser(){
  this.authService.getUser()
    .subscribe(user => {
      console.log(user);
      this.user = user;
     });

  }

  goBack(){
    this.router.navigate(['/profile'])
  }
}
