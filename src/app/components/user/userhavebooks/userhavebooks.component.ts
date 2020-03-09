import { BooksService } from "./../../../services/book/books.service";
import { UserHaveBookItem } from "./../../../models/user-want.book.model";
import { UserService } from "./../../../services/user/user/user.service";
import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/models/book_item.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-userhavebooks",
  templateUrl: "./userhavebooks.component.html",
  styleUrls: ["./userhavebooks.component.css"]
})
export class UserhavebooksComponent implements OnInit {
  books: UserHaveBookItem[];
  userId: number;

  constructor(
    private user: UserService,
    private route: ActivatedRoute,
    private bookService: BooksService
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.parent.params["id"];

    this.bookService.getHaveBookByUserId(1, 20, this.userId).subscribe(res => {
      this.books = res.books;
    });
  }
}
