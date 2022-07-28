import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AwsquicksightService } from '../services/awsquicksight.service';

@Component({
  selector: 'app-analytisc',
  templateUrl: './analytisc.component.html',
  styleUrls: ['./analytisc.component.scss']
})
export class AnalytiscComponent implements OnInit {


  details: any = [];
  key:any;

  constructor(private _router: Router,
    private _awsQuickSight : AwsquicksightService) { }

  ngOnInit(): void {
    this.getDashBoardDetail();
  }

  dashBoard1()
  {
    this.key = "First";
    this._router.navigate(['/dashboard'], { queryParams: {dashboard_key: this.key}});
  }
  dashBoard2()
  {
    this.key = "second";
    this._router.navigate(['/dashboard'], { queryParams: {dashboard_key: this.key}});
  }
  dashBoard3()
  {
    this.key = "third";
    this._router.navigate(['/dashboard'], { queryParams: {dashboard_key: this.key}});
  }
  dashBoard4()
  {
    this.key = "fourth";
    this._router.navigate(['/dashboard'], { queryParams: {dashboard_key: this.key}});
  }


  getDashBoardDetail()
  {
    this.details = this._awsQuickSight.getDashBoardDetail();
    debugger;
  }
}
