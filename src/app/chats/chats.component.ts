
import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { ChatItemMin } from '../models/chat_item.model';
import { ChatsMinService } from '../services/chat-min.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  @Input() showRequests: boolean;
  @Output() closeRequests = new EventEmitter<boolean>();
  listOfRequests: ChatItemMin[];
  constructor(private chatsMinService: ChatsMinService) {}

  ngOnInit() {
    this.listOfRequests = this.chatsMinService.getListOfRequests();
  }
  onCloseClick() {
    this.showRequests = false;
    this.closeRequests.emit(this.showRequests);
  }
}

