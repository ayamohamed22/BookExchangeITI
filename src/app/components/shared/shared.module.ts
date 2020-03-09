import { RequestItemComponent } from "./request-item/request-item.component";
import { AddRequestComponent } from "./add-request/add-request.component";
import { RouterModule, Router } from "@angular/router";
import { UserItemComponent } from "./user-item/user-item.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChangeBackgroundDirective } from "src/app/directives/change-background.directive";
import { BookItemComponent } from "./book-item/book-item.component";
import { UserListComponent } from "../home/user-list/user-list.component";
import { BookOverviewComponent } from "./book-overview/book-overview.component";
import { BooklistComponent } from "./booklist/booklist.component";
import { ModalModule } from "./_modal";
import { AutocompleteLibModule } from "angular-ng-autocomplete";

@NgModule({
  declarations: [
    BooklistComponent,
    ChangeBackgroundDirective,
    BookItemComponent,
    UserListComponent,
    UserItemComponent,
    BookOverviewComponent,
    BooklistComponent,
    AddRequestComponent,
    RequestItemComponent
  ],
  imports: [CommonModule, ModalModule, RouterModule, AutocompleteLibModule],
  exports: [
    BooklistComponent,
    ChangeBackgroundDirective,
    BookItemComponent,
    UserListComponent,
    UserItemComponent,
    BooklistComponent,
    BookOverviewComponent,
    CommonModule,
    ModalModule,
    AddRequestComponent,
    AutocompleteLibModule,
    RequestItemComponent
  ]
})
export class SharedModule {}
