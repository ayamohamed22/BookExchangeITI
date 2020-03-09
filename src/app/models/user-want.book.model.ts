import { Book } from "src/app/models/book_item.model";
import { User } from "./user.model";
export class UserHaveBook {
  count: number;
  books: UserHaveBookItem[];
  users: UserHaveBookItem[];
}
export class UserHaveBookItem {
  Book: Book;
  User: User;
}
