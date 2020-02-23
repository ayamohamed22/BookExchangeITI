import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user/user.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-usereditprofile',
  templateUrl: './usereditprofile.component.html',
  styleUrls: ['./usereditprofile.component.css']
})
export class UsereditprofileComponent implements OnInit {

  user :User;
  loaded=false;
  constructor(private router:ActivatedRoute , private service: UserService) { }

  ngOnInit() {
  
    let userId=this.router.snapshot.parent.params['id'];
    this.service.getById(userId).subscribe(res=>{
      this.user = res[0];
     
      this.loaded = true;
    });
   
  }
  
  updateUser(userForm){
    
    let userId=this.router.snapshot.parent.params['id'];
    let user=this.user;
    // console.log(userId);
    // console.log(userForm);

    // this.service.update(userForm).subscribe(res=>{
    //   this.user=res;
    // })

    //this.user[index]
    // this.service.update()
  }

}
