import { UserHaveBookItem } from "./../../models/user-want.book.model";
import { UserHaveBook } from "../../models/user-want.book.model";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "src/app/models/book_item.model";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  baseUrl = "http://localhost:52558/api";
  constructor(private http: HttpClient) {}
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl + "/books");
  }
  addBook(book: Book) {
    var a = new HttpHeaders();
    // "Authorization: Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsIkxvZ1VzZXJJZCI6IjEiLCJleHAiOjE1ODIxMzMzNTAsImlzcyI6InNtZXNrLmluIiwiYXVkIjoicmVhZGVycyJ9.AaSRbI3n7D3ecg6CPBUjVRMMWJZjWcTLGmZVuk_YjYE"
    this.http.post<Response>(this.baseUrl + "/books", book).subscribe(
      res => {
        if (res.status == 204) {
          return true;
        } else {
          return false;
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.baseUrl + "/Books/" + id);
  }
  getHaveBookByUserId(pageNumber, pageSize, userId?): Observable<UserHaveBook> {
    // debugger;
    return this.http.get<UserHaveBook>("http://localhost:52558/api/home/have", {
      params: { pageNumber, pageSize, userId }
    });
  }
  getUserHaveBookByBookId(bookId): Observable<UserHaveBook> {
    return this.http.get<UserHaveBook>(
      "http://localhost:52558/api/home/book/have",
      {
        params: { bookId }
      }
    );
  }
}
