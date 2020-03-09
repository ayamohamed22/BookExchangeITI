import { User } from "src/app/models/user.model";
import { RequestsService } from "src/app/services/requests/requests.service";
import { UserHaveBookItem } from "../../../models/user-want.book.model";
import { LoginService } from "./../../../services/user/login/login.service";
import { UserService } from "./../../../services/user/user/user.service";
import { Book } from "./../../../models/book_item.model";
import { Component, OnInit, Input } from "@angular/core";
import { ModalService } from "../_modal";
import { ServiceNameService } from "src/app/services/search/search.service";

@Component({
  selector: "app-add-request",
  templateUrl: "./add-request.component.html",
  styleUrls: ["./add-request.component.css"]
})
export class AddRequestComponent implements OnInit {
  @Input() requestedBook: UserHaveBookItem;
  userHaveBooks: Book[];
  currentuUserId;
  bindBook: Book;
  bindUser: User;
  selectedBook: Book;
  error: string;

  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private modalService: ModalService,
    private serviceNameService: ServiceNameService,
    private requestsService: RequestsService
  ) {
    this.selectedBook = new Book();
    this.bindBook = new Book();
    this.bindUser = new User();
  }

  ngOnInit() {
    if (this.loginService.isLoggedInNew()) {
      this.currentuUserId = this.loginService.getCurrentLogginId();
    }

    this.bindBook = this.requestedBook.Book;
    this.bindUser = this.requestedBook.User;
    console.log(this.requestedBook);
  }
  closeModale(id) {
    this.modalService.close(this.requestedBook.Book.Book_Id + "AddBookModal");
  }
  keyword = "Title";
  data = Book[0];

  selectEvent(item: Book) {
    console.log(item);
    this.selectedBook = item;
  }

  onChangeSearch(val: string) {
    this.currentuUserId = this.loginService.getCurrentLogginId();
    this.serviceNameService
      .searchByNameAtUser(this.currentuUserId, val)
      .subscribe(res => {
        this.data = res;
      });
  }

  onFocused(e) {
    // do something when input is focused
  }
  makeRequest() {
    if (this.selectedBook.Book_Id) {
      this.error = "";
      this.requestsService
        .newRequest(
          this.currentuUserId,
          this.requestedBook.User.UserId,
          this.requestedBook.Book.Book_Id,
          this.selectedBook.Book_Id
        )
        .subscribe(
          succ => {
            this.error = succ.toString();
          },
          err => {
            this.error = err.message;
          }
        );
    } else {
      this.error = "You need to select A book";
    }
  }
}
