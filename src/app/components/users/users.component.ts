import { Component, OnInit } from '@angular/core';
 import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private _auth :AuthService) { }
  nums:number[] = [1,2,3,3] ;

  ngOnInit(): void {
    this._auth.test().subscribe();
  }

}
