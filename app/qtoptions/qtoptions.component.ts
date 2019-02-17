import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-qtoptions',
  templateUrl: './qtoptions.component.html',
  styleUrls: ['./qtoptions.component.css']
})
export class QTOptionsComponent implements OnInit {
  public selected;
  private selectedResponse;
  public results;
  private message: string;
  private baseUrl = '';
  public pageLoader = true;
  constructor(private data: DataService, private httpClient:HttpClient) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
    this.selected = JSON.parse(this.message);
    let priceRange;
    if(this.selected.price === "$") {
      priceRange = 2.1;
    } else if(this.selected.price === "$$") {
      priceRange = 2.2;
    } else {
      priceRange = 2.3;
    }
    this.httpClient.get('https://www.yelp.com/search/snippet?' + 'cflt=' + this.selected.menu + '&PriceRange=' + 'priceRange' + '&parent_request_id=e4370311a08eefb0&request_origin=user').subscribe((response)=>{
      this.selectedResponse = response;
      this.results = this.selectedResponse.searchPageProps.searchResultsProps.searchResults;
      this.pageLoader = false;
  });
  }

}
