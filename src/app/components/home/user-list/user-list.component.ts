import { UserHaveBookItem } from "./../../../models/user-want.book.model";
import { RequestItemMin } from "src/app/models/request_item.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  @Input() item: UserHaveBookItem[];
  constructor() {}

  ngOnInit() {}
}
