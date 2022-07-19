import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuthentication } from './components/interfaces/userAuthentication';
import { AuthResponse } from './components/interfaces/authResponse';
import { TwoFactor } from './components/interfaces/twoFactor';
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
    return this.http.post<AuthResponse>("http://localhost:4330/api/User/login", userForAuth);
  }

  twoStepLogin(twoFactor : TwoFactor)
  {
    return this.http.post<AuthResponse>("http://localhost:4330/api/User/twoFactorAuthentication", twoFactor);
  }
}
