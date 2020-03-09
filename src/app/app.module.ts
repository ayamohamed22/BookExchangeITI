import { RequestsService } from "./services/requests/requests.service";
import { GenreBooksComponent } from "./components/genre-books/genre-books.component";
import { SharedModule } from "./components/shared/shared.module";
import { TokenInterceptorsService } from "./services/user/login/TokenInterceptors.service";
import { UserModule } from "./components/user/user.module";
import { SignUpModule } from "./components/sign-up-page/signup.module";
import { LoginModule } from "./components/login-page/login.module";
import { BookModule } from "./components/book/book.module";
import { HomeModule } from "./components/home/home.module";
import { SearchPopupComponent } from "./Components/search/search-popup/search-popup.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { RequestsComponent } from "./components/header/requests/requests.component";
import { RequestItemComponent } from "./components/shared/request-item/request-item.component";

import { ModalComponent } from "./components/shared/modal/modal.component";

import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { GenersComponent } from "./components/geners/geners.component";
import { SearchComponent } from "./components/search/search.component";
import { ContactComponent } from "./components/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    RequestsComponent,
    GenersComponent,
    GenreBooksComponent,
    SearchPopupComponent,
    ModalComponent,
    SearchComponent,
    ContactComponent
  ],

  imports: [
    BrowserModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    HomeModule,
    BookModule,
    LoginModule,
    SignUpModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorsService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
