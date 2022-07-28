import { Component, OnInit } from '@angular/core';
import * as QuickSightEmbedding from 'amazon-quicksight-embedding-sdk';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { AwsquicksightService } from '../services/awsquicksight.service';
import { DashboardName } from '../interfaces/dashboardName';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  dashboard: any;
  dashboard_key: any;

  constructor( private _authService: AuthService,private _quicksightservice: AwsquicksightService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dashboard_key= this.route.snapshot.queryParamMap.get('dashboard_key');
    debugger
    this.GetDashboardURL(this.dashboard_key);
  }

  public async GetDashboardURL(key : any) {
    let dashBoardKey: DashboardName = {
      dashName: key
    }
    this._quicksightservice.getQuicksightUrl(dashBoardKey).subscribe((result : any) =>{
      debugger;
      let url = result["url"];
      this.Dashboard(url);
    },(error) => {

    });
  }

  public Dashboard(embeddedURL: any) {
    var containerDiv = document.getElementById("dashboardContainer");
    var options = {
      url: embeddedURL,
      container: containerDiv,
      scrolling: "yes",
      height: "850px",
      width: "100%"
    };
    var dashboard = QuickSightEmbedding.embedDashboard(options);
  }

}
