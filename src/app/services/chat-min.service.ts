import { Injectable } from "@angular/core";
import { RequestItemMin } from "../models/request_item.model";
import { ChatItemMin } from '../models/chat_item.model';

@Injectable({
  providedIn: "root"
})
export class ChatsMinService {
  tempListOfRequest: ChatItemMin[];
  constructor() {
    this.tempListOfRequest = [];
    this.tempListOfRequest.push(
      new ChatItemMin(
        "Aliiiiiii Mohamed",
        "جيكا مينالي",
        "http://demo.devitems.com/boighor-v3/images/product/sm-img/1.jpg"
      )
    );
    this.tempListOfRequest.push(
      new ChatItemMin(
        "Ali Mohameggggggggd",
        "جيكا مينالي",
        "http://demo.devitems.com/boighor-v3/images/product/sm-img/1.jpg"
      )
    );
    this.tempListOfRequest.push(
      new ChatItemMin(
        "Ali Mohamedhhhhhhhhhhhhhhh",
        "جيكا مينالي",
        "http://demo.devitems.com/boighor-v3/images/product/sm-img/2.jpg"
      )
    );
  }
  getListOfRequests(): ChatItemMin[] {
    return this.tempListOfRequest;
  }
}
