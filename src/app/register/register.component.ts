import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: any;
  password: any;
  Confirmpassword: any;
  Username : any;


  registerUserData = {

  }

  constructor(private  _auth : AuthService) { }

  ngOnInit(): void {
  }


  registerUser()  {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  console.log(this.Username);
  console.log(this.email);
  console.log(this.password);
  console.log(this.Confirmpassword);

   }

}
