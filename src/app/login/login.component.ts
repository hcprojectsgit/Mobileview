import { FormsModule } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;

  loginUserData = {

  }
  constructor(private  _auth : AuthService) {

   }

  ngOnInit(): void {
  }


  loginUser()  {
   this._auth.loginUser(this.loginUserData)
   .subscribe(
     res => console.log(res),
     err => console.log(err)
   )
  }
}
