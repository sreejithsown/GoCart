import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, NgControlStatus} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user ={};
  }

  goTosignIn(){
    this.router.navigate(['/login']);
  }

  signUp(){
    console.log("welcome to signup", this.user);
  }

}
