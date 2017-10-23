import { Component, OnInit, Input} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-deal-item',
  templateUrl: './deal-item.component.html',
  styleUrls: ['./deal-item.component.css']
})
export class DealItemComponent implements OnInit {

  @Input()
  item : any;
  constructor() { }

  ngOnInit() {
    console.log("-----------",this.item);
  }

}
