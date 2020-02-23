import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user/user.service';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { Chat, ChatContainer } from 'src/app/models/chat.model';

@Component({
  selector: 'app-searchchat',
  templateUrl: './searchchat.component.html',
  styleUrls: ['./searchchat.component.css']
})
export class SearchchatComponent implements OnInit {

  chats :ChatContainer[];
  loaded=false;
  constructor(private router:ActivatedRoute , private service: UserService) { }

  ngOnInit() {
    
    let userId=this.router.snapshot.parent.params['id'];
    
    this.service.getChatById(userId).subscribe((res:ChatContainer[])=>{
        this.chats = [...res];
        // console.log(this.chats);
        this.loaded = true;
    });
   
  }
}
