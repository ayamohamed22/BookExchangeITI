import { UserService } from "./../../../services/user/user/user.service";
import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-userprofile",
  templateUrl: "./userprofile.component.html",
  styleUrls: ["./userprofile.component.css"]
})
export class UserprofileComponent implements OnInit {
  user: User;
  constructor(private router: ActivatedRoute, private service: UserService) {}

  ngOnInit() {
    console.log();
    let userId = this.router.snapshot.parent.params["id"];
    this.service.getUserById(userId).subscribe(res => {
      this.user = res[0];
    });
  }
}
