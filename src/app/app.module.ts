import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RecentlyViewedComponent } from './recently-viewed/recently-viewed.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { PopularCategoriesComponent } from './popular-categories/popular-categories.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RatingComponent } from './rating/rating.component';


import { RatingModule } from 'ngx-bootstrap';
import { YourGocartComponent } from './your-gocart/your-gocart.component';
import { TodaysDealsComponent } from './todays-deals/todays-deals.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DealItemComponent } from './deal-item/deal-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CarouselComponent,
    RecentlyViewedComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignupComponent,
    FooterComponent,
    PopularCategoriesComponent,
    WishlistComponent,
    RatingComponent,
    YourGocartComponent,
    TodaysDealsComponent,
    ContactUsComponent,
    DealItemComponent
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(), routing, FormsModule, RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
