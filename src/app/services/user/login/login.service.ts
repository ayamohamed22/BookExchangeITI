import { UserService } from "./../user/user.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Subject } from "rxjs";
import { User } from "src/app/models/user.model";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  loggedIn: Subject<boolean>;
  isUserAdmin: Subject<boolean>;
  currentUser: User;
  constructor(private http: HttpClient) {
    this.loggedIn = new Subject();
    this.isUserAdmin = new Subject();
  }
  login(credintial) {
    this.http
      .post<string>("http://localhost:52558/api/auth/login", credintial)
      .subscribe(
        res => {
          var token = res;
          localStorage.setItem("token", token);
          this.loggedIn.next(true);
          console.log(res);

          return true;
        },
        err => {
          this.loggedIn.next(false);
          return false;
        }
      );
  }
  isLoggedIn(): boolean {
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem("token");
    if (!token) {
      this.loggedIn.next(false);
      return false;
    }
    console.log(jwtHelper.decodeToken(token));

    let isTokenExpired = jwtHelper.isTokenExpired(token);
    this.loggedIn.next(!isTokenExpired);
    return !isTokenExpired;
  }
  isUSerAdmin() {
    if (this.isLoggedIn()) {
      let jwtHelper = new JwtHelperService();
      let token = localStorage.getItem("token");
      var role = jwtHelper.decodeToken(token)[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ];

      console.log(role);
      console.log(jwtHelper.decodeToken(token));
    }
  }
  logout() {
    localStorage.removeItem("token");
    this.loggedIn.next(false);
  }
  getCurrentLogginId() {
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem("token");
    return jwtHelper.decodeToken(token)["LogUserId"];
  }
  isLoggedInNew() {
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    // console.log(jwtHelper.decodeToken(token));

    let isTokenExpired = jwtHelper.isTokenExpired(token);
    return !isTokenExpired;
  }
}
