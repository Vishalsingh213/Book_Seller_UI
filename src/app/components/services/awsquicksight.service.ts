import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmbedDashboard } from '../interfaces/embed-dashboard';
import { DashboardName } from '../interfaces/dashboardName';
import { DashBoardDetail } from '../interfaces/DashBoardDetail';
@Injectable({
  providedIn: 'root'
})
export class AwsquicksightService {

  constructor(private http: HttpClient) {

  }


  getQuicksightUrl(reqModel: DashboardName) 
  {
    return this.http.post<EmbedDashboard>("http://localhost:4330/api/DashBoard/getDashBoard",reqModel);
  }
  
  getDashBoardDetail()
  {
    return this.http.get<Observable<any[]>>("http://localhost:4330/api/DashBoard/getDashBoardDetails").subscribe();
  }


}
