import { Book } from "./../../models/book_item.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}

  searchByName(title: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(
      "http://localhost:52558/api/search?name=" + title
    );
  }
  searchByNameAtUser(userId, bookTitle: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(
      `http://localhost:52558/api/user/search/have`,
      {
        params: { bookTitle, userId }
      }
    );
  }
}
