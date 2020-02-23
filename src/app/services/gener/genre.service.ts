import { Book } from "./../../models/book_item.model";
import { Observable } from "rxjs";
import { Genre } from "./../../models/genre_book.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GenreService {
  constructor(private http: HttpClient) {}
  getAllGeners(PageNumber, pagSize, orderType): Observable<Genre[]> {
    return this.http.get<Genre[]>("http://localhost:52558/api/genres", {
      params: { orderType, pagSize, PageNumber }
    });
  }
  getBookByGenreId(id: number): Observable<Book[][]> {
    return this.http.get<Book[][]>("http://localhost:52558/api/genres/" + id);
  }
}
