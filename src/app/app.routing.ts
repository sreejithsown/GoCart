import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecentlyViewedComponent } from './recently-viewed/recently-viewed.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';

const APP_ROUTES: Routes = [
{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'forgotpwd', component: ForgotPasswordComponent },
{ path: 'signUp', component: SignupComponent },
{ path: '**', component: HomeComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);