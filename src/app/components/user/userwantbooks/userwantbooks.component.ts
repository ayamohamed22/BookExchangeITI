import { Component, OnInit } from "@angular/core";
import { Route } from "@angular/compiler/src/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user/user/user.service";
import { UserHaveBookItem } from "src/app/models/user-want.book.model";

@Component({
  selector: "app-userwantbooks",
  templateUrl: "./userwantbooks.component.html",
  styleUrls: ["./userwantbooks.component.css"]
})
export class UserwantbooksComponent implements OnInit {
  books: UserHaveBookItem[];
  userId: number;
  constructor(private route: ActivatedRoute, private user: UserService) {}
  ngOnInit() {
    this.userId = this.route.snapshot.parent.params["id"];
    this.user.getUserWantBook(1, 20, this.userId).subscribe(res => {
      this.books = res.books;
    });
  }
}
