import { Book } from "./../../../models/book_item.model";
import { Component, OnInit, Input } from "@angular/core";
import { Route } from "@angular/compiler/src/core";
import { ActivatedRoute } from "@angular/router";
import { UserHaveBookItem } from "src/app/models/user-want.book.model";

@Component({
  selector: "app-booklist",
  templateUrl: "./booklist.component.html",
  styleUrls: ["./booklist.component.css"]
})
export class BooklistComponent implements OnInit {
  @Input() books: UserHaveBookItem[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
