import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UserAuthentication } from '../interfaces/userAuthentication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hasError: boolean = false;
  isLoadingBar: boolean = false;
  
  
  constructor(
    private fb: FormBuilder,
    private _auth :AuthService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });


  onSubmit = (loginFormValue: any) => {
    const login = { ...loginFormValue };
    const userForAuth: UserAuthentication = {
      userName: login.email,
      password: login.password
    }

    this._auth.login(userForAuth).subscribe(res => {
      this.isLoadingBar = false;
      this.router.navigate(['/otp-verification'], { queryParams: { email: login.email } });
      this.hasError = false;
    },
      error => {
        this.isLoadingBar = false;
        this.hasError = true;
      });
  }

  login(event : any)
  {
    var data = event.target.emailid
    debugger;
  }
  
}
