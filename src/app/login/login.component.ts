import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, NgControlStatus} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user : any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = { email: '', password: ''}
  }

  goTosignUp(){
    this.router.navigate(['/signUp']);
  }
  goToForgotPassword(){
    this.router.navigate(['/forgotpwd']);
  }

  signIn(){
    localStorage.setItem('loggedStatus', "in");
    localStorage.setItem('user', this.user);
    this.router.navigate(['/home']);
  }

}
