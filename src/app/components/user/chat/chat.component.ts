import { Component, OnInit, Input } from '@angular/core';
import { ChatContainer } from 'src/app/models/chat.model';
import { UserService } from 'src/app/services/user/user/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chats :ChatContainer[];
  loaded=false;
  
  constructor(private router:ActivatedRoute , private service: UserService) { }

  ngOnInit() { 
    let id=this.router.params.subscribe(params=>{
      this.service.getChat(params['id']).subscribe((res:ChatContainer[])=>{
        this.chats = [...res];
       // console.log(this.chats);
    })
      //  console.log(this.chats);
      this.loaded = true;
        
  });
  
}}
