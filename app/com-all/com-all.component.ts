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
  public textContent;
  public dropdownValues;
  public menuTitle;
  public priceFlag = false;
  public menuFlag = false;
  public priceTitle = "PRICE";

  clickPrice(priceValue) {
    this.priceFlag = true;
    this.priceTitle = priceValue;
  }

  clickMenu(menuValue) {
    this.menuFlag = true;
    this.menuTitle = menuValue;
  }

  ngOnInit() {
    this.urlData = this.router.url.slice(1);
    this.menuTitle = this.urlData;
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
