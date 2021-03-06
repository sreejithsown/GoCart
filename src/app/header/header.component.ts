import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public filterQuery = '';
  public loggedIn : boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log("status",  localStorage.getItem('loggedStatus'));
    if(localStorage.getItem('loggedStatus') == 'in'){
      this.loggedIn = true;
    }else{
      this.loggedIn = false;
    }
  }

  logOut(){
    localStorage.setItem('loggedStatus', 'out');
    localStorage.setItem('user', '');
    this.router.navigate(['/login']);
  }
  

  searchKeys(event) {
    let isNumber = event.charCode >= 48 && event.charCode <= 57;
    let isAlphabet = event.charCode >= 65 && event.charCode <= 90 || event.charCode >= 97 && event.charCode <= 122;
    let allowedSplChars = [32, 45, 46, 47, 58, 64, 95];
    let isSplChar = _.includes(allowedSplChars, event.charCode);
    return isNumber || isAlphabet || isSplChar;
  }

  clearSearch() {
    this.filterQuery = '';
  }

}
