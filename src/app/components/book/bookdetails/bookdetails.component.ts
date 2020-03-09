import { UserHaveBook } from "./../../../models/user-want.book.model";
import { UserHaveBookItem } from "./../../../models/user-want.book.model";
import { BooksService } from "./../../../services/book/books.service";
import { Component, OnInit, Input } from "@angular/core";
import { Book } from "src/app/models/book_item.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-bookdetails",
  templateUrl: "./bookdetails.component.html",
  styleUrls: ["./bookdetails.component.css"]
})
export class BookdetailsComponent implements OnInit {
  // @Input() id: number;
  // id: number;
  book: Book;
  userHaveBook: UserHaveBook;
  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) {
    this.book = new Book();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params["id"];
      this.booksService.getBookById(id).subscribe(res => {
        this.book = res;
      });
      this.booksService.getUserHaveBookByBookId(id).subscribe(res => {
        this.userHaveBook = res;
      });
    });
  }
}
