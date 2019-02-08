import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-com-all',
  templateUrl: './com-all.component.html',
  styleUrls: ['./com-all.component.css']
})
export class ComAllComponent implements OnInit {

  constructor(private router: Router) { }
  public urlData;
  public prices;
  public dropdownValues;
  ngOnInit() {
    this.urlData = this.router.url.slice(1);
    this.prices = ['$', '$$', '$$$'];
    if(this.urlData === 'Food'){
      this.dropdownValues = ['SURPRISE ME', 'AMERICAN', 'BURGERS', 'CHINESE', 'MEXICAN', 'PIZZA', 'SANDWICHES', 'SUSHI'];
    }
    else if(this.urlData === 'Drinks'){
      this.dropdownValues = ['SURPRISE ME', 'COFFEE', 'JUICE & SMOOTHIES', 'BEER GARDEN', 'COCKTAIL BAR', 'LOUNGES', 'SPORTS BAR', 'WINE BAR']
    }
    else {
      this.dropdownValues = ['SURPRISE ME', 'SHOOPING', 'TOURS', 'FITNESS', 'WINERIES', 'FARMS', 'ARTS', 'FASHION', 'NIGHTLIFE', 'ACTIVE', 'FESTIVALS'];
    }
  }


  
}
