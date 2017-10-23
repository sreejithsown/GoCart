import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecentlyViewedComponent } from './recently-viewed/recently-viewed.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'forgotpwd', component: ForgotPasswordComponent },
{ path: 'signUp', component: SignupComponent },
{ path: 'wishlist', component: WishlistComponent },
{ path: '**', component: HomeComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
