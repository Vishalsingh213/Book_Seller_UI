import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OtpReqModel } from '../models/otp-req-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public _userId: string = '';
  loginPageView:boolean = false;
  name:string | undefined;
  
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,) {
    
  }

  ngOnInit(): void {
    this._userId = this._route.snapshot.queryParams['userId'];
    this.get(this._userId);
  }
  get(userId : any)
  {

    
  }
  loginPage()
  {
    if(this.loginPageView === false)
      this.loginPageView = true;
    else
      this.loginPageView = false;
  }
  cart()
  {
    debugger;
    this.name=this._userId;
    // this._router.navigate(['/myCart'],queryParams{
      
    // })
  }

}
