export class ChatItemMin {
    senderUserId;
    senderUserName;
    senderUserImage;
    message;
  
    constructor(_senderUserName, _message,_senderUserImage) {
      this.senderUserName = _senderUserName;
      this.message = _message;
      this.senderUserImage = _senderUserImage;
    }
  }
  