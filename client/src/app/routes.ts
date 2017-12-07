import { Routes } from '@angular/router';

// import {HomeComponent} from './home/home.component';
// import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {SignupformComponent} from './signupform/signupform.component';
import {ProfileComponent} from './profile/profile.component';
import {IsLoggedInService} from './services/isLoggedIn.canactivate.service';

export const routes: Routes = [
    { path: '', component: LoginformComponent },
    // { path: 'user',  component: UserprofileComponent,canActivate: [ IsLoggedInService ]  },
    { path: 'login',  component: LoginformComponent,  },
    { path: 'signup',  component: SignupformComponent,  },
    { path: 'profile',  component: ProfileComponent, },
    //{ path: '**', redirectTo: '' }
];
