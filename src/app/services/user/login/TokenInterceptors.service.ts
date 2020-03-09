import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TokenInterceptorsService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem("token");
    // req = req.clone({
    //   headers: req.headers.set("Authorization", "Bearer " + token)
    // });
    // req = req.clone({
    //   headers: req.headers.set("Content-Type", "application/json")
    // });
    // req = req.clone({ headers: req.headers.set("Accept", "application/json") });
    // req = req.clone({
    //   headers: req.headers.set("Origin", "http://localhost:4200")
    // });

    // return next.handle(req).pipe(
    //   map((event: HttpEvent<any>) => {
    //     if (event instanceof HttpResponse) {
    //       console.log("event--->>>", event);
    //     }
    //     return event;
    //   })
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        // Origin: "http://localhost:4200",
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    return next.handle(req);
  }

  constructor() {}
}
