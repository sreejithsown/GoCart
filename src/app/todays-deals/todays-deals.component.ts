import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todays-deals',
  templateUrl: './todays-deals.component.html',
  styleUrls: ['./todays-deals.component.css']
})
export class TodaysDealsComponent implements OnInit {
  public dealData : any;
  constructor() { }

  ngOnInit() {
    this.dealData = [
      {
        category: 'Home Appliances',
        itemsImages : [{url:'assets/images/deal6.jpg'},{url:'assets/images/deal1.jpg'},{url:'assets/images/deal10.jpg'}]

      },
      {
        category: "Women's fashion",
        itemsImages : [{url:'assets/images/deal2.jpg'},{url:'assets/images/deal3.jpg'},{url:'assets/images/deal4.jpg'}]
      },
      {
        category: 'Mobiles , Computers',
        itemsImages : [{url:'assets/images/deal5.jpg'},{url:'assets/images/deal8.jpg'},{url:'assets/images/deal9.jpg'}]
      }];
  }

}
