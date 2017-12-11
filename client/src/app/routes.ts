import { Routes } from '@angular/router';

// import {HomeComponent} from './home/home.component';
// import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {SignupformComponent} from './signupform/signupform.component';
import {ProfileComponent} from './profile/profile.component';
import {SubjectComponent} from './subject/subject.component';
import {FindteachersComponent} from './findteachers/findteachers.component';
import {IsLoggedInService} from './services/isLoggedIn.canactivate.service';
import { ProfdetailsComponent } from './profdetails/profdetails.component'
import {RatingComponent} from './rating/rating.component'

export const routes: Routes = [
    { path: '', component: LoginformComponent },
    // { path: 'user',  component: UserprofileComponent,canActivate: [ IsLoggedInService ]  },
    { path: 'login',  component: LoginformComponent,  },
    { path: 'signup',  component: SignupformComponent,  },
    { path: 'profile',  component: ProfileComponent, },
    { path: 'subject',  component: SubjectComponent, },
    { path: 'subject/:subject',  component: FindteachersComponent, },
    { path: 'subject/:subject/:teacherid',  component: ProfdetailsComponent, },
    { path: 'rating/new/:teacherid',  component: RatingComponent, },
    //{ path: '**', redirectTo: '' }
];
