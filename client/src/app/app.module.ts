import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthService } from './services/auth.service';
import { AgmCoreModule } from '@agm/core'
// import { HomeComponent } from './home/home.component';
// import { UserprofileComponent } from './userprofile/userprofile.component';
import { RouterModule } from '@angular/router';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { UserService } from './services/user.service'
import { SubjectService } from './services/subject.service'
import {routes} from './routes';
import { SignupformComponent } from './signupform/signupform.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ProfileComponent } from './profile/profile.component';
import { SubjectComponent } from './subject/subject.component';
import { FindteachersComponent } from './findteachers/findteachers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    // HomeComponent,
    // UserprofileComponent,
    SignupformComponent,
    UserprofileComponent,
    ProfileComponent,
    SubjectComponent,
    FindteachersComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBm9q2GJO-AMxroWf4r0aYWsTtSGZn9S0U'
    })
  ],
  providers: [AuthService, IsLoggedInService, UserService, SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
