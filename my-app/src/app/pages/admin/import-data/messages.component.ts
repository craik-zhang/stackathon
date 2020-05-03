import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/admin/message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
