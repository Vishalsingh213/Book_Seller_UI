import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginPageView:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  loginPage()
  {
    if(this.loginPageView === false)
      this.loginPageView = true;
    else
      this.loginPageView = false;
  }

}
