import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public testee = '???';

  constructor() { }

  ngOnInit() {
  }

  public testeee() {
    this.testee = 'Ok!';
  }

}
