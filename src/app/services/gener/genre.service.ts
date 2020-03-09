import { RequestItemMin } from "src/app/models/request_item.model";
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
  getBookByGenreId(
    pageNumber,
    pageSize,
    type,
    genreId
  ): Observable<RequestItemMin[]> {
    return this.http.get<RequestItemMin[]>(
      "http://localhost:52558/api/home/genres",
      {
        params: { pageNumber, pageSize, type, genreId }
      }
    );
  }
}
