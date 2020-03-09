import { Book } from "./book_item.model";
import { User } from "./user.model";
export class RequestItemMin {
  Id: number;
  DateOfMessage: Date;
  RequestedUser: User;
  SenderUser: User;
  RequestedBook: Book;
  RequestStatus: number;
  SendedBook: Book;
  SendSwapUsertId: number;
}
/**
 * Requested =   0,
   RequestSwap = 1,
   Accepted =    2,
   AcceptSwap =  3,
   Refused =     4,
 */
export class RequestStatus {
  Id: number;
  Name: number;
}
