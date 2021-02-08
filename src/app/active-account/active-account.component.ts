import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-account',
  templateUrl: './active-account.component.html',
  styleUrls: ['./active-account.component.css']
})
export class ActiveAccountComponent implements OnInit {

  submitUserData = {

  }

  constructor(private  _auth: AuthService) { }

  ngOnInit(): void {
  }

  submitUser()  {
    this._auth.loginUser(this.submitUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
   }

}
