import { AddBookComponent } from "./add-book/add-book.component";
import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { BookdetailsComponent } from "./bookdetails/bookdetails.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { BookRoutingModule } from "./book-routing.module";

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    BookRoutingModule
  ],
  declarations: [AddBookComponent, BookdetailsComponent],
  exports: [AddBookComponent, BookdetailsComponent]
})
export class BookModule {}
