import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
