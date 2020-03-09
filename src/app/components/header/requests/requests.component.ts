import { LoginService } from "./../../../services/user/login/login.service";
import { RequestItemMin } from "./../../../models/request_item.model";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { RequestsService } from "src/app/services/requests/requests.service";

@Component({
  selector: "app-requests",
  templateUrl: "./requests.component.html",
  styleUrls: ["./requests.component.css"]
})
export class RequestsComponent implements OnInit {
  @Input() showRequests: boolean;
  @Output() closeRequests = new EventEmitter<boolean>();
  listOfRequests: RequestItemMin[];
  constructor(
    private login: LoginService,
    private requestService: RequestsService
  ) {}

  ngOnInit() {
    this.login.loggedIn.subscribe(res => {
      if (res) {
        this.requestService.getRequests(+1, 3).subscribe(res => {
          console.log(res);
          this.listOfRequests = res;
        });
      }
    });
    this.login.isLoggedIn();
  }
  onCloseClick() {
    this.showRequests = false;
    this.closeRequests.emit(this.showRequests);
  }
}
