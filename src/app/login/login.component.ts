import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: any = "";
  password: any = "";

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    // if (
    // this.email.toString() == "admin@admin.com"
    // &&
    // this.password.toString() == "admin"
    // ) {
    this.router.navigate(["/home"])
    // }
    // else {
    //   alert("Email or Password is Wrong !")
    // }
  }

  printValue(e: any) {
    console.log(e.value)
  }
}
