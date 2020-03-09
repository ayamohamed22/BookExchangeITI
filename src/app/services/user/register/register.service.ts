import { Observable } from "rxjs";
import { User } from "./../../../models/user.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(user: User): Observable<Response> {
    return this.http.post<Response>(
      "http://localhost:52558/api/auth/register",
      user
    );
  }
}
