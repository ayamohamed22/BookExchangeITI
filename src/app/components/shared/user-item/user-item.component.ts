import { UserHaveBookItem } from "./../../../models/user-want.book.model";
import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-user-item",
  templateUrl: "./user-item.component.html",
  styleUrls: ["./user-item.component.css"]
})
export class UserItemComponent implements OnInit {
  @Input() item: UserHaveBookItem[];
  constructor() {}

  ngOnInit() {}
}
