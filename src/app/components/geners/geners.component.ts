import { Genre } from "./../../models/genre_book.model";
import { GenreService } from "./../../services/gener/genre.service";

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-geners",
  templateUrl: "./geners.component.html",
  styleUrls: ["./geners.component.css"]
})
export class GenersComponent implements OnInit {
  genres: Genre[];

  constructor(private router: Router, private service: GenreService) {}
  ngOnInit() {
    this.service.getAllGeners(1, 15, "genreName").subscribe(res => {
      this.genres = res["genre"];
    });
  }
}
