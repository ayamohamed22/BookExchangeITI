import { ModalService } from "./../_modal/modal.service";
import { LoginService } from "./../../../services/user/login/login.service";
import { UserHaveBookItem } from "./../../../models/user-want.book.model";
import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-user-item",
  templateUrl: "./user-item.component.html",
  styleUrls: ["./user-item.component.css"]
})
export class UserItemComponent implements OnInit {
  @Input() item: UserHaveBookItem;
  constructor(
    private loginService: LoginService,
    private modalService: ModalService
  ) {}

  ngOnInit() {}
  openAddRequest() {
    this.modalService.open(this.item.Book.Book_Id + "AddBookModal");
  }
}
