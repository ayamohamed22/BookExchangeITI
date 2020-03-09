import { LoginService } from "./../../../services/user/login/login.service";
import { RequestsService } from "./../../../services/requests/requests.service";
import { Component, OnInit, Input } from "@angular/core";
import { RequestItemMin } from "src/app/models/request_item.model";

@Component({
  selector: "app-requests-page",
  templateUrl: "./requests-page.component.html",
  styleUrls: ["./requests-page.component.css"]
})
export class RequestsPageComponent implements OnInit {
  @Input() requestItems: RequestItemMin[];
  constructor(
    private loginService: LoginService,
    private requestsService: RequestsService
  ) {}

  ngOnInit() {
    if (this.loginService.isLoggedInNew()) {
      this.requestsService.getRequests(1, 20).subscribe(res => {
        this.requestItems = res;
      });
    }
  }
}
