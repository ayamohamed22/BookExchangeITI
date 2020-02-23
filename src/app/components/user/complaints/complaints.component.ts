import { Component, OnInit } from '@angular/core';
import { Complain } from 'src/app/models/complains.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user/user.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  complains:Complain[];
  loaded=false;
  constructor(private service: UserService) { }

  ngOnInit() {

    this.service.getAllComplains().subscribe((res:Complain[])=>
    {
      this.complains=[...res];
      res[0].ReportedUser.Blocked;
      
    });

    this.loaded =true;
  }

}
