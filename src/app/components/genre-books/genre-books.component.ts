import { Book } from "./../../models/book_item.model";
import { GenreService } from "./../../services/gener/genre.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RequestItemMin } from "src/app/models/request_item.model";

@Component({
  selector: "app-genre-books",
  templateUrl: "./genre-books.component.html",
  styleUrls: ["./genre-books.component.css"]
})
export class GenreBooksComponent implements OnInit {
  books: RequestItemMin[];

  constructor(private route: ActivatedRoute, private service: GenreService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params["id"];
      this.service.getBookByGenreId(1, 20, "have", id).subscribe(res => {
        this.books = res["books"];
      });
    });
  }
}
