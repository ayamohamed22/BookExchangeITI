import { UserHaveBookItem } from "../../../models/user-want.book.model";
import { LoginService } from "./../../../services/user/login/login.service";
import { Component, OnInit, Input } from "@angular/core";
import { Book } from "src/app/models/book_item.model";
import { ModalService } from "../_modal";

@Component({
  selector: "app-book-item",
  templateUrl: "./book-item.component.html",
  styleUrls: ["./book-item.component.css"]
})
export class BookItemComponent implements OnInit {
  @Input() book: UserHaveBookItem;
  bindBook: Book;
  constructor(
    private modalService: ModalService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.bindBook = this.book.Book;
  }
  openModalPreview() {
    this.modalService.open(this.book.Book.Book_Id + "Modal");
  }
  openAddRequest() {
    this.modalService.open(this.book.Book.Book_Id + "AddBookModal");
  }
}
