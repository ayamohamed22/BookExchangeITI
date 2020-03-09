import { GenreBooksComponent } from "./components/genre-books/genre-books.component";
import { GenersComponent } from "./components/geners/geners.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddBookComponent } from "./components/book/add-book/add-book.component";

import { BookdetailsComponent } from "./components/book/bookdetails/bookdetails.component";
import { BooklistComponent } from './components/shared/booklist/booklist.component';
import { SearchComponent } from './components/search/search.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "book/add", component: AddBookComponent, outlet: "modalShared" },
  { path: "book/details/:id", component: BookdetailsComponent },
  {
    path: "genre",
    component: GenersComponent,
    children: [{ path: ":id", component: GenreBooksComponent }]
  },

  { path: "books/:id", component: BooklistComponent },
  { path: "search/:title", component: SearchComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", pathMatch: "full", component: NotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
