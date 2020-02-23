import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userId :number;
  user :User;
  loaded=false;
  constructor(private router:ActivatedRoute , private service: UserService) { }

  ngOnInit() {
    
    let userId=this.router.snapshot.params['id'];
    this.service.getById(userId).subscribe(res=>{
      this.user = res[0];
      console.log(this.user);
      this.loaded = true;
    });
  }

}
