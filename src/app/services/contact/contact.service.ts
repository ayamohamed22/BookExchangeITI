import { Injectable } from '@angular/core';
import { concat, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { contact } from 'src/app/models/contact_item.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  report(contact:contact): Observable<Response> {
    return this.http.post<Response>(
      "",
      concat
    );
  }
}
