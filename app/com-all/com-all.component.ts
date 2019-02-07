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
  ngOnInit() {
    this.urlData = this.router.url.slice(1);
  }
}
