import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AgmCoreModule } from '@agm/core'
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window'

@Component({
  selector: 'app-findteachers',
  templateUrl: './findteachers.component.html',
  styleUrls: ['./findteachers.component.css']
})
export class FindteachersComponent implements OnInit {
  user: Array<Object>=[];
  lat: number = 40.392633;
  lng: number = -3.698328;
  constructor(public router:Router, public authService: AuthService, public userService: UserService, public route:ActivatedRoute) { }


  ngOnInit() {
    //this.authService.isLoggedIn();
    this.getTeachersSubject()
  }

  getTeachersSubject(){
    this.route.params.subscribe(params => {
      this.userService.getUserBySubject(params['subject'])
        .subscribe(user => {
          console.log(user),

          this.user = user});
        })
      }

wantTeacher(teacherID){
    this.userService.wantTeacherService(teacherID)
      .subscribe(res => console.log(res));
      this.router.navigate(['/profile'])
}

}
