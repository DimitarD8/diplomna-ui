import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from '../../service/chat/chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatMessage, User } from '../../models/chat/chat';
import { NavigationComponent } from '../../navigation/navigation/navigation.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, NavigationComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit, OnDestroy {
  messages: ChatMessage[] = [];
  newMessage = '';
  fromUserName: string = '';
  fromUserId: number = 0;
  interval: any;

  constructor(private chatService: ChatService) {
    this.fromUserName = localStorage.getItem('userName')!;
    console.log(this.fromUserName);
    this.chatService.getUserByUserName(this.fromUserName).subscribe((result: User) => {
      this.fromUserId = result.id;
    });
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.loadMessages();
    }, 1000)
  }

  loadMessages(): void {
    this.chatService.getAllMessages().subscribe((data: ChatMessage[]) => {
      this.messages = data;
      console.log(this.messages);
    });
  }

  sendMessage(): void {
    this.chatService.sendMessage(this.fromUserId, this.newMessage).subscribe((msg: ChatMessage) => {
      this.messages.push(msg);
      this.newMessage = '';
    });
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
