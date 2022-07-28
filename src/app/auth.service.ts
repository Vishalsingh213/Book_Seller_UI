import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserAuthentication } from './components/interfaces/userAuthentication';
import { AuthResponse } from './components/interfaces/authResponse';
import { TwoFactor } from './components/interfaces/twoFactor';
import { Observable } from 'rxjs';
import { EmbedDashboard } from './components/interfaces/embed-dashboard';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


 

  constructor(private http: HttpClient) { }

  test()
  {
    return this.http.get("http://localhost:4330/api/User/GetUserList");
  }
  
  login(userForAuth: UserAuthentication) {
    return this.http.post<AuthResponse>("http://localhost:4330/api/Login/login", userForAuth);
  }

  twoStepLogin(twoFactor : TwoFactor)
  {
    return this.http.post<AuthResponse>("http://localhost:4330/api/Login/twoFactorAuthentication", twoFactor);
  }
  
  dashBoard() 
  {
    return this.http.get("http://localhost:4330/api/DashBoard/getDashBoard");
  }
}
