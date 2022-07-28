import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { TwoFactor } from '../../interfaces/twoFactor';

@Component({
  selector: 'app-otpvalidation',
  templateUrl: './otpvalidation.component.html',
  styleUrls: ['./otpvalidation.component.scss']
})
export class OtpvalidationComponent implements OnInit {

  public hasError: boolean = false;
  userName: any;
  emailAddress: any;
  

  constructor(
    private _route: ActivatedRoute,
    private fb: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.userName = this._route.queryParams;
    this.emailAddress = this.userName._value.email;
  }

  otpForm = this.fb.group({
    otpCode: ['', Validators.required],
  });

  onSubmit = (otpForm: any) => {
    // this._provider = this._route.snapshot.queryParams['provider'];
    // this._email = this._route.snapshot.queryParams['email']; 
    // this._returnUrl = this._route.snapshot.queryParams['returnUrl'];
    
    const formValue = { ...otpForm };
    let twoFactorDto: TwoFactor = {
      email: this.emailAddress,
      token: formValue.otpCode,
    };

    this._authService.twoStepLogin(twoFactorDto).subscribe(
      (res) => {
          debugger;
        if(res.isAuthSuccessful === true)
        {
            localStorage.setItem('token', res.token);
            localStorage.setItem('userid', btoa(res.userId));
            // this._authService.sendAuthStateChangeNotification(res.IsAuthSuccessful);
            this._router.navigate(['/'],{
            queryParams: {userId : res.userId},
        }); 
      }
      },
      (error) => {
        this.hasError = true;
        // this._toastr.error('Error', error.StatusDescription);
      }
    );
    this._router.navigate(['/']);
  };
}
