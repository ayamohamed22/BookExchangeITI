import { LoginService } from "./../../../services/user/login/login.service";
import { RequestItemMin } from "./../../../models/request_item.model";
import { Component, OnInit, Input } from "@angular/core";
import { RequestsService } from "src/app/services/requests/requests.service";

@Component({
  selector: "app-request-item",
  templateUrl: "./request-item.component.html",
  styleUrls: ["./request-item.component.css"]
})
export class RequestItemComponent implements OnInit {
  @Input() requestItem: RequestItemMin;
  showAcceptSwap: boolean;

  constructor(
    private requestsService: RequestsService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    // this.requestItem.RequestStatus==1 || this.requestItem.RequestedUser.UserId==l oginService.getCurrentLogginId()
  }
  accept() {
    this.loginService.getCurrentLogginId() ==
      this.requestItem.RequestedUser.UserId;
    this.requestsService.acceptRequest(this.requestItem.Id).subscribe(
      res => {
        this.requestItem = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  refuse() {
    this.requestsService.refuseRequest(this.requestItem.Id).subscribe(
      res => {
        this.requestItem = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  sendSwapRequest() {
    this.requestsService.sendSwapRequest(this.requestItem.Id).subscribe(
      res => {
        this.requestItem = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  acceptSwap() {
    this.requestsService
      .acceptSwapRequest(this.requestItem.Id)
      .subscribe(res => {
        res => {
          this.requestItem = res;
          console.log(res);
        };
      });
  }
}
