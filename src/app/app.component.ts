import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  messages: { sender: string, text: string, time: string, avatar: string, file?: File | null }[] = [
    { sender: 'John', text: 'Hello!', time: '10:30 AM', avatar: 'assets/avatar1.png' },
    { sender: 'Amy', text: 'Hi, how are you?', time: '10:35 AM', avatar: 'assets/avatar2.png' },
  ];

  newMessage: string;
  selectedFile: File | null;
  constructor() {
    this.newMessage = '';
    this.selectedFile = null;
    
  }

  sendMessage() {
    if (this.newMessage && this.newMessage.trim() !== '') {
      const message = {
        sender: 'You',
        text: this.newMessage,
        time: new Date().toLocaleTimeString(),
        avatar: 'assets/avatar3.png',
        file: this.selectedFile
      };
      this.messages.push(message);
      this.newMessage = '';
      this.selectedFile = null; // Clear the selected file
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
