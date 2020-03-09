import { Book } from "./../../../models/book_item.model";
import { Component, OnInit, Input } from "@angular/core";
import { ModalService } from "../_modal";

@Component({
  selector: "app-book-overview",
  templateUrl: "./book-overview.component.html",
  styleUrls: ["./book-overview.component.css"]
})
export class BookOverviewComponent implements OnInit {
  @Input() book: Book;

  constructor(private modalService: ModalService) {}

  ngOnInit() {}
  closeModal() {
    this.modalService.close(this.book.Book_Id + "Modal");
  }
}
