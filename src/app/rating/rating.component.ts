import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  public stars: any;
  constructor() { }

  ngOnInit() {
    this.stars = [{filled: true}, {filled: true},{filled: true},{filled: false},{filled: false}]
  }

}
