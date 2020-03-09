import { User } from './user.model';

export class Chat {
    Id:number;
    Message : string;
    DateOfMessage : Date;
    SenderUser : User;
    RecieverUser : User;
  }

  export class ChatContainer{
    conversationId: string;
    chat: Chat;
  }
  