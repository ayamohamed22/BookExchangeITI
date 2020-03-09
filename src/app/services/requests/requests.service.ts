import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RequestItemMin } from "src/app/models/request_item.model";

@Injectable({
  providedIn: "root"
})
export class RequestsService {
  constructor(private http: HttpClient) {}

  getRequests(pageNumber, pageSize): Observable<RequestItemMin[]> {
    console.log(pageNumber);

    return this.http.get<RequestItemMin[]>(
      "http://localhost:52558/api/ModifiedRequest",
      {
        params: { pageNumber, pageSize }
      }
    );
  }
  newRequest(senderUserId, recievirUserId, wantedBookId, sendedBookId) {
    let req = new Request();
    req.BookId = sendedBookId;
    req.RecieverId = recievirUserId;
    req.RequestedBookId = wantedBookId;
    req.SenderId = senderUserId;

    console.log(req);
    debugger;

    return this.http.post("http://localhost:52558/api/request/add", req, {
      headers: { "content-type": "application/json" }
    });
  }

  acceptRequest(requestId): Observable<RequestItemMin> {
    return this.http.put<RequestItemMin>(
      "http://localhost:52558/api/Request/Accept?id=" + requestId,
      { id: requestId }
    );
  }
  refuseRequest(requestId): Observable<RequestItemMin> {
    return this.http.put<RequestItemMin>(
      "http://localhost:52558/api/Request/Refuse?id=" + requestId,
      { id: requestId }
    );
  }
  sendSwapRequest(requestId): Observable<RequestItemMin> {
    return this.http.put<RequestItemMin>(
      "http://localhost:52558/api/Requests/RequestSwap?id=" + requestId,
      { id: requestId }
    );
  }
  acceptSwapRequest(requestId): Observable<RequestItemMin> {
    return this.http.put<RequestItemMin>(
      "http://localhost:52558/api/Requests/AcceptSwap?id=" + requestId,
      { id: requestId }
    );
  }
}
export class Request {
  BookId; // sended
  RequestedBookId; //requested
  SenderId; // user
  RecieverId;
}
