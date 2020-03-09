import { UserHaveBook } from "./../../../models/user-want.book.model";
import { UserHaveBookItem } from "./../../../models/user-want.book.model";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";
import { LoginService } from "./../login/login.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "src/app/models/book_item.model";
import { User } from "src/app/models/user.model";
import { Observable } from "rxjs";
import { JsonPipe } from "@angular/common";
import { Chat, ChatContainer } from "src/app/models/chat.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: any;
  constructor(
    private http: HttpClient,
    private service: LoginService,
    private router: Router
  ) {}

  getUserHaveBook(pageNumber, pageSize, userId?): Observable<UserHaveBook> {
    if (!userId) {
      userId = -1;
      // getUserHaveBook(userId?): Observable<Book[]> {
      //   let id;
      //   if (!userId && this.service.isLoggedIn()) {
      //     let jwtHelper = new JwtHelperService();

      //     let token = localStorage.getItem("token");
      //     id = jwtHelper.decodeToken(token)["LogUserId"];
      //   } else {
      //     this.router.navigate(["notFount"]);
      //     return;
      //   }
      return this.http.get<UserHaveBook>(
        "http://localhost:52558/api/home/have",
        {
          params: { userId, pageNumber, pageSize }
        }
      );
    }
  }

  getUserWantBook(pageNumber, pageSize, userId?): Observable<UserHaveBook> {
    if (!userId) {
      userId = -1;
    } 
    return this.http.get<UserHaveBook>("http://localhost:52558/api/home/want", {
      params: { userId, pageNumber, pageSize }
    });
  }
  getById(userId: number): Observable<User> {
    return this.http.get<User>(
      "http://localhost:52558/api/user?id=" + userId + "&type=full)"
    );
  }
  update(user: User): Observable<User> {
    return this.http.put<User>("http://localhost:52558/api/user/putUser", user);
  }
  getUserById(userId: number): Observable<User> {
    console.log(userId);

    return this.http.get<User>(
      "http://localhost:52558/api/user?id=" + userId + "&type=full"
    );
  }
  getChatById(userId: number): Observable<ChatContainer[]> {
    return this.http.get<ChatContainer[]>(
      "http://localhost:52558/api/chat/getcurrentuserchat?userId=" + userId
    );
  }

  getChat(convensionId: string): Observable<ChatContainer[]> {
    return this.http.get<ChatContainer[]>(
      "http://localhost:52558/api/chat/getChatByConversationId?conversationId=" +
        convensionId
    );
  }
}
